'use client'
import PageTemplate from "../components/ui/PageTemplate"
import RoomCard from "../components/rooms/RoomCard"
import styles from "../styles/rooms.module.css"
import endpoints from "../config/endpoints"
import instance from "../config/axios"
import styled from "styled-components"
import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"


const roomsDoomy = [
    {
        title: "Room 1",
        description: "This is room 1",
        price: 100,
        image: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2282.jpg?w=1380&t=st=1698185597~exp=1698186197~hmac=ee5f885e38bdad49f1ff521b2b7e76928b6ffc26af43914c8e4ce5a55779dc7f",
        personalAttributes: ["1", "2", "3"],
        match: true,
        id: "1",
    },
    {
        title: "Room 3",
        description: "This is room 3",
        price: 300,
        image: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2282.jpg?w=1380&t=st=1698185597~exp=1698186197~hmac=ee5f885e38bdad49f1ff521b2b7e76928b6ffc26af43914c8e4ce5a55779dc7f",
        personalAttributes: ["1", "2", "3"],
        match: true,
        id: "3",
    },
    {
        title: "Room 2",
        description: "This is room 2",
        price: 200,
        image: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2282.jpg?w=1380&t=st=1698185597~exp=1698186197~hmac=ee5f885e38bdad49f1ff521b2b7e76928b6ffc26af43914c8e4ce5a55779dc7f",
        personalAttributes: ["1", "2", "3"],
        match: false,
        id: "2",
    },

    {
        title: "Room 4",
        description: "This is room 4",
        price: 400,
        image: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2282.jpg?w=1380&t=st=1698185597~exp=1698186197~hmac=ee5f885e38bdad49f1ff521b2b7e76928b6ffc26af43914c8e4ce5a55779dc7f",
        personalAttributes: ["1", "2", "3"],
        match: false,
        id: "4",
    },

]

const LocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
`


const Title = styled.div`
    font-size: 1.5rem;
    height: 5rem;
    color: #000;
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid #f7f7f7;
`


export default function Page() {
    const [rooms, setRooms] = useState<any[]>([])
    const router = useRouter()

    useEffect(() => {
        getRooms().then((rooms) => {
            setRooms(rooms)
        })
    }, [])

    return (
        <PageTemplate>
            <div className={styles.container}>
                <Title>
                    <h1>Rooms</h1>
                </Title>

                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%', paddingLeft: '3rem', paddingRight: '3rem', alignItems: 'flex-start' }}>

                    <LocationContainer >
                        {rooms.map((room) => (
                            <RoomCard
                                key={room.title}
                                title={room.title}
                                description={room.description}
                                image={room.image}
                                price={room.price}
                                personalAttributes={room.personalAttributes}
                                match={room.match}
                                id={room.id}
                            />
                        ))}
                    </LocationContainer>
                </div>
                <Link href="/rooms/new">
                <Button 
                    variant="contained" 
                    style={{ position: 'fixed', bottom: '2rem', right: '2rem', backgroundColor: '#000', color: '#fff' }}
                    
                    >Publish a room</Button>
                </Link>

            </div>
        </PageTemplate>
    )
}

export const getRooms = async () => {
    //const data = await fetch(endpoints.getAllRooms)
    //const rooms = await data.json()
    const rooms = roomsDoomy
    return rooms
}