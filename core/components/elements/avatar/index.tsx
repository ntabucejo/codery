import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size: "small" | "medium" | "large";
  className?: string;
};

const Avatar = ({ src, alt, size, className }: Props) => {
  return (
    <div
      className={`
      ${size === "small" ? "h-8 w-8" : ""} 
      ${size === "medium" ? "h-12 w-12" : ""} 
      ${size === "large" ? "h-40 w-40" : ""} 
      ${className ? className : ""} 
      relative flex-none overflow-hidden`}>
      <Image src={src} alt={alt} fill className="rounded-full object-cover" />
    </div>
  );
};

export default Avatar;
