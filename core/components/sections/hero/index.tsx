import Image from "next/image";

type Props = {
  isContained?: boolean
  image: string
}

const Hero = ({isContained, image}:Props) => {
  return (
    <section className={`${isContained ? 'contain' : ''}`}>
      <div className="smooth relative aspect-[20/6] overflow-hidden rounded">
        <Image
          src={image}
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
