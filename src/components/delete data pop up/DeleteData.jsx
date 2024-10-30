import React, {useState} from 'react'
import './DeleteData.scss'

function DeleteData({closePopUp}) {
    const [message, setMessage] = useState()
    const [password, setPassword] = useState('')

    const deleteData = () => {
        if(password === 'borrar'){
            if(localStorage.getItem('answers') !== null){
                localStorage.removeItem('answers')
                localStorage.removeItem('postKey')
                setMessage('Datos eliminados correctamente')
            }
            else{
                setMessage('No hay datos para borrar')
            }
        }
        else{
            setMessage('Contraseña incorrecta')
        }
    }

    return (
        <div className='pop-up-bg'>
            <div className='pop-up'>
                <h1>¿Deseas eliminar los datos locales?</h1>
                <input type='text' placeholder='Contraseña' value={password} onChange={(event) => setPassword(event.target.value)}/>
                <button onClick={deleteData} className='delete-button'>Borrar datos</button>
                <button onClick={closePopUp}>Cerrar</button>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}

export default DeleteData