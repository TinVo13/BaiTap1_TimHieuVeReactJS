import { send } from "process";

type PersonProps = {
  parentCallback(name: string): void;
}
export default function Person(props: PersonProps){
  const sendData = () => {
    props.parentCallback("Vo Trung Tin");
  }
  return (
    //gọi sendData() bất cứ khi nào muốn 
    //truyển dữ liệu lên Parent component
    <button onClick={sendData}>Click me!</button>
  )
}
