
import React from 'react';

const UsersForm = ({submit,
                    nombre,
                    setNombre,
                    apellido,
                    setApellido,
                    email,
                    setEmail,
                    cumpleaños,
                    setCumpleaños,
                    contraseña,
                    setContraseña,
                    usuarios,
                    limpiar
                }) => {

console.log(usuarios?.id)

    return (
        <form >
            <div className="nombre">
                <label  htmlFor='primerNombre'> Nombres </label>
                <input 
                    type="text" 
                    id='primerNombre'
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                    placeholder='Gabriel'
                /> 
            </div>
            <div className="apellido">
                <label  htmlFor='Apellido'> Apellido </label>
                <input 
                    type="text" 
                    id='Apellido'
                    value={apellido}
                    onChange={e=>setApellido(e.target.value)}
                    placeholder='Mancilla'
                /> 
            </div>
            <div className="cumpleaños">
                <label  htmlFor='Cumple'> Cumpleaños </label>
                <input 
                type="date" 
                id='Cumple'
                value={cumpleaños}
                onChange={e=>setCumpleaños(e.target.value)}
                
            /> 
            </div>
            <div className="email">
                <label  htmlFor='Email'> email </label>
                <input 
                type="email" 
                id='Email'
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder='Gabomancilla.10@gmail.com'
            /> 
            </div>
            <div className="contraseña">
                <label  htmlFor='Contra'> Contraseña </label>
                <input 
                type="password" 
                id='Contra'
                value={contraseña}
                onChange={e=>setContraseña(e.target.value)}
                placeholder='pAlabra288#?!'
                /> 
            </div>
            <button onClick={submit}>Enviar</button>
            <button onClick={limpiar}>Limpiar</button>
        </form>
    );
};

export default UsersForm;