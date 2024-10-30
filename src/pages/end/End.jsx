import React, {useEffect} from 'react'
import './End.scss'
import Trophy from './../../assets/imgs/end/trophy.webp'
import FondoTrofeo from './../../assets/imgs/end/fondo-trofeo.png'
import Confetti from 'react-confetti'
import {useWindowSize} from '@react-hook/window-size'
import Logos from '../../assets/svgs/logos'
import BottomLeft from '../../assets/svgs/BottomLeft'
import BottomRight from '../../assets/svgs/BottomRight'

function End({correctQuestions, totalQuestions, goToNextPage, storageDataKey = "played"}) {
  const [width, height] = useWindowSize()

  const getActualDay = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const changeLocalStorageStats = () => {
    const actualDay = getActualDay();
    const JSONstats = localStorage.getItem(storageDataKey);
    let stats = JSONstats ? JSON.parse(JSONstats) : {};

    if (stats[actualDay]) {
      stats[actualDay]++;
    } else {
      stats[actualDay] = 1;
    }

    localStorage.setItem(storageDataKey, JSON.stringify(stats));
};

  useEffect(() => {
    changeLocalStorageStats();
    setTimeout(() => {
      goToNextPage()
    }, 5000)
  }, []);

  return (
    <div className='end-page'>
      <Confetti
        width={width}
        height={height}
        zIndex={100}
    	/>

      <div className="top-section">
        <Logos  width="60vw"/>
      </div>

      <div className="title-section">
        <h1>{((correctQuestions/totalQuestions) >= 0.5) ? '¡Excelente!' : '¡Gracias por participar!'}</h1>
        <h2>Respondiste {correctQuestions}/{totalQuestions} preguntas correctamente</h2>
      </div>

      {((correctQuestions/totalQuestions) >= 0.5) ?
        <div className="prize-section">
          <img className='trophy' src={Trophy}/>
          <img className='trophy-bg' src={FondoTrofeo}/>
        </div>
        :
        <div className="prize-section">
          <h2>Seguí aprendiendo de Educación Financiera</h2>
        </div>
      }
		<BottomLeft className="bottom-left"/>
		<BottomRight className="bottom-right"/>
    </div>
  )
}

export default End
