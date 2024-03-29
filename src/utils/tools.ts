export const asscessKey =
  process.env.NEXT_PUBLIC_ACCESS_TOKEN || "access_token";
export const setLocalStorage = (key: string, value: string | object | []) => {
  if (typeof value === "string") {
    window.localStorage.setItem(key, value);
  } else {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = (key: string): string | undefined => {
  try {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      const storedValue = localStorage.getItem(key);
      if (storedValue) return storedValue;
    }
    return undefined;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Lỗi khi truy xuất từ localStorage:");
    return undefined;
  }
};

export function setCookie(name: string, value: string, days: number) {
  let expires: string = "";
  if (days) {
    const date: Date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getCookie(name: string): string | undefined {
  const cookies: string = document.cookie;
  const cookieArray: string[] = cookies.split("; ");
  for (let i = 0; i < cookieArray.length; i++) {
    const cookiePair: string[] = cookieArray[i].split("=");
    const cookieKey: string = cookiePair[0];
    const cookieValue: string = cookiePair[1];
    if (cookieKey === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return undefined; // Return undefined if cookie not found
}

export const getToken = (): string | undefined =>
  getCookie(asscessKey) || undefined;

export const setToken = (token: string): void => {
  setCookie(asscessKey, token, 10);
};

export const checkExpirationToken = (token: string | undefined): boolean => {
  // cắt token lấy payload và giải mã Base64 URL-encoded  thành JSON rồi chuyển json thành object
  if (token) {
    const expirationTime = JSON.parse(atob(token.split(".")[1])).exp;
    const currentTime = Math.floor(Date.now() / 1000); // Lấy thời gian hiện tại ở đơn vị giây
    if (expirationTime && expirationTime < currentTime) {
      return false;
    }
    return true;
  } else return false;
};

export const checkExToken = (): boolean => {
  const token = getToken();
  // cắt token lấy payload và giải mã Base64 URL-encoded  thành JSON rồi chuyển json thành object
  if (token) {
    const expirationTime = JSON.parse(atob(token.split(".")[1])).exp;
    const currentTime = Math.floor(Date.now() / 1000); // Lấy thời gian hiện tại ở đơn vị giây
    if (expirationTime && expirationTime < currentTime) {
      return false;
    }
    return true;
  } else return false;
};
function deleteCookie(name: string) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
export const removeToken = () => {
  deleteCookie(asscessKey);
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Thêm 1 vì tháng bắt đầu từ 0
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};
export const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  currencyDisplay: "code",
});
