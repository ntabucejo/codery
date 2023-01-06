import Image from "next/image";

const Hero = () => {
  return (
    <section className="contain">
      <div className="relative aspect-video overflow-hidden rounded">
        <Image
          src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
