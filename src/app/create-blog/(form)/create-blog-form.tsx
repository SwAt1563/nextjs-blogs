"use client";

import { MdTitle, MdCategory } from "react-icons/md";
import { LuSubtitles } from "react-icons/lu";
import { FaImage } from "react-icons/fa6";
import Alert from "@mui/material/Alert";
import clsx from "clsx";

import { useEffect, useState } from "react";

import { CREATE_BLOG, GET_CATEGORIES } from "./queries-mutations";
import { useMutation, useQuery } from "@apollo/client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "./validation";

import ImageDropzone from "./ImageDropZone";
import type { ImageUploadFormState } from "./ImageDropZone";

export default function CreateBlogForm({
  styles,
  userId,
}: {
  styles: {
    readonly [key: string]: string;
  };
  userId: string;
}) {
  const { data: categoriesData } = useQuery(GET_CATEGORIES);
  const [createBlog] = useMutation(CREATE_BLOG);

  const [imageState, setImageState] = useState<ImageUploadFormState>({
    status: null,
    message: null,
    folderPath: "blog",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [successSubmit, setSuccessSubmit] = useState(false);

  const submitData: SubmitHandler<FormData> = (data) => {
    const { title, description, category } = data;
    const imageUrl = imageState?.imageUrl;

    createBlog({
      variables: {
        userId,
        title,
        description,
        categoryName: category,
        imageUrl,
      },
      onCompleted: (data) => {
        console.log("Blog created successfully", data);
        setSuccessSubmit(true);
        reset(); // Reset form on successful submission
      },
    });
  };

  // Effect to hide the success message after 5 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (successSubmit) {
      timer = setTimeout(() => {
        setSuccessSubmit(false); // Hide success message after 5 seconds
        imageState.status = null; // Reset image state
      }, 5000); // 5000 milliseconds = 5 seconds
    }
    // Cleanup timeout
    return () => clearTimeout(timer);
  }, [imageState, successSubmit]); // This effect depends on `showSuccessMessage`

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-7">
          <form onSubmit={handleSubmit(submitData)} id="contentForm">
            <div className="mb-3">
              <label htmlFor="blogTitle" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="blogTitle"
                required
                {...register("title")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categorySelect" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                id="categorySelect"
                required
                {...register("category")}
              >
                <option value="">Select a category</option>
                {categoriesData?.getCategories?.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="blogDescription" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="blogDescription"
                rows={3}
                required
                {...register("description")}
              ></textarea>
            </div>
          </form>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Attachments
            </label>
            <ImageDropzone styles={styles} setImageState={setImageState} />
          </div>

          <button
            type="submit"
            form="contentForm"
            className="btn btn-primary w-100"
          >
            Create Blog
          </button>
        </div>
        <div className="col-lg-5  mt-lg-0 mt-3">
          <div className={`${styles.single_address}`}>
            <i
              className={clsx("fa", {
                "bg-success text-light": successSubmit,
                "bg-danger text-light": errors.title,
              })}
            >
              <MdTitle />
            </i>
            <h4>Blog Title</h4>
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div className={`${styles.single_address}`}>
            <i
              className={clsx("fa", {
                "bg-success text-light": successSubmit,
                "bg-danger text-light": errors.category,
              })}
            >
              <MdCategory />
            </i>
            <h4>Blog Category</h4>
            {errors.category && <p>{errors.category.message}</p>}
          </div>
          <div className={`${styles.single_address}`}>
            <i
              className={clsx("fa", {
                "bg-success text-light": successSubmit,
                "bg-danger text-light": errors.description,
              })}
            >
              <LuSubtitles />
            </i>
            <h4>Blog Description</h4>
            {errors.description && <p>{errors.description.message}</p>}
          </div>
          <div className={`${styles.single_address}`}>
            <i
              className={clsx("fa", {
                "bg-success text-light": imageState?.status === "success",
                "bg-danger text-light": imageState?.status === "error",
              })}
            >
              <FaImage />
            </i>
            <h4>Blog Figure</h4>
            {imageState?.status === "success" && (
              <p>Image uploaded successfully!</p>
            )}
            {imageState?.status === "error" && <p>{imageState.message}</p>}
          </div>

          {successSubmit && (
            <Alert severity="success">
              Your blog post has been successfully created and is now awaiting
              admin approval.
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
