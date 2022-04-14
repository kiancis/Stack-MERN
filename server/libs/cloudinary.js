import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "kiancis",
  api_key: "629811799558256",
  api_secret: "YCan3YtfUuIfgLkXV4f7paqPOMI",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id, );
}
