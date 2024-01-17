import React, { useEffect } from 'react'
import './style.css'
import Card from './Cards/Card.jsx'
import Shipicon from './Assets/icon-ship.png'
import Etherum from './Assets/etherum.png'
import TopArrow from './Assets/prev.svg'
import BottomArrow from './Assets/next.svg'

import UssopBack from './Assets/rectangle_1_copy.png'
import Ussop from './Assets/usopp.png'

function Comp() {

  return (
    useEffect(() => {
      setInterval(() => {
        // ... Your interval logic

        // UPDATE TIME HERE ******************************************


        let hourvalue = 17;

        let hh = document.getElementsByTagName('circle')[0];



        hh.style.setProperty('--animation-progress', (836 - (836 * hourvalue) / 22));

        setTimeout(() => {
          hh.style.strokeDashoffset = 836 - ((836 * hourvalue) / 22);
        }, 9000)
        // HEREHERE



        // mayur = mayur+1;


      }, 1000);

    }, []),

    <div className='App'>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />


        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nexa:wght@800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas Neue:wght@400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=MADE TOMMY:wght@700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400&display=swap"
        />
      </head>
      <div className="left-box-wrapper">

        <div className='left-box    '>
          <div className="entire-fleet">
            ENTIRE FLEET
            <img className='ship-icon' src={Shipicon} />

          </div>
          <div className='navigator'>
            <div id='navigator-1'></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>


      </div>



      {/*---------------------------------------CARDS-------------------------------------*/}



      <div className="middle-box-wrapper">
        <div className='upper-arrow'>
            <img src={TopArrow} alt="" />
        </div>
        
        <div className='card-wrapper'>
         <div className="card-box">
         <div className='card-box1'>
         <Card 
          backimg={UssopBack} 
          character = {Ussop}
          color1 = "#d9cb86"
          doubloonValue = "$0.00000143"
          tidalShift = "0.00%"
          sunken = "0.13 ETH"

          />
          </div>
          <div className='card-box2'>
          <Card 
          backimg={UssopBack} 
          character = {Ussop}
          color1 = "#d9cb86"
          doubloonValue = "$0.00000143"
          tidalShift = "0.00%"
          sunken = "0.13 ETH"

          />
          </div>
         </div>

        </div>
        
        <div className='bottom-arrow'>
            <img src={BottomArrow} alt="" />
        </div>
      </div>












      <div className="right-box-wrapper">

        <div className='right-box' >
          <div className="skill-wrapper">
            <div className="skill">
              <div className="outer">
                <div className="inner">
                  <div className="progress-inside">
                    TIDE'S RESET
                  </div>
                </div>
              </div>
              <svg className='progress-svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px" overflow="visible">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="rgb(132,16,255)" />
                    <stop offset="100%" stop-color="rgb(15,77,255)" />
                  </linearGradient>
                </defs>
                <circle cx="150" cy="150" r="133" stroke-linecap="round" />
              </svg>
            </div>
          </div>
          <div className='time-wrapper'>
            <div className="time-box">
              <div className="time-box-1">
                <div className="time-box-11">
                  <div id="hour-value">17</div>
                  <div>:</div>
                  <div id="min-value">52</div>
                </div>
                <div className="time-box-2">
                  <div id="hour-sym">HRS</div>
                  <div></div>
                  <div id="min-sym">MINS</div>
                </div>
              </div>

            </div>
          </div>

          <div className="crew-share-wrapper">
            <div className="crew-share-box">

              <div className="crew-share">
              <div id="crew-share-name">CREW'S SHARE</div>
              <div id="crew-share-value">1,234,567</div>


              </div>
              <div className="bounty-harvest">
              <div id="bounty-harvest-name">BOUNTY HARVEST</div>
              <div id="bounty-harvest-value">
                0.17
                <img src={Etherum} alt="" />
              </div>

              </div>

            </div>
            

          </div>
          <div className="right-two-buttons-wrapper">
            <div className="two-button-box">
              <div className="two-btn-b1">
                CLAIM
                <br/>
                YER BOOTY
              </div>
              <div className="two-btn-b2">
                BOOSTED CLAIM
                <br/>
                +33% TRESURE
              </div>
              
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Comp
