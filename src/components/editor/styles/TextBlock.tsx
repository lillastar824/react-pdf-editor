import { style } from "typestyle";
import { Colors } from "../../styles/Colors";

export const Main = style({
  $debugName: "TextBlockMain",
  border: 0,
  padding: 15,
  width: "100%",
  background: Colors.White,
  fontFamily: "Fira Sans"
});
export const styleLabel = style({
  $debugName: "TextBlockStyleLabel",
  fontSize: 10,
  color: Colors.Black,
  padding: 5,
  textAlign: "center",
  cursor: "pointer"
});