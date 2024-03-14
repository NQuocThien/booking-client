"use client";
export const STORAGE_KEY = {
  "my-cart": "my-cart",
  "current-lang": "current-lang",
} as const;

export const setLocalStorage = (key: string, value: string | object | []) => {
  if (typeof value === "string") {
    window.localStorage.setItem(key, value);
  } else {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

// export const getLocalStorage = (key: string) => {
//   try {
//     const storedValue = localStorage.getItem(key);
//     return storedValue;
//   } catch (error) {
//     console.error("Lỗi khi truy xuất từ localStorage:", error);
//     return null;
//   }
// };
export const getToken = () => {
  try {
    const storedValue = localStorage.getItem(
      process.env.NEXT_PUBLIC_ACCESS_TOKEN || "access_token"
    );
    return storedValue;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Lỗi khi truy xuất từ localStorage:");
    return null;
  }
};
export const convertToString = (value: string | string[]): string => {
  if (typeof value === "string") {
    return value; // Nếu là kiểu string, trả về ngay
  } else if (Array.isArray(value)) {
    return value[0] || ""; // Lấy phần tử đầu tiên nếu là mảng, hoặc trả về chuỗi trống nếu mảng rỗng
  } else {
    return ""; // Nếu không phải kiểu string hoặc mảng, trả về chuỗi trống
  }
};
