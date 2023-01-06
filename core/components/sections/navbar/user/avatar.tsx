import Image from "next/image";

const Avatar = () => {
  return (
    <figure className="relative h-10 w-10 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1672860647219-d624a4bf5d06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Avatar"
        fill
        className="rounded-full object-cover"
      />
    </figure>
  );
};

export default Avatar;
