// import Image from "next/image";
import Router from "next/router";
import { Logo } from "../../atoms/Logo/Logo";

interface HeaderProps {
  src: string;
}

export const Header: React.FC<HeaderProps> = ({ src }) => (
  <header className="w-full flex justify-center my-4">
    <Logo src={src} onClick={() => Router.push("/")} />
  </header>
);
