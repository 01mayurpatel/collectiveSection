import React from 'react'
import CopyLink from '../Assets/copy-link.png'
import './Card.css'
import Mcap from '../Assets/mcap_png_1.png'
import Holders from '../Assets/holders_png_1.png'
import Bars from '../Assets/rectangle_1_copy_3.png'
import Owner from '../Assets/owner_png_1.png'

function Card(props) {

    let Section1 = document.getElementsByClassName('section-1')[0];



    return (
        <div>
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
                            <div className="copy-link-img" style={{backgroundColor:`${props.bgcolor}`}}>
                                <img src={CopyLink} alt="" />
                            </div>
                            0xbb026d........217c52326
                        </div>
                        <img className='char-img' src={props.character} alt="" />
                    </div>

                    <div className="section-2">
                        <div className="section-2-1">
                            <p className="section-2-11"><span>U</span>SOPP</p>
                            <p className="section-2-12">THE LONG NOSED SNIPER KING</p>
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
                                                TREASURE BOARD
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
                                                TREASURE BOARD
                                            </p>
                                            <p className='items-text2'>
                                                {props.PersonalLoot}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-2-22">
                                    <div className='bottom-box' style={{backgroundImage:`url(${props.rect2})`}}>
                                                <div className="bottom-left">
                                                    <p className="status-text">STATUS</p>
                                                    <p className="alive-text">ALIVE</p>
                                                </div>
                                                <div className="bottom-right">
                                                    <button style={{backgroundColor : `${props.btncolor}`}}>SWAP</button>
                                                    <button style={{backgroundColor : `${props.btncolor}`}}>CHART</button>
                                                </div>
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
