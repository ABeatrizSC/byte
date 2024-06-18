export const updateAuthCookie = (token: string): void => {
  Cookies.set("auth", token, { expires: 10, secure: true });
};

export const getAuthCookie = (): string => Cookies.get("auth");
