import React from 'react'
import styled from 'styled-components'

const MainSection = () => {
  return (
    <MainContainer>
        <img src="/asserts/1.png" alt="Trophy Image" className='trophy'/>
        <div className="content">
            <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <ul>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>
            <img src="/asserts/2.png" alt="awarding image" />
            <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
    </MainContainer>
  )
}

export default MainSection;

const MainContainer = styled.div`
    display: flex;
    margin-top: 30px;
    /* align-items: end; */
    gap: 20px;
    .trophy{
        flex: 3;
        height: 100vh;
    }
    .content{
        flex: 7;
    }

    div img{
        margin-top: 10px;
    }

    @media (max-width:1300px) {
        flex-direction: column;
        margin: 10px auto;
    }

`;