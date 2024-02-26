import {
  useCallback,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "@/src/lib/actions/image-actions";
import { useFormState } from "react-dom";
import clsx from "clsx";

export type ImageUploadFormState = {
  status: null | string;
  message: null | string;
  folderPath: string;
  imageUrl?: string;
};

const imageInitialState: ImageUploadFormState = {
  status: null,
  message: null,
  folderPath: "blog",
};

const ImageDropzone = ({
  setImageState,
  styles,
}: {
  setImageState: Dispatch<SetStateAction<ImageUploadFormState>>;
  styles: {
    readonly [key: string]: string;
  };
}) => {
  const [imageState, imageDispatch] = useFormState(
    uploadFile,
    imageInitialState
  );

  const [imageIsUploading, setImageIsUploading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        setImageIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        imageDispatch(formData);
      }
    },
    [imageDispatch]
  );

  useEffect(() => {
    if (imageState.status) {
      setImageIsUploading(false);
      setImageState(imageState);
    }
  }, [imageState, imageState.status, setImageState]);

  const { getRootProps, getInputProps, fileRejections, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
      disabled: imageIsUploading,
    });


  useEffect(() => {
    if (fileRejections.length > 0) {
      imageState.status = "error";
      imageState.message = "Invalid file type.";
      setImageState(imageState);
    }
  }, [fileRejections.length, imageState, setImageState]);

  return (
    <div
      {...getRootProps()}
      className={clsx(
        `${styles.dropzone}`,
        "mb-3",
        "form-control",
        { "border-primary": isDragActive, "border-secondary": !isDragActive }
      )}
    >
      <input id="file" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="text-primary">Drop the image here...</p>
        ) : (
          <p>Drag and drop an image here, or click to select one</p>
        )}
      </div>
    </div>
  );
};

export default ImageDropzone;
