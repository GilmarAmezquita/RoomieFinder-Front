'use client'
import PageTemplate from "@/app/components/ui/PageTemplate"
import styled from "styled-components"
import { FaBath, FaGraduationCap } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa6";
import { FaRegCircleRight } from "react-icons/fa6";
import { FaRegCircleLeft } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import instance from "@/app/config/axios";
import endpoints from "@/app/config/endpoints";

import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import '../../components/loader.css'
import Link from "next/link";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    width: 100vw;
    background-color: rgb(228, 228, 228);
    padding: 2rem;
    
`;

const General = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
    width: 96.5dvw;
    height: 85vh;
    max-height: 90vh;
    background-color: white;
    border-radius: 1rem;

    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25); 
`;

const RoomInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-grow: 1;
    width: 80%;
    height: 100%;
    overflow-y: scroll;
`;

const UserInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 100%;
    width: 20%;
    background-color: rgb(106, 158, 255);
    border-radius: 0 1rem 1rem 0;
    position:sticky;
    right:0;
`;

const TitleSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 1rem 0 0 0;
    width: 100%;
    border-bottom: 1px solid rgb(228, 228, 228);
    padding: 2rem;
    
`;

const ImagesSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 1rem 0 0 0;
    width: 100%;
    height: 50vh;
    min-height: 50vh;
    border-bottom: 1px solid rgb(228, 228, 228);
    padding: 2rem;
`;

const InformationSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 1rem 0 0 0;
    width: 100%;
    padding: 2rem;
`;

const BasicInformation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 1rem 0 0 0;
    width: 100%;
    margin-bottom: 1rem;
`;

const Image = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */

   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;

   border-radius: 1rem;
`;

const PersonalityTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #030383;
    border: 1px solid #ffffff;
    width: fit-content;
    color: white;
    padding: 0.5rem;
    border-radius: 2rem;
    margin: 5px;
`;

type Params = {
    params : {
        id: string
    }
}


export default function RoomDetails({params: {id}}: Params) {
    console.log(id);
    const [loading, setLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState(0);
    const [room, setRoom] = useState({
        title: '',
        bathroom: '',
        space: '',
        wardrobe: '',
        images: [],
        price: '',
        neighborhood: '',
        location: '',
        description: '',
        owner: {
            name: '',
            city: '',
            traits: [],
            university: '',
            image: '',
            phoneNumber: ''
        }
    });

    useEffect(() => {
        instance.get(endpoints.getRoomById + id).then((response) => {
            setRoom(response.data);
            console.log(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        }
        )
    }, [])


    const handleNextImage = (direction: boolean) => {
        if (direction) {
            if (currentImage < room.images.length - 1) {
                setCurrentImage(currentImage + 1);
            } else {
                setCurrentImage(0);
            }
        } else {
            if (currentImage > 0) {
                setCurrentImage(currentImage - 1);
            } else {
                setCurrentImage(room.images.length - 1);
            }
        }
    }

   

    if (loading) {
        return (
            <PageTemplate>
                <Container>
                    <div style={{ display: 'flex', flexDirection:'column',width:'100%',height:'30%',justifyContent:'center',alignItems:'center'}}>

                    </div>
                    <div className="loader"></div>
                </Container>
            </PageTemplate>
        )
    } else {

        return (
            <PageTemplate>
                <Container>
                    <General>
                        <RoomInformation>
                            <TitleSection>
                                <h1>{room?.title}</h1>
                                <div style={{ display: 'flex', flexGrow: 1 }}></div>
                                <h1>$ {room?.price}</h1>
                            </TitleSection>
                            <ImagesSection>
                                <FaRegCircleLeft
                                    size={40}
                                    style={{ cursor: 'pointer', marginLeft: '1rem', marginRight: '1rem', color: 'rgb(148, 148, 148)' }}
                                    onClick={() => handleNextImage(false)}
                                />
                                <Image src={room?.images[currentImage]} />
                                <FaRegCircleRight
                                    size={40}
                                    style={{ cursor: 'pointer', marginLeft: '1rem', marginRight: '1rem', color: 'rgb(148, 148, 148)' }}
                                    onClick={() => handleNextImage(true)}
                                />
                            </ImagesSection>
                            <InformationSection>
                                <h1 style={{ marginBottom: '1rem' }}>Information</h1>
                                <BasicInformation>
                                    <FaBath size={20} style={{ marginRight: '1rem', color: 'rgb(148, 148, 148)' }} />
                                    <h3 style={{ color: 'rgb(125, 125, 125)', fontWeight: 'normal' }}>{room?.bathroom} Bathroom</h3>
                                    <FaRulerCombined size={20} style={{ marginLeft: '1rem', marginRight: '1rem', color: 'rgb(148, 148, 148)' }} />
                                    <h3 style={{ color: 'rgb(125, 125, 125)', fontWeight: 'normal' }}>{room?.space}</h3>
                                    <FaCubes size={20} style={{ marginLeft: '1rem', marginRight: '1rem', color: 'rgb(148, 148, 148)' }} />
                                    <h3 style={{ color: 'rgb(125, 125, 125)', fontWeight: 'normal' }}>{room?.wardrobe} Wardrobe</h3>
                                    <FaLocationDot size={20} style={{ marginLeft: '1rem', marginRight: '1rem', color: 'rgb(148, 148, 148)' }} />
                                    <h3 style={{ color: 'rgb(125, 125, 125)', fontWeight: 'normal' }}>{room?.neighborhood + " " + room?.location}</h3>
                                </BasicInformation>
                                <p style={{ color: 'rgb(125, 125, 125)', fontWeight: 'normal' }}>{room?.description}</p>
                            </InformationSection>
                        </RoomInformation>
                        <UserInformation>
                            <img src={room?.owner?.image} style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '50%' }} />
                            <h1 style={{ color: 'white', marginTop: '1rem' }}>{}</h1>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '1rem' }}>
                                <FaGraduationCap size={20} style={{ marginLeft: '1rem', margin: '1rem', color: 'rgb(255, 255, 255)' }} />
                                <h3 style={{ color: 'rgb(255, 255, 255)', fontWeight: 'normal', width: '150px' }}>Student at {room?.owner?.university}</h3>
                            </div>
                            <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                                {room?.owner?.traits.map((personality: string) => {
                                    return (
                                        <PersonalityTag key={personality}>
                                            <p style={{ color: 'white', fontWeight: 'normal', fontSize: 13 }}>{personality}</p>
                                        </PersonalityTag>
                                    )
                                }
                                )}
                            </div>
                            <Link href={`https://wa.me/${room?.owner?.phoneNumber}`}>
                            <Button variant="contained" style={{ backgroundColor: 'white', color: 'rgb(106, 158, 255)', marginTop: '1rem', width: '80%', fontWeight: 'bold' }}>Contact</Button>
                            </Link>
                        </UserInformation>

                    </General>
                </Container>
            </PageTemplate>
        )
    }
}

