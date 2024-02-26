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
            CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
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
