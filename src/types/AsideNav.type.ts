import { ReactElement } from "react";

export type AsideNavItem = {
  id: number;
  title: string;
  icon: ReactElement;
  href: string;
  notification: string;
};