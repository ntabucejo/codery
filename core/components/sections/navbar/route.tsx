import Link from "next/link";

type Props = {
  to: string;
  href: string;
};

const Route = ({ to, href }: Props) => {
  return (
    <li>
      <Link
        href={href}
        className="smooth cursor-pointer whitespace-nowrap text-sm font-semibold text-primary-dark/fade hover:text-primary-dark">
        {to}
      </Link>
    </li>
  );
};

export default Route;
