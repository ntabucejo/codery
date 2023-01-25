import { PhotoIcon } from "@heroicons/react/24/solid";
import Symbol from "../symbol";

const NoImage = () => {
  return (
    <div className="flex aspect-video flex-col items-center justify-center rounded border bg-white">
      <Symbol
        Icon={PhotoIcon}
        size="large"
        isHoverDisabled
        className="animate-bounce"
      />
      <span className="text-sm font-semibold text-primary-dark/fade">
        No Image Uploaded
      </span>
    </div>
  );
};

export default NoImage;
