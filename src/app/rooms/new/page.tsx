'use client';
import PageTemplate from "@/app/components/ui/PageTemplate"
import { MenuItem, TextField, Button } from "@mui/material";
import styled from "styled-components"
import { FaBath, FaGraduationCap } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";


const bathOptions = [
    "Private",
    "Shared"
];

const wardrobeOptions = [
    "Yes",
    "No"
];

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

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    color: black;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
`;

const Information = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
`;

const Images = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
    background-color: rgb(106, 158, 255);
    border-radius: 0 1rem 1rem 0;
`;

const ImageFile = styled.div`
    width: 100%;
    height: 35px;
    background-color: white;
    border-radius: 1rem;
    padding: 0.5rem;
    margin: 1rem;
    display: flex;
`;

const VisuallyHiddenInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
`;


export default function Page() {
    const [images, setImages] = useState<string[]>([]);
    return (
        <PageTemplate>
            <Container>
                <General>
                    <Information>
                        <Title>Publish your room</Title>
                        <TextField id="outlined-basic" label="Title" variant="outlined" sx={{ minWidth: '60%', marginBottom: '2rem' }} />
                        <TextField id="outlined-basic" label="Price" variant="outlined" sx={{ minWidth: '60%', marginBottom: '2rem' }} />
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%', marginBottom: '2rem' }}>
                            <FaBath style={{ fontSize: '2rem', color: 'rgb(106, 158, 255)', marginRight: '1rem' }} />
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Bathroom"
                                defaultValue="Private"
                                helperText="Select bathroom type"
                                sx={{ minWidth: '15%' }}
                            >
                                {bathOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <FaRulerCombined style={{ fontSize: '2rem', color: 'rgb(106, 158, 255)', marginRight: '1rem', marginLeft: '2rem' }} />
                            <TextField id="outlined-basic" label="Space" variant="outlined" sx={{ maxWidth: '20%' }} helperText="Space of the room" />

                            <FaCubes style={{ fontSize: '2rem', color: 'rgb(106, 158, 255)', marginRight: '1rem', marginLeft: '2rem' }} />
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Wardrobe"
                                defaultValue="Yes"
                                helperText="Select if has wardrobe"
                                sx={{ minWidth: '15%' }}
                            >
                                {wardrobeOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <TextField id="outlined-basic" label="Address" variant="outlined" sx={{ minWidth: '60%', marginBottom: '2rem' }} />
                        <TextField id="outlined-basic" label="Description" variant="outlined" sx={{ minWidth: '60%', marginBottom: '2rem' }} multiline rows={3} />
                        <div>
                            <Button variant="contained" sx={{ backgroundColor: 'rgb(106, 158, 255)', color: 'white', marginRight: '1rem' }}>
                                Publish
                            </Button>
                            <Link href="/rooms">
                                <Button variant="contained" sx={{ backgroundColor: 'rgb(106, 158, 255)', color: 'white' }}>
                                    Cancel
                                </Button>
                            </Link>
                        </div>

                    </Information>
                    <Images>
                        <Title>Images</Title>
                        {images.map((image) => (
                            <ImageFile>
                                {image}
                                <div style={{ display: 'flex', flexGrow: 1 }}></div>
                                <Button variant="contained" sx={{ backgroundColor: 'rgb(255, 255, 255)', color: 'black', marginRight: '1rem' }}
                                    onClick={() => {
                                        setImages(images.filter((item) => item !== image));

                                    }
                                    }
                                >
                                    Delete
                                </Button>
                            </ImageFile>
                        ))}
                        <Button variant="contained" sx={{ backgroundColor: 'rgb(255, 255, 255)', color: 'black', marginTop: '1rem' }}
                        >
                            <VisuallyHiddenInput type="file"
                                accept="image/png, image/jpeg"
                                onChange={(event) => {
                                    if (event.target.files && event.target.files[0]) {
                                        const file = event.target.files[0];
                                        setImages([...images, file.name]);
                                    }

                                }}
                            />
                            Add image
                        </Button>
                    </Images>
                </General>
            </Container>
        </PageTemplate>
    )
}