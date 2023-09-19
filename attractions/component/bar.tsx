import React from 'react'

interface Props {
    couter : number
}

export const Bar = (props: Props) => {
    return (
        <nav style={{backgroundColor:"salmon"}}>
            <p style={{fontSize:"60px"}}> Couter Bar : {props.couter}</p>
        </nav>
    )
}
