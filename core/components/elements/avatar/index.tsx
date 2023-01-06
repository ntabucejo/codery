import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

const Avatar = ({ src, alt }: Props) => {
  return (
    <div className="relative h-8 w-8 overflow-hidden">
      <Image src={src} alt={alt} fill className="rounded-full object-cover" />
    </div>
  );
};

export default Avatar;
