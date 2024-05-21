import { ID, storage } from "@/appwrite/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "65fa9e3c04379ec8137f",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
