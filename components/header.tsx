import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-center my-4">
      <Image src={"/chuck_norris.png"} width={150} height={150}></Image>
    </header>
  );
}
