import React from 'react'
import './QR.scss'
import QRimage from '../../assets/imgs/qr/qr.png'

function QR({goToNextPage, logo}) {
  return (
    <div className='qr-page'>

    <div className="top-section">
      <img src={logo} />
    </div>

    <div className="title-section">
      <h1>Seguinos en nuestras redes</h1>
    </div>

    <div className="qr-section">
      <img src={QRimage}/>
    </div>

    <button className="button" onClick={goToNextPage}>Finalizar</button>

  </div>
  )
}

export default QR