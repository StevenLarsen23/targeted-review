import { useState } from "react";

const DashPun = (props) => {
  const [input, setInput] = useState(props.pun.content);
  const [edit, setEdit] = useState(false);
  return (
    <li style={{ border: "1px solid black" }}>
      {edit ? (
        <input
          value={input}
          style={{ fontSize: "24px", width: "75vw" }}
          onChange={(e) => setInput(e.target.value)}
        />
      ) : (
        <h2>{props.pun.content}</h2>
      )}
      <h3>{`rating: ${props.pun.rating}/10`}</h3>
      {edit ? (
        <div>
          <button
            onClick={() => {
              setInput(props.pun.content);
              setEdit(!edit);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              props.editPun(props.pun.pun_id, input);
              setEdit(!edit);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            setEdit(!edit);
          }}
        >
          Edit
        </button>
      )}
    </li>
  );
};

export default DashPun;
