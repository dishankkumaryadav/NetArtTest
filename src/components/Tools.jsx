import React from 'react'
import styled from 'styled-components'

const Tools = () => {
  return (
    <Tool>
        <div className='heading'>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </div>
        <img src="/asserts/3.png" alt="Tools images" />
        <div>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</div>
        <hr />
    </Tool>
  )
}

export default Tools;

const Tool = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 20px;
    img{
        width: 70%;
    }
    hr{
        background-color: red;
        width: 95%;
        border-radius: 50px;
        height: 2px;
    }
`;