import { NextPage } from "next/types";
import Header from "./header";

export const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}