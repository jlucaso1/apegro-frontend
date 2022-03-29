import { NextPage } from "next/types";
import { Header } from "../../organisms/Header/Header";

export const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <Header src="https://i.imgur.com/nPq34Hv.png" />
      <main>{children}</main>
    </div>
  );
};
