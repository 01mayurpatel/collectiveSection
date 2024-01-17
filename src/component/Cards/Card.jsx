import React from 'react'
import CopyLink from '../Assets/copy-link.png'
import './Card.css'
import Mcap from '../Assets/mcap_png_1.png'
function Card(props) {

    let Section1 = document.getElementsByClassName('section-1')[0];



    return (
        <div>
            <div className="main-box">
                <div className="card-container">
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
                            <div className="copy-link-img">
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
                                        <div className="items-img-box">
                                            <img src={Mcap} alt="" />
                                        </div>
                                        <div className="items-text">
                                            <p className="items-text1">
                                                TREASURE BOARD
                                            </p>
                                            <p className='items-text2'>
                                                $ 1,047,303
                                            </p>
                                        </div>
                                    </div>
                                    <div className='item-1'>
                                        <div className="items-img-box">
                                            <img src={Mcap} alt="" />
                                        </div>
                                        <div className="items-text">
                                            <p className="items-text1">
                                                TREASURE BOARD
                                            </p>
                                            <p className='items-text2'>
                                                $ 1,047,303
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-2-2right">
                                <div className='item-1'>
                                        <div className="items-img-box">
                                            <img src={Mcap} alt="" />
                                        </div>
                                        <div className="items-text">
                                            <p className="items-text1">
                                                TREASURE BOARD
                                            </p>
                                            <p className='items-text2'>
                                                $ 1,047,303
                                            </p>
                                        </div>
                                    </div>
                                    <div className='item-1'>
                                        <div className="items-img-box">
                                            <img src={Mcap} alt="" />
                                        </div>
                                        <div className="items-text">
                                            <p className="items-text1">
                                                TREASURE BOARD
                                            </p>
                                            <p className='items-text2'>
                                                $ 1,047,303
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-2-22">
                                    <div className='bottom-box'>
                                                <div className="bottom-left">
                                                    <p className="status-text">STATUS</p>
                                                    <p className="alive-text">ALIVE</p>
                                                </div>
                                                <div className="bottom-right">
                                                    <button>SWAP</button>
                                                    <button>CHART</button>
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
