import Image from "next/image";

type Props = {
  image: string;
};

const Hero = ({ image }: Props) => {
  return (
    <section className="contain">
      <div className="smooth relative aspect-[20/6] overflow-hidden rounded">
        <Image src={image} alt="Hero Image" fill className="object-cover" />
      </div>
    </section>
  );
};

export default Hero;
