import axios from "axios";

export const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  const cloudinaryFolder: string =
    process.env.REACT_APP_CLOUDINARY_FOLDER || "";
  formData.append("file", file);
  formData.append("upload_preset", cloudinaryFolder);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (response.data.secure_url) {
      return response.data.secure_url;
    } else {
      throw new Error("Upload to Cloudinary failed");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
