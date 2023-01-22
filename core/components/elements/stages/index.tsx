import Board from "./board";

type Props = {
  name: string;
  panels: {
    id: number;
    title: string;
    content: JSX.Element;
  }[];
};

const Stages = ({ name, panels }: Props) => {
  return (
    <div>
      <Board name={name} panels={panels} />
    </div>
  );
};

export default Stages;
