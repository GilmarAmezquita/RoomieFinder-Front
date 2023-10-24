'use client'
import { Checkbox, Input, Typography } from '@mui/material'
import styles from '../../styles/filters.module.css'
import styled from 'styled-components'

const locations = [
    "Ciudad pacifica",
    "Bochalema",
    "Pance",
    "Ciudad jardin",
    "El ingenio",
    "El caney",
    "Melendez",
    "San fernando",
    "Mariano ramos",
    "Ciudad cordoba",
    "La base",

]

const LocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    margin: 1rem 0;
`


export default function FilterBar(){
    return (
        <div className={styles.container}>
            <Typography variant="h4" component="div" fontWeight="bold">
                Filters
            </Typography>
            <Divider />
            <Typography variant="h6" component="div">
                Price
            </Typography>
            <Input placeholder="Min" type="number" sx={{marginBottom:'1rem'}}/>
            <Input placeholder="Max" type="number" sx={{marginBottom:'1rem'}}/>
            <Divider  />
            <Typography variant="h6" component="div">
                Location
            </Typography>
            {locations.map((location) => (
                <LocationContainer>
                    <Checkbox sx={{marginLeft:0, padding:0}}/>
                    <Typography variant="body1" component="div">
                        {location}
                    </Typography>
                </LocationContainer>
            ))}
            <Divider />
            <Typography variant="h6" component="div">
                Room Attributes
            </Typography>

        </div>
    )
}
