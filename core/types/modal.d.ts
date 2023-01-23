export type Modal = {
  state: State;
  handleClose: () => void;
  handleOpen: () => void;
};

export type State = "show" | "hide";
