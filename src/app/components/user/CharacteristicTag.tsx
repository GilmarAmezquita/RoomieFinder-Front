'use client'
import { useState, useEffect, use } from "react";

type CharacteristicTagProps = {
    name: string,
    icon: string,
    selected: string[],
    setSelected: any
}

export default function CharacteristicTag(props: CharacteristicTagProps) {
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        if (props.selected.includes(props.name)) {
            setIsSelected(true)
        } else {
            setIsSelected(false)
        }
    }, [props.selected])

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
            backgroundColor: isSelected ? 'black' : 'white',
            color: isSelected ? 'white' : 'black',
            marginRight: '0.5rem',
            marginBottom: '0.5rem'
        }}
        onClick={() => {
            if (isSelected) {
                props.setSelected(props.selected.filter((name: string) => name !== props.name))
            }else {
                props.setSelected([...props.selected, props.name])
            }
        }}
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