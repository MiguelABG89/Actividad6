import React, { useState, useEffect, useCallback } from 'react';


function Formulario(){
    
    const [NomUser,setNomUser]= useState("");
    const [ApeUser,setApeUser]= useState("");
    const [Email,setEmail]= useState("");
    const [Sexo,setSexo]= useState("Masculino");
    const [Mensaje,setMensaje]= useState("");
    const [Condiciones,setCondiciones]= useState(false);
    const [MensajeError,setMensajeError]= useState("");
    const [MensajeError2,setMensajeError2]= useState("");
    const [MensajeError3,setMensajeError3]= useState("");
    const [MensajeError4,setMensajeError4]= useState("");

    const handleInputChangeName = (e) =>{
        setNomUser(e.target.value)
    };

    const validar = useCallback(
        function(){
            if(NomUser.length<=10) {
                setMensajeError("");
            
            } else {
                setMensajeError("El maximo de caracteres para el Nombre son 10");
                
            }

            if(ApeUser.length<=20){
                setMensajeError2("");
            }else{
                setMensajeError2("El maximo de caracteres para el Apellido son 20");
            }

            if(Email.length<=20 && Email.includes("@")){
                setMensajeError3("");
            }else{
                setMensajeError3("El maximo de caracteres para el email son 20 y tiene que incluir @");
            }

            if(Mensaje.length<=500){
                setMensajeError4("");
            }else{
                setMensajeError4("El maximo de caracteres para el mensaje son 500");
            }

        },
        [NomUser,ApeUser,Email,Mensaje]
    )
    useEffect(
        function(){
            validar();
            console.log(NomUser.length)
        },
        [validar]
    )

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
        if(NomUser.length <= 10 && ApeUser.length <= 20 && Email.includes('@') && Mensaje.length <= 500 && Condiciones==true){
            const usuario = {
                nombre: NomUser,
                apellidos: ApeUser,
                email: Email,
                sexo: Sexo,
                mensaje: Mensaje,
                condicion: Condiciones
            };
            console.log(usuario);
        }
        
    }
    
    return(

        <form onSubmit={handleSubmit}>
            <div class="form-example">
                <label for="name">Introduce el nombre de usuario: </label>
                <input type="text" value={NomUser} id="name" onChange={handleInputChangeName} />
                <p>{MensajeError}</p>
            </div>
            <br/>

            <div class="form-example">
                <label for="email">Introduce el apellido de usuario : </label>
                <input type="email" name={ApeUser} id="email" onChange={handleInputChangeApe} />
                <p>{MensajeError2}</p>
            </div>
            <br/>

            <div class="form-example">
                <label for="email">Introduce el email de usuario : </label>
                <input type="email" name={Email} id="email" onChange={handleInputChangeEmail} />
                <p>{MensajeError3}</p>
            </div>
            <br/>

            <div>
                <label for="sexo">Introduce el email de usuario : </label>
                <select name="sexo" value={Sexo} id="sexo" onChange={handleInputChangeSexo}>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Astronauta">Astronauta</option>
                </select>

            </div>
            <br/>

            <div>
                <label for="mensaje">mensaje : </label>
                <textarea name="mensaje" value={Mensaje} onChange={handleInputChangeMensaje} />
                <p>{MensajeError4}</p>
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