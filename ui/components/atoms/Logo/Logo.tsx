// import Image from "next/image";

interface LogoProps {
  onClick?: () => void;
  src: string;
}

export const Logo: React.FC<LogoProps> = ({ ...props }) => (
  <div className="rounded-full border-2 border-green-500 inline-flex justify-center items-center">
    <img
      width={150}
      height={150}
      alt={"Logo"}
      {...props}
      className="rounded-full cursor-pointer scale-95"
    />
  </div>
);
