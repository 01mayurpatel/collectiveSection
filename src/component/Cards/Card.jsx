import React, { useEffect, useState } from 'react'
import CopyLink from '../Assets/copy-link.png'
import './Card.css'
import Mcap from '../Assets/mcap_png_1.png'
import Holders from '../Assets/holders_png_1.png'
import Bars from '../Assets/rectangle_1_copy_3.png'
import Owner from '../Assets/owner_png_1.png'

function Card(props) {
    
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
      setIsClicked(true);
  
      // Reset isClicked after the transition duration
      setTimeout(() => {
        setIsClicked(false);
        
      }, 100); // Adjust the duration based on your CSS transition time
    };
    const [isClicked2, setIsClicked2] = useState(false);

    const handleClick2 = () => {
      setIsClicked2(true);
  
      // Reset isClicked after the transition duration
      setTimeout(() => {
        setIsClicked2(false);
      }, 100); // Adjust the duration based on your CSS transition time
    };
        
    
        // Cleanup event listener on component unmount
       
    
    let Section1 = document.getElementsByClassName('section-1')[0];

    const [tagcolor, settagcolor] = useState('');
    const [charName, setCharName] = useState('');
  const [charTag, setCharTag] = useState('');
  function myFunction() {
    var copyText = '0xbb02647c4ed460d08df6254d69f11217c52ad326';
    navigator.clipboard.writeText(copyText);
  
  }
  useEffect(() => {
      if (props.ids === 1) {
          settagcolor('#ebd091')
          setCharName('<span>M</span>ONKEY <span>D</span>. <span>L</span>UFFY');
    //   var jj = charName
     
      setCharTag('THE RUBBER BANDED RASCAL');

    //   setCharName('');/
    } else if (props.ids === 2) {
        settagcolor('#ffc87a')

        setCharName('<span>V</span>NSMOKE <span>S</span>ANJI');
        
      setCharTag('THE KICKIN’ COOK WITH A HEART OF GOLD');
    } else if (props.ids === 3) {
        settagcolor('#ffa754')
        
        setCharName('<span>N</span>AMI');
        
        setCharTag('THE SAVVY NAVIGATOR AND WEATHER');
    } else if (props.ids === 4) {
        settagcolor('#ff9082')
        setCharName('<span>C</span>HOPPER');
        
        setCharTag('THE CUTEST DOCTOR TO EVER SAIL THE GRAND LINE');
    } else if (props.ids === 5) {
        settagcolor('#18ffba')
        setCharName('<span>R</span>ORONOA <span>Z</span>ORO');
        
        setCharTag('THE SWORD WEILDING SLEEPWALKER');
    } else if (props.ids === 6) {
        settagcolor('#6edbff')
        setCharName('<span>F</span>RANKY ');
        
        setCharTag('THE COLA FUELED SHIPWRIGHT WITH A ROCKIN’ DO');
    } else if (props.ids === 7) {
        settagcolor('#bc9dff')
        setCharName('<span>N</span>ICO <span>R</span>OBIN');
        
        setCharTag('THE HISTORY BUFF WITH MANY HANDS');
    } else if (props.ids === 8) {
        settagcolor('#93b8ff')
        setCharName('<span>J</span>INBE');
        
        setCharTag('THE FISH-MAN WITH A KNACK FOR DIPLOMACY');
    } else if (props.ids === 9) {
        settagcolor('#f9f9ea')
        setCharName('<span>B</span>ROOK');
        
      setCharTag('THE SOULFUL SKELETON WITH AN AFRO TO DIE');
    }else if (props.ids === 10) {
        setCharName('<span>U</span>SOPP');
        
      setCharTag('THE LONG NOSED SNIPER KING');
    }
  }, [props.ids]);

    return (
        <div className='card-main'>
            <div className="main-box">
                <div className="card-container" style={{backgroundColor:`${props.bgcolor}`}}>
                    <div className="section-1" style={{ backgroundImage: `url(${props.backimg})` }}>

                        <div className="section1-text">
                            <div className='section1-text1'>
                                <p className='section1-tsm'>DOUBLOON'S VALUE</p>
                                <p className='section1-tb'>{props.doubloonValue}</p>
                            </div>
                            <div className='section1-text2'>
                                <p className='section1-tsm'>TIDAL SHIFTS</p>
                                <p className='section1-tb'>{props.tidalShift}</p>
                            </div>
                            <div className='section1-text3'>
                                <p className='section1-tsm'>SUNKEN TRESURE</p>
                                <p className='section1-tb'>{props.sunken}</p>
                            </div>
                        </div>

                        <div style={{ backgroundColor: `${props.color1}` }} className="copy-link">
                            <div className="copy-link-img" onClick={myFunction} style={{backgroundColor:`${props.bgcolor}`}}>
                                <img src={CopyLink} alt="" />
                            </div>
                            0xbb026d........217c52326
                        </div>
                        <img className='char-img' src={props.character} alt="" />
                    </div>

                    <div className="section-2">
                        <div className="section-2-1">
                            <p className="section-2-11" id='charName' dangerouslySetInnerHTML={{ __html: charName }} ></p>
                            <p className="section-2-12" id='charTag' style={{color:tagcolor}}>{charTag}</p>
                        </div>
                        <div className="section-2-2">
                            <div className="section-2-21">
                                <div className="section-2-2left">
                                    <div className='item-1'>
                                        <div className="items-img-box" style={{background : `url(${props.rect1}) no-repeat, linear-gradient(338deg, #212b21 0, #334233 100%)`,width:"48px", aspectRatio:"1/1", backgroundSize:"contain" , borderRadius:"8px",display:"flex",boxShadow: "-0.558477px 31.995127px 45.39px 5.61px rgba(25, 33, 44, 0.27)"}}>
                                            <img src={Mcap} alt="" />
                                        </div>
                                        <div className="items-text">
                                            <p className="items-text1">
                                                TREASURE BOARD
                                            </p>
                                            <p className='items-text2'>
                                               {props.TresureBoard}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='item-1'>
                                        <div className="items-img-box" style={{background : `url(${props.rect1}) no-repeat, linear-gradient(338deg, #212b21 0, #334233 100%)`,width:"48px", aspectRatio:"1/1", backgroundSize:"contain" , borderRadius:"8px",display:"flex",boxShadow: "-0.558477px 31.995127px 45.39px 5.61px rgba(25, 33, 44, 0.27)"}}>
                                            <img src={Holders} alt="" />
                                        </div>
                                        <div className="items-text">
                                            <p className="items-text1">
                                                CREW SIZE
                                            </p>
                                            <p className='items-text2'>
                                                ${props.CrewSize}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-2-2right">
                                <div className='item-1'>
                                        <div className="items-img-box" style={{background : `url(${props.rect1}) no-repeat, linear-gradient(338deg, #212b21 0, #334233 100%)`,width:"48px", aspectRatio:"1/1", backgroundSize:"contain" , borderRadius:"8px",display:"flex",boxShadow: "-0.558477px 31.995127px 45.39px 5.61px rgba(25, 33, 44, 0.27)"}}>
                                            <img src={Bars} alt="" />
                                        </div>
                                        <div className="items-text">
                                            <p className="items-text1">
                                            SEA TRADE VOLUME
                                            </p>
                                            <p className='items-text2'>
                                                {props.SeaTradeVol}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='item-1'>
                                        <div className="items-img-box" style={{background : `url(${props.rect1}) no-repeat, linear-gradient(338deg, #212b21 0, #334233 100%)`,width:"48px", aspectRatio:"1/1", backgroundSize:"contain" , borderRadius:"8px",display:"flex",boxShadow: "-0.558477px 31.995127px 45.39px 5.61px rgba(25, 33, 44, 0.27)"}}>
                                            <img src={Owner} alt="" />
                                        </div>
                                        <div className="items-text">
                                            <p className="items-text1">
                                            PERSONAL LOOT
                                            </p>
                                            <p className='items-text2'>
                                                {props.PersonalLoot}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="section-2-22" style={{marginBottom:"23px"}}>
                                    <div className='bottom-box' style={{backgroundImage:`url(${props.rect2})`}}>
                                                <div className="bottom-left">
                                                    <p className="status-text">STATUS</p>
                                                    <p className="alive-text">ALIVE</p>
                                                </div>
                                                <div className="bottom-right" >
                                                    <button style={{backgroundColor : `${props.btncolor}`}} className={`animated-button ${isClicked ? 'clicked' : ''} bottom-right-hover${isClicked ? '1' : ''}`} id={``}
      onClick={handleClick}>SWAP</button>
                                                    <button style={{backgroundColor : `${props.btncolor}`}} className={`animated-button2 ${isClicked2 ? 'clicked2' : ''} bottom-right-hover2${isClicked2 ? '2' : ''}`} id={``}
      onClick={handleClick2}>CHART</button>
                                                </div>
                                    </div>

                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card
