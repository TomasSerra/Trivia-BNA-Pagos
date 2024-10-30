import React, {useState} from 'react'
import './UploadData.scss'
import { getDatabase, ref, child, push, update , get} from "firebase/database";
import app from '../../FirebaseConfig'

function UploadData({closePopUp}) {
    const db = getDatabase(app);

    const [message, setMessage] = useState()
    const [subiendo, setSubiendo] = useState(false)

    const uploadData = () => {
        try{
            setMessage('No cierres la aplicación mientras se suben los datos')
            if(!navigator.onLine){
                setMessage('No hay conexión a internet')
                return;
            }
            setSubiendo(true)

            const postKey = localStorage.getItem('postKey')
            const updates = {};
            if(localStorage.getItem('answers') === null){
                setMessage('No hay datos para subir')
                setSubiendo(false)
                return;
            }

            updates[postKey] = JSON.parse(localStorage.getItem('answers'));
            update(ref(db), updates).then(() => {
                setMessage('Datos subidos correctamente')
                setSubiendo(false)
            }
            ).catch(() => {
                setMessage('Error al subir los datos')
                setSubiendo(false)
            });
        }
        catch(e){
            console.log(e)
            setMessage('Error al subir los datos')
            setSubiendo(false)
        }
    }

    return (
        <div className='pop-up-bg'>
            <div className='pop-up'>
                <h1>¿Cargar datos a la base de datos?</h1>
                <button onClick={uploadData} className='upload-button' disabled={subiendo}>{subiendo ? "Subiendo..." : "Subir"}</button>
                <button onClick={closePopUp} disabled={subiendo}>Cerrar</button>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}

export default UploadData;