import React, { useEffect, useState } from "react";
import Axios from "axios";

const Dashboard = ({ setIsAuthenticated }) => {
  useEffect(() => {
    setUserData(fetchData);
  }, []);

  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    await Axios.get("http://localhost:8080/inventory/user", {
      headers: {
        "X-USER-NAME": "user1",
        "Content-Type": "application/json",
      },
      params: {
        pageNumber: 1,
        pageSize: 200,
        sort: "DESC",
      },
    })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="dashboard">
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Dashboard Page</h1>
        <button onClick={fetchData}>Fetch Data</button>
        {userData.results &&
          userData.results.map((row) => (
            <tr key={row.userId}>
              <td>{row.userId}</td>
              <td>{row.userName}</td>
              <td>{row.firstName}</td>
              <td>{row.middleName}</td>
              <td>{row.lastName}</td>
              <td>{row.gender}</td>
              <td>{row.dob}</td>
              <td>{row.age}</td>
              <td>{row.userUuid}</td>
            </tr>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
