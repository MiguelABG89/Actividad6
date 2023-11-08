import React, { useState } from 'react';


function Formulario(){
    
    const [NomUser,setNomUser]= useState("")
    const [ApeUser,setApeUser]= useState("")
    const [Email,setEmail]= useState("")
    const [Sexo,setSexo]= useState("Masculino")
    const [Mensaje,setMensaje]= useState("")
    const [Condiciones,setCondiciones]= useState(false)

    const handleInputChangeNombre = (e) => {
        setNomUser(e.targer.value);
    };
    const handleInputChangeApe = (e) => {
        setApeUser(e.target.value);
    };

    const handleInputChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleInputChangeSexo = (e) => {
        setSexo(e.target.value);
    };

    const handleInputChangeMensaje = (e) => {
        setMensaje(e.target.value);
    };

    const handleInputChangeCondiciones = (e) => {
        setCondiciones(e.target.checked);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if(NomUser && NomUser.length <= 10 && ApeUser && ApeUser.length <= 20 && Email && Email.length <= 20 && Email.includes('@') && Mensaje.length <= 500 && Condiciones){
            const usuario = {
                nombre: NomUser,
                apellidos: ApeUser,
                email: Email,
                sexo: Sexo,
                mensaje: Mensaje
            };
            console.log(usuario);

        }else{

            alert("Por favor, completa el formulario correctamente.");

        }
        
    }
    return(

        <form onSubmit={handleSubmit}>
            <div class="form-example">
                <label for="name">Introduce el nombre de usuario: </label>
                <input type="text" name={NomUser} id="name" onChange={handleInputChangeNombre} maxLength={10}  />
            </div>
            <br/>
            <div class="form-example">
                <label for="email">Introduce el apellido de usuario : </label>
                <input type="email" name={ApeUser} id="email" onChange={handleInputChangeApe} maxLength={20}  />
            </div>
            <br/>
            <div class="form-example">
                <label for="email">Introduce el email de usuario : </label>
                <input type="email" name={Email} id="email" onChange={handleInputChangeEmail} maxLength={20}  />
            </div>
            <br/>
            <div>
                <label for="sexo">Introduce el email de usuario : </label>
                <select name="sexo" value={Sexo} id="sexo" onChange={handleInputChangeSexo}>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
            </div>
            <br/>
            <div>
                <label for="mensaje">mensaje : </label>
                <textarea name="mensaje" value={Mensaje} onChange={handleInputChangeMensaje} maxLength={500} />
            </div>
            <br/>
            <div>
                <label for="aceptaTerminos">Acepto los términos y condiciones : </label>
                <input type="checkbox" name="aceptaTerminos" onChange={handleInputChangeCondiciones} checked={Condiciones}  />
            </div>
            <br/>
            <div class="form-example">
                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </div>
        </form>
    )
}
export default Formulario;