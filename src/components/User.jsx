import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

export default function User({ item, deleteUser }) {
  return (
    <>
      <li
        style={{
          border: "1.5px",
          borderStyle: "solid",
          borderColor: item.gender === "male" ? "green" : "pink",
        }}
      >
        <img src={item.gender == "male" ? boy : girl} width={50} height={50} />
        <p>{item.name}</p>
        <div className="control">
          <button onClick={() => deleteUser(item.id)}>delete</button>
        </div>
      </li>
    </>
  );
}
