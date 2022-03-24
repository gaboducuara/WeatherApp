import './styles.css';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";

function App() {
  const [Users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [isShowing, setIsShowing] = useState(false);

  
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  const selectUser = (user) => setUserSelected(user);

  return (
    <div className="App">

      <button className="create-user" onClick={() => setIsShowing(!isShowing)}>Crear Usuario</button>

      {isShowing ? <UsersForm
          getUsers={getUsers}
          userSelected={userSelected}
          setUserSelected={setUserSelected}
          setIsShowing={setIsShowing}
        />: null}
        
        <UsersList users={Users} selectUser={selectUser} deleteUser={deleteUser} setIsShowing={setIsShowing} />
    </div>
  );
}

export default App;
