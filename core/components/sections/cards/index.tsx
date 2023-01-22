import Symbol from "@core/components/elements/symbol";
import { ComponentType, SVGProps } from "react";

type Props = {
  title: string;
  list: {
    title: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    description: string;
  }[];
};

const Cards = ({ title, list }: Props) => {
  return (
    <div className="grid place-items-center gap-10 p-10">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10">
        {list.map((list, index) => (
          <div key={list.title} className="flex flex-col items-center gap-1 text-center">
            <Symbol Icon={list.Icon} size="large" />
            <h1 className="text-2xl font-bold text-primary-dark/90 mt-2"> <span className="mr-2">{index + 1}.</span> {list.title}</h1>
            <p className="text-sm font-semibold text-primary-dark/50 max-w-md">
              {list.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
