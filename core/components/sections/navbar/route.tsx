import Link from "next/link";

type Props = {
  to: string;
  href: string;
  isBold?: boolean;
};

const Route = ({ to, href, isBold }: Props) => {
  return (
    <li>
      <Link
        href={href}
        className={`${
          isBold ? "font-medium" : ""
        } smooth cursor-pointer whitespace-nowrap text-sm text-primary-dark/fade hover:text-primary-dark`}>
        {to}
      </Link>
    </li>
  );
};

export default Route;
