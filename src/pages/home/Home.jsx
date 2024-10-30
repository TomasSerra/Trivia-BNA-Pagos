import React, {useState} from 'react'
import './Home.scss'
import SecretButton from '../../components/secretButton/SecretButton'
import StatsViewer from '../../components/statsViewer/StatsViewer'
import Logos from '../../assets/svgs/logos'
import BottomLeft from '../../assets/svgs/BottomLeft'
import BottomRight from '../../assets/svgs/BottomRight'



function Home({goToNextPage, logo}) {
	const [openStatsPopUp, setOpenStatsPopUp] = useState(false)

  return (
    <div className='home-page'>
		<SecretButton whenClicked={()=>{setOpenStatsPopUp(true)}} totalClicks={3} />
		{openStatsPopUp && <StatsViewer whenClose={()=>{setOpenStatsPopUp(false)}} storageKey="played"/>}
        <div className="top-section">
        	<Logos  width="60vw"/>
        </div>
        <div className="title-section">
			<h1>¡Bienvenido!</h1>
			<h2>Demostrá cuánto conoces sobre +Pagos</h2>
        </div>
        <div className="button-section">
            <button onClick={goToNextPage}>Jugar</button>
        </div>
		<BottomLeft className="bottom-left"/>
		<BottomRight className="bottom-right"/>
    </div>
  )
}

export default Home