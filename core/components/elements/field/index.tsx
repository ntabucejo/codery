import Body from "./body";
import Check from "./check";
import Date from "./date";
import File from "./file";
import Number from "./number";
import Select from "./select";
import Text from "./text";
import Textarea from "./textarea";

const Field = {
  Body: Body,
  Text: Text,
  Textarea: Textarea,
  Number: Number,
  File: File,
  Date: Date,
  Select: Select,
  Check: Check,
};

export default Field;
