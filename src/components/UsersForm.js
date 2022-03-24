import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UsersForm = ({ getUsers, userSelected, setUserSelected, setIsShowing }) => {
const [name, setName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [birthday, setBirthday] = useState("");
const [password, setPassword] = useState("");

useEffect(() => {
    if (userSelected) {
        setName(userSelected.first_name);
        setLastName(userSelected.last_name);
        setEmail(userSelected.email);
        setBirthday(userSelected.birthday);
        setPassword(userSelected.password)
    }
}, [userSelected]);

const submit = (e) => {
    e.preventDefault();
    const user = {
        first_name: name,
        last_name: lastName,
        email: email,
        birthday: birthday,
        password,
    };

    if (userSelected) {
    axios
        .put(
            `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
            user
        )
        .then(() => {
            getUsers();
            setUserSelected(null);
            reset();
        });
    } else {
    axios
        .post("https://users-crud1.herokuapp.com/users/", user)
        .then(() => {
        getUsers();
        reset();
        })
        .catch((error) => console.log(error.response));
    }
};

const reset = () => {
    setUserSelected(null);
    setName("");
    setLastName("");
    setEmail("");
    setBirthday("");
    setPassword("")
};

return (
    <>
        <h1>CREAR USUARIO</h1>
        <form onSubmit={submit} className="users-form">
        <div className="input-container">
            <label htmlFor="name">Nombre: </label>
            <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
        </div>
        <div className="input-container">
            <label htmlFor="last-name">Apellido: </label>
            <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            />
        </div>
        <div className="input-container">
            <label htmlFor="email">E-Mail: </label>
            <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </div>
        <div className="input-container">
            <label htmlFor="birthday">Fecha de nacimiento: </label>
            <input
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            />
        </div>
        <div className="input-container">
            <label htmlFor="password">Constraseña: </label>
            <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
        </div>
        <button>Enviar</button>
        <button onClick={() => {
            setIsShowing(false) 
            reset()} } type="button">
            Limpiar
        </button>
        </form>
    </>
);
};

export default UsersForm;