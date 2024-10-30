import React, {useState} from 'react'
import './SecretButton.scss'

function SecretButton({whenClicked=()=>{}, totalClicks=3}) {
    const [clickCount, setClickCount] = useState(0)

    const handleClick = () => {
        setClickCount(prev => prev + 1)
        setTimeout(() => {
            setClickCount(0)
        }, 500)
        if(clickCount + 1 === totalClicks){
            whenClicked()
        }
    }
  return (
    <div className='secret-button' onClick={handleClick}></div>
  )
}

export default SecretButton