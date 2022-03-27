import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-center my-4">
      <div className="rounded-full border border-1 border-green-500 flex justify-center items-center">
        <Image className="rounded-full cursor-pointer scale-95" src={"/chuck_norris.png"} width={150} height={150} alt={"Chuck Norris Logo"} />
      </div>
    </header>
  );
}
