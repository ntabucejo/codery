// this is like the teaser for each message. shows the name, profile and message

import Avatar from "@core/components/elements/avatar";

const Message = () => {
  return (
    <div className="">
      <div className="flex gap-2 border-b py-2 px-4">
        <Avatar
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="Avatar"
          size="medium"
        />

        <div className="flex flex-col ">
          <h4 className="h-4 w-60 overflow-hidden text-sm font-semibold">
            Hailey Gee Hailey GeeHailey GeeHailey GeeHailey GeeHailey GeeHailey
            Gee
          </h4>
          <p className="mt-1 h-10 w-60 overflow-hidden text-sm">
            That's nice! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quidem, omnis.
          </p>
          <h5 className="mt-2 text-xs">1 week ago</h5>
        </div>
      </div>
    </div>
  );
};

export default Message;
