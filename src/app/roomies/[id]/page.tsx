'use client'
import PageTemplate from "@/app/components/ui/PageTemplate"
import styled from "styled-components";
import '../../components/loader.css'
import { useState } from "react";
import { Button } from "@mui/material";

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
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
    width: 96.5dvw;
    height: 85vh;
    max-height: 90vh;
    background-color: white;
    border-radius: 1rem;

    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25); 
`;

const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin:1rem;
`;

const Tag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
`;

export default function Page() {
    const [loading, setLoading] = useState(false);

    const props = {
        name: 'Juan Jose Perez',
        photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1700672496~exp=1700673096~hmac=a6f203a2e4318c98a905b4a68ab80221a217de6717fc0d91d19bf8b7c12cc705',
        university: 'Universidad de los Andes',
        career: 'Ingenieria de Sistemas',
        personalities: ['Extrovertido', 'Ordenado', 'Responsable'],
        hobbies: ['Futbol', 'Videojuegos', 'Cine'],

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
                        <h2>{props.name}</h2>
                        <div style={{height:'10px'}}></div>
                        <img src={props.photo} alt="profile"  style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '50%' }}/>
                        <InfoRow>
                            <h3 style={{marginRight:'1rem'}}>University:</h3>
                            <h3 style={{fontWeight:'normal'}}>{props.university}</h3>
                        </InfoRow>
                        <InfoRow>
                            <h3 style={{marginRight:'1rem'}}>Career:</h3>
                            <h3 style={{fontWeight:'normal'}}> {props.career}</h3>
                        </InfoRow>
                        <InfoRow>
                            <h3 style={{marginRight:'1rem'}}>Personalities:</h3>
                            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                                {props.personalities.map((personality, index) => {
                                    return (
                                        <Tag key={index}>
                                            <h3 style={{fontWeight:'normal'}}>{personality}</h3>
                                        </Tag>
                                    )
                                })}
                            </div>
                        </InfoRow>
                        <InfoRow>
                            <h3 style={{marginRight:'1rem'}}>Hobbies:</h3>
                            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                                {props.hobbies.map((hobbie, index) => {
                                    return (
                                        <Tag key={index}>
                                            <h3 style={{fontWeight:'normal'}}>{hobbie}</h3>
                                        </Tag>
                                    )
                                })}
                            </div>
                        </InfoRow>
                        <InfoRow>
                            <Button variant="contained" color="primary" style={{marginRight:'1rem'}}>Send a message</Button>
                            <Button >Go back</Button>

                        </InfoRow>
                    </General>
                </Container>

            </PageTemplate>
        )
    }

}