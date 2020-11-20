import { useState, useEffect } from "react";
import axios from "axios";
import DashPun from "./DashPun";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const [puns, setPuns] = useState([]);

  useEffect(() => {
    const getPuns = async () => {
      try {
        const puns = await axios.get("/api/puns");
        setPuns(puns.data);
      } catch (err) {
        console.log(err);
      }
    };

    getPuns();
  }, []);

  const editPun = async (id, content) => {
    try {
      //-id refers to pun id
      const res = await axios.put(`/api/pun/${id}`, { content });
      setPuns(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const mappedPuns = puns.map((pun, i) => {
    //-each thing returned here goes onto the mappedPuns array
    //-this function will fire once per pun
    return <DashPun key={`${pun.pun_id}-${i}`} pun={pun} editPun={editPun} />;
  });

  console.log(mappedPuns);

  return (
    <div>
      <div>Dahsboard</div>
      <p>{props.pokemon ? props.pokemon.name : null}</p>
      <ul>
        <li style={{ listStyle: "none" }}>{mappedPuns}</li>
      </ul>
    </div>
  );
};

export default connect((reduxState) => reduxState)(Dashboard);
