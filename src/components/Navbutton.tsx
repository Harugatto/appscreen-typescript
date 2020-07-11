import React from 'react'
import styled from 'styled-components'

interface Title {
    context: string
}

const Context = styled.span`
    display: flex;
    font-size: 110%;
    color: white;
    font-family: "Noto Sans KR";
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem 1rem 1.1rem 1rem;

    &:hover {
        color: #bababa;
    }
`

const Navbuttons: React.FC<Title> = (props: Title) => {
    return (
        <Context>
            { props.context }
        </Context>
    )
}

export default Navbuttons