import { ILinkImage } from "@/assets/contains/item-interface";
import axios from "axios";

export type TypeFile = "image" | "video" | "document";
export type TypeFileImage =
  | "doctors"
  | "packages"
  | "facilities"
  | "users"
  | "";
export enum ETypeFile {
  Image = "image",
  Video = "video",
  Document = "document",
}
const BackendUri = process.env.BACKEND_URI
  ? process.env.NEXT_PUBLIC_BACKEND_URI
  : "http://localhost:4000";
export const backendUrlFile = {
  image: `${BackendUri}${"/images"}`,
  video: `${BackendUri}${"/videos"}`,
  document: `${BackendUri}${"/documents"}`,
};

const backendUpload = {
  image: `${BackendUri}${"/webbookingImageUpload"}`,
  video: `${BackendUri}${"/webbookingVideoUpload"}`,
  document: `${BackendUri}${"/webbookingDocumentUpload"}`,
};

export async function uploadFile(
  typeFile: TypeFile, // TypeFile
  files: any[],
  callback: any,
  typeFileImage: TypeFileImage = ""
) {
  Promise.all(
    files.map(
      (file) =>
        new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("file", file);
          axios
            .post(backendUpload[typeFile], formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                imageType: `${typeFileImage}`,
              },
            })
            .then((response) => {
              resolve(response.data?.[0]);
            })
            .catch((error) => {
              reject(error);
            });
        })
    )
  )
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => {
      callback(error);
    });
}

export function getUrlImage(linkImage: any) {
  const { url = "", fileName = "", type = "link" } = linkImage || {};
  if (type === "file") {
    return `${backendUrlFile.image}/${fileName}`;
  }
  return url;
}

export const uploadImage = (
  imageFile: Blob | null,
  typeFileImage: TypeFileImage = ""
): Promise<ILinkImage> => {
  return new Promise((resolve, reject) => {
    uploadFile(
      "image",
      [imageFile],
      (error: any, result: any) => {
        if (error) {
          reject(error);
        } else {
          var ulrImage: string;
          var linkImage: ILinkImage;
          if (typeFileImage === "") {
            ulrImage = `${process.env.NEXT_PUBLIC_BACKEND_URI_IMAGE}/${result[0]?.filename}`;
            linkImage = {
              filename: result[0]?.filename + "",
              type: "image",
              url: ulrImage,
            };
          } else {
            ulrImage = `${process.env.NEXT_PUBLIC_BACKEND_URI_IMAGE}/${typeFileImage}/${result[0]?.filename}`;
            linkImage = {
              filename: result[0]?.filename + "",
              type: "image",
              url: ulrImage,
            };
          }
          resolve(linkImage);
        }
      },
      typeFileImage
    );
  });
};
