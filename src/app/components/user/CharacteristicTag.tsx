'use client'
import { useState, useEffect } from "react";

type CharacteristicTagProps = {
    name: string,
    icon: string,
    selected: string,
    setSelected: (selected: string) => void
}

export default function CharacteristicTag(props: CharacteristicTagProps) {

    return(
        <div style={{
            border: '1px solid black',
            width: 'fit-content',
            height: '25px',
            padding:'0.5rem',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backgroundColor: props.selected === props.name ? 'black' : 'white',
            color: props.selected === props.name ? 'white' : 'black',
            marginRight: '0.5rem'
        }}
        onClick={() => props.setSelected(props.name)}
        >
            <p style={{
                display: 'inline-block',
                margin: '0',
                fontSize: '0.7rem',
                userSelect: 'none'
            }}>
                {props.icon}
                {props.name}
            </p>
        </div>
    )
}