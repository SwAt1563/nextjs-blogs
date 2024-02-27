"use server";
// https://youtu.be/3TaknF1kiN0?si=8PImPZD_8mGU4DWV
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";


export type UploadFormState = {
    status: null | string;
    message: null | string;
    folderPath: string;
    imageUrl?: string;
  };

  

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY as string,
  },
});

async function uploadFileToS3(
    file: Buffer,
    folderPath: string,
    fileName: string
  ): Promise<string> { // Modify return type to Promise<string>
    const fileExtension = fileName.split(".").pop(); // Get the file extension
    const uniqueFileName = `${fileName
      .split(".")
      .slice(0, -1)
      .join(".")}-${uuidv4()}.${fileExtension}`;
  
    const contentType = fileExtension === "png" ? "image/png" : "image/jpeg";
  
    const params = {
      Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
      Key: `${folderPath}/${uniqueFileName}`,
      Body: file,
      ContentType: contentType,
    };
  
    const command = new PutObjectCommand(params);
    try {
      const response = await s3Client.send(command);
      
      // Construct and return the URL
      const url = `https://${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${folderPath}/${uniqueFileName}`;
      return url;
    } catch (error) {
      throw error;
    }
  }
  

export async function uploadFile(
  prevState: UploadFormState,
  formData: FormData
) {
  try {
    const file = formData.get("file");
    const folderPath = prevState.folderPath;

    // Ensure 'file' is not null and is a File object
    if (!file || !(file instanceof File)) {
      return {
        status: "error",
        message: "File not found in the form data.",
        folderPath,
      };
    }

    if (file.size === 0) {
      return { status: "error", message: "File size 0.", folderPath: folderPath};
    }

    // file type
    const fileType = file.type;
    const validFileType = ["image/jpeg", "image/png"];
    if (!validFileType.includes(fileType)) {
      return {
        status: "error",
        message: "Invalid file type.",
        folderPath: folderPath,
      };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const url = await uploadFileToS3(buffer, folderPath, file.name);

    //revalidatePath("/");
    return { status: "success", message: "File has been upload.", folderPath: folderPath, imageUrl: url};
  } catch (error) {
    return {
      status: "error",
      message: "Failed to upload file.",
      folderPath: prevState.folderPath,
    };
  }
}
