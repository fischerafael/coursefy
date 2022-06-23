import Router from "next/router";

export const navigateTo = (url: string): void => {
  Router.push(url);
};
