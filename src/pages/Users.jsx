import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  // const [isAuth] = useContext(AppContext);

  useEffect(() => {
    fetch(`https://reqres.in/api/users`) //Get method by def
      .then((data) => data.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);

  //if user is not autheticated href to login page
  // if (!isAuth) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div>
      {data.map((e, i) => (
        <div key={i}>
          <img src={e.avatar} style={{ width: `100px` }} alt="" />
          <div>▪ {e.first_name}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
