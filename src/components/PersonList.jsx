import { useState } from "react";
import "./PersonList.css";
import User from "./User";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export default function PersonList({ data, deleteUser }) {
  const [show, setShow] = useState(true);

  const myStyle = {
    color: "red",
    fontSize: "30px",
  };

  return (
    <div className="container">
      <div className="header">
        <h2 style={myStyle}>จำนวนประชากร {data.length} คน</h2>
        <span onClick={() => setShow(!show)}>{show ? <FaRegEye size={30}/> : <FaRegEyeSlash size={30}/>}</span>
      </div>
      <ul>
        {show &&
          data.map((item) => (
            <User key={item.id} item={item} deleteUser={deleteUser} />
          ))}
      </ul>
    </div>
  );
}
