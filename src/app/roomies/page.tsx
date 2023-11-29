'use client'
import PageTemplate from "../components/ui/PageTemplate"
import PersonCard from "../components/roomies/PersonCard"
import styled from "styled-components"
import { useEffect, useState } from "react"
import "../components/loader.css"
import instance from "../config/axios"
import endpoints from "../config/endpoints"
import { json } from "stream/consumers"

const persons = [
    {
        id: "1",
        name: "John",
        image: "https://img.freepik.com/free-photo/outdoor-shot-young-caucasian-man-with-beard-relaxing-open-air-surrounded-by-beautiful-mountain-setting-rainforest_273609-1855.jpg?w=1380&t=st=1700666688~exp=1700667288~hmac=5090a38a93c6323878a28a160b2e3675d0389f524788238a172789fceb4969e4",
        personalAttributes: ["Clean", "Friendly", "Outgoing"],
        university: "University of Toronto",
    },
    {
        id: "2",
        name: "Mary",
        image: "https://img.freepik.com/free-photo/portrait-caucasian-woman-smiling_53876-146505.jpg?w=996&t=st=1700666698~exp=1700667298~hmac=d2496e7c996cdc00fbfbd0be9e3fc0238900bda2c27d0d57b8a97dcb0b548668",
        personalAttributes: ["Clean", "Friendly", "Outgoing"],
        university: "University of Toronto",
    },
    {
        id: "3",
        name: "Jane",
        image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=996&t=st=1700666710~exp=1700667310~hmac=89403d752f3ededc2bb2da246910809c3d1e2f40beca05bb19ed8f728eeea393",
        personalAttributes: ["Clean", "Friendly", "Outgoing"],
        university: "University of Toronto",
    },
    {
        id: "4",
        name: "Joe",
        image: "https://img.freepik.com/free-photo/beautiful-woman-dreaming-cyber-monday-sales_23-2148313194.jpg?w=826&t=st=1700666733~exp=1700667333~hmac=726e753ccfcc192a4a864ac3cf2ab9d160954a41a7d58beb4a7e52ed328e97aa",
        personalAttributes: ["Clean", "Friendly", "Outgoing"],
        university: "University of Toronto",
    }
]

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

const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
    color: black;
    margin-bottom: 2rem;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 2rem;
`;


export default function Page() {
    const [roomies, setRoomies] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        instance.get(endpoints.getAllRoomies).then((res) => {
            if(res.status === 200 && res.data){
                console.log("Data:");   
                setRoomies(res.data);
                console.log(res.data);
                setLoading(false);
            }else{
                console.log("Error");
                setLoading(false);
            }
            console.log(res);
            
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, []);


    if (loading) {
        <PageTemplate>
            <Container>

                <div className="loader"></div>
            </Container>
        </PageTemplate>
    } else {
        return (
            <PageTemplate>
                <Container>
                    <Title><h3>Find your perfect roommie</h3></Title>
                    <CardContainer>
                        {roomies?.map((person) => (
                            <PersonCard
                                key={person.id}
                                id={person._id}
                                name={person.name}
                                image={person.image}
                                personalAttributes={person.personalAttributes}
                                university={person.university}
                                phone={person.phoneNumber}
                            />
                        ))}
                        {roomies.length === 0 && <h3>No roomies found</h3>}
                    </CardContainer>
                </Container>
            </PageTemplate>
        )
    }


}