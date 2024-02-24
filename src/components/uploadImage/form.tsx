"use client";

import { useFormState } from "react-dom";
import { uploadFile } from "./actions";
import {SubmitButton} from "./submit-button";

export type UploadFormState = {
  status: null | string;
  message: null | string;
  folderPath: string;
  imageUrl?: string;
};

export function UploadForm({ folderPath }: { folderPath: string }) {
  const initialState: UploadFormState = {
    status: null,
    message: null,
    folderPath: folderPath,
  };

  const [state, dispatch] = useFormState(uploadFile, initialState);

   // Handle file selection
   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a FormData object to programmatically handle form data
      const formData = new FormData();
      formData.append("file", file); // Adjust this based on your backend expectations

      // Dispatch your upload action
      dispatch(formData); // Example dispatch, adjust based on your actual action creators
    }
  };



  return (
    <div className="form-wrapper">
      <form>
        <input type="file" id="file" name="file" accept="images/*"   onChange={handleFileChange} />
        {/* <SubmitButton /> */}
      </form>

      {/* <form action={dispatch}>
        <input type="file" id="file" name="file" accept="images/*"  />
        <SubmitButton />
      </form> */}

      {state?.status === "success" && 
      
      <div>File uploaded successfully!
        {state.imageUrl}
      </div>
      
      
      }
      {state?.status === "error" && <div>File uploaded Wrong!</div>}

    </div>
  );
}
