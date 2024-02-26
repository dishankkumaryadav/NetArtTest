import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'
import { FaGlobe } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <Container>
        <div className="heading">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </div>
        <div className="contents">
            CHEMICALS & PROCESS <div className="line"></div> POWER <div className="line"></div> WATER & WASTE WATER <div className="line"></div> OILS & GAS <div className="line"></div> PHARMA <div className="line"></div> SUGARS & DISTILLERIES <div className="line"></div> PAPER & PULP <div className="line"></div> MARINE & DEFENCE <div className="line"></div> METAL & MINING <div className="line"></div> FOOD & BEVERAGE <div className="line"></div> PETROCHEMICAL & REFINERIES <div className="line"></div> SOLAR <div className="line"></div> BUILDING <div className="line"></div> HVAC <div className="line"></div> FIRE FIGHTING <div className="line"></div> AGRICULTURE & RESIDENTIAL
        </div>
        <div className="box">
            <Contact text="Toll free 18002001734" icon={<FaSquarePhone />}/>
            <a href="http://facebook.com/cripumps" target="_blank" rel="noopener noreferrer">
            <Contact text= "www.facebook.com/cripumps" icon={<FaFacebook />}/>
            </a>
            <a href="http://cripumps.com" target="_blank" rel="noopener noreferrer">
            <Contact text="www.cripumps.com" icon={<FaGlobe />}/>
            </a>
            
        </div>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    gap: 10px;

    .box a{
        text-decoration: none;
    }

    .heading{
        font-weight: bold;
    }

    .contents{
        max-width: 90%;
        text-align: center;
    }

    .contents .line{
        background: #e80b0bc3;
        width: 1px;
        height: 15px;
        display: inline-block;
    }

    .box{
        display: flex;
        justify-content: space-around;
        background-color: red;
        align-items: flex-start;
        margin-top: 20px;
        width: 100%;
        height: 80px;

        @media (max-width:800px) {
            height: 200px;
            flex-direction: column;
            align-items: center;
            margin: 10px auto;
        }
    }

`;
