"use client";

import Route from "@core/components/elements/route";
import { usePathname } from "next/navigation";

type Props = {
  tab: string;
};

const Tab = ({ tab }: Props) => {
  const pathName = usePathname();
  const href = tab.split(" ").join("-").toLowerCase();
  const isActive = pathName?.includes(href);

  console.log(pathName, href, isActive);

  return <Route to={tab} href={`${pathName}#${href}`} isBold={isActive} />;
};

export default Tab;
