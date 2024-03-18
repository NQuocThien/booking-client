export const asscessKey =
  process.env.NEXT_PUBLIC_ACCESS_TOKEN || "access_token";
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
