import React from 'react'
import styled from 'styled-components'

const Contact = ({icon, text}) => {
  return (
    <Button>
        <div className="icons">
        {icon}
        </div>
        {text}
    </Button>
  )
}

export default Contact

const Button = styled.div`
    display: flex;
    color: white;
    align-items: end;
    gap: 5px;
    padding: 10px;
    .icons{
        font-size: 20px;
        font-weight: bold;
    }
`;