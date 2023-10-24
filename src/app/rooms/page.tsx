'use client'
import PageTemplate from "../components/ui/PageTemplate"
import RoomCard from "../components/rooms/RoomCard"
import styles from "../styles/rooms.module.css"
import FilterBar from "../components/rooms/FiltersBar"
import styled from "styled-components"

const rooms = [
    {
        title: "Room 1",
        description: "This is room 1",
        price: 100,
        image: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2282.jpg?w=1380&t=st=1698185597~exp=1698186197~hmac=ee5f885e38bdad49f1ff521b2b7e76928b6ffc26af43914c8e4ce5a55779dc7f",
        personalAttributes: ["1", "2", "3"]
    },
    {
        title: "Room 2",
        description: "This is room 2",
        price: 200,
        image: "https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-working-table_105762-2154.jpg?w=1380&t=st=1698185634~exp=1698186234~hmac=7cb185e65fe1b20632578d89cad13e328111e9c340f3d2892295632b087a48df",
        personalAttributes: ["1", "2", "3"]
    },
    {
        title: "Room 3",
        description: "This is room 3",
        price: 300,
        image: "https://img.freepik.com/free-photo/interior-bedroom-white-creamy-tones_181624-16134.jpg?w=1380&t=st=1698185650~exp=1698186250~hmac=ac22b9930ca5ad863524a1fa12075cfcf1747fa75fb9b8eec0089d9fe875637d",
        personalAttributes: ["1", "2", "3"]
    },
    {
        title: "Room 1",
        description: "This is room 1",
        price: 100,
        image: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2282.jpg?w=1380&t=st=1698185597~exp=1698186197~hmac=ee5f885e38bdad49f1ff521b2b7e76928b6ffc26af43914c8e4ce5a55779dc7f",
        personalAttributes: ["1", "2", "3"]
    },
    {
        title: "Room 2",
        description: "This is room 2",
        price: 200,
        image: "https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-working-table_105762-2154.jpg?w=1380&t=st=1698185634~exp=1698186234~hmac=7cb185e65fe1b20632578d89cad13e328111e9c340f3d2892295632b087a48df",
        personalAttributes: ["1", "2", "3"]
    },
    {
        title: "Room 3",
        description: "This is room 3",
        price: 300,
        image: "https://img.freepik.com/free-photo/interior-bedroom-white-creamy-tones_181624-16134.jpg?w=1380&t=st=1698185650~exp=1698186250~hmac=ac22b9930ca5ad863524a1fa12075cfcf1747fa75fb9b8eec0089d9fe875637d",
        personalAttributes: ["1", "2", "3"]
    },
    {
        title: "Room 1",
        description: "This is room 1",
        price: 100,
        image: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2282.jpg?w=1380&t=st=1698185597~exp=1698186197~hmac=ee5f885e38bdad49f1ff521b2b7e76928b6ffc26af43914c8e4ce5a55779dc7f",
        personalAttributes: ["1", "2", "3"]
    },
    {
        title: "Room 2",
        description: "This is room 2",
        price: 200,
        image: "https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-working-table_105762-2154.jpg?w=1380&t=st=1698185634~exp=1698186234~hmac=7cb185e65fe1b20632578d89cad13e328111e9c340f3d2892295632b087a48df",
        personalAttributes: ["1", "2", "3"]
    },
    {
        title: "Room 3",
        description: "This is room 3",
        price: 300,
        image: "https://img.freepik.com/free-photo/interior-bedroom-white-creamy-tones_181624-16134.jpg?w=1380&t=st=1698185650~exp=1698186250~hmac=ac22b9930ca5ad863524a1fa12075cfcf1747fa75fb9b8eec0089d9fe875637d",
        personalAttributes: ["1", "2", "3"]
    },
]

const LocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: 87vh;
    border: 1px solid red;
    overflow-y: auto;
`
export default function Page() {
    return (
        <PageTemplate>
            <div className={styles.container}>
                <h1>Rooms</h1>
                <div style={{ display: 'flex', flexDirection: 'row' ,width:'100%',height:'100%', paddingLeft:'1rem'}}>
                    <FilterBar />
                    <LocationContainer >
                        {rooms.map((room) => (
                            <RoomCard
                                key={room.title}
                                title={room.title}
                                description={room.description}
                                image={room.image}
                                price={room.price}
                                personalAttributes={room.personalAttributes}
                            />
                        ))}
                    </LocationContainer>
                </div>
            </div>
        </PageTemplate>
    )
}