import Avatar from "@core/components/elements/avatar";
import Button from "@core/components/elements/button";
import Pin from "@core/components/elements/pin";
import Symbol from "@core/components/elements/symbol";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-4 rounded px-4">
      <div className="flex items-center gap-3 pr-2">
        <Avatar
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
          alt="Avatar"
          size="medium"
        />
        <div className="flex flex-col">
          <h4 className="font-bold">dev_ed</h4>
          <Pin size="small" Icon={MapPinIcon}>
            Cambodia
          </Pin>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, vel
        excepturi atque accusantium, dolorem, amet eaque suscipit officiis ut
        maiores necessitatibus provident possimus harum numquam modi. Voluptate
        excepturi officiis laborum nam sequi, optio ab, atque autem sint minima
        omnis perferendis nisi ducimus exercitationem, libero iusto natus quae
        voluptates. Cum, quod?
      </p>

      <div className="flex gap-4">
        <Button isFull className="grow-2">
          Order Now $50
        </Button>
        <Button variant="secondary">Message Me</Button>
      </div>
    </div>
  );
};

export default AboutMe;
