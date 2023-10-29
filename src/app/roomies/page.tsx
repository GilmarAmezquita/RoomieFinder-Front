'use client'
import PageTemplate from "../components/ui/PageTemplate"
import PersonCard from "../components/roomies/PersonCard"
import styled from "styled-components"

const persons = [
    {
        name: "John",
        image: "https://images.unsplash.com/photo-1632216307834-9a0b8d0e9d8f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        personalAttributes: ["Clean", "Friendly", "Outgoing"],
        match: true
    },
    {
        name: "Mary",
        image: "https://images.unsplash.com/photo-1632216307834-9a0b8d0e9d8f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        personalAttributes: ["Clean", "Friendly", "Outgoing"],
        match: false
    },
    {
        name: "Jane",
        image: "https://images.unsplash.com/photo-1632216307834-9a0b8d0e9d8f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        personalAttributes: ["Clean", "Friendly", "Outgoing"],
        match: false
    },
    {
        name: "Joe",
        image: "https://images.unsplash.com/photo-1632216307834-9a0b8d0e9d8f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        personalAttributes: ["Clean", "Friendly", "Outgoing"],
        match: false
    }
]

export default function Page() {
    return(
        <PageTemplate>
            {persons.map((person) => (
                <PersonCard
                    image={person.image}
                    personalAttributes={person.personalAttributes}
                    match={person.match}
                />    
            ))}
        </PageTemplate>
    )
}