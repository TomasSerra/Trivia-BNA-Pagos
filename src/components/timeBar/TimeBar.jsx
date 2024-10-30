import React from 'react'
import './TimeBar.scss'

function TimeBar({maxTime, actualTime, colors = {barColor: '#fff', backgroundColor: '#000'}}) {
    return (
        <div className="progress-bar-container" style={{backgroundColor: colors.backgroundColor}}>
          <div
            className="progress-bar"
            style={{ width: `${(actualTime/maxTime)*100}%`, backgroundColor: colors.barColor }}
          ></div>
        </div>
      );
}

export default TimeBar