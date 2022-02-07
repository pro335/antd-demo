import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Layout from "./Layout.js";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data);
        },
        (error) => {
          setIsLoaded(true);
        }
      );
  }, []);

  return (
    <div>
      <Layout users={users} />
    </div>
  );
}

export default App;
