import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([{ email: "sdkefjGiMailShirt.com", name: "Kingsley" }]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, ...data]);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <h2>
          {user.name}({user.email})
        </h2>
      ))}
    </div>
  );
}

export default App;
