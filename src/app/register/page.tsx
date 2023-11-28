'use client'
import styles from "../styles/register.module.css"
import PageTemplate from "../components/ui/PageTemplate"
import { Button, Typography, TextField } from "@mui/material";
import { alertError, alertSuccess } from "../components/alerts/alert";
import { useEffect, useState } from "react";
import CharacteristicTag from "../components/user/CharacteristicTag";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUp } from "../services/auth";
import styled from "styled-components";

const personalityTraits = [
    {
        "name": "Introverted",
        "icon": "🤫"
    },
    {
        "name": "Extroverted",
        "icon": "🗣"
    },
    {
        "name": "Early Bird",
        "icon": "🐦"
    },
    {
        "name": "Night Owl",
        "icon": "🦉"
    },
    {
        "name": "Clean",
        "icon": "🧹"
    },
    {
        "name": "Relaxed",
        "icon": "💫"
    },
    {
        "name": "Love Pets",
        "icon": "🐶"
    },
    {
        "name": "Far From Pets",
        "icon": "🙅"
    },
    {
        "name": "Allergies",
        "icon": "🤧"
    },
    {
        "name": "No Allergies",
        "icon": "👍"
    },
    {
        "name": "Quiet",
        "icon": "🤫"
    },
    {
        "name": "Loud",
        "icon": "🗣"
    },
    {
        "name": "Likes to share",
        "icon": "🤝"
    },
    {
        "name": "Likes to keep to self",
        "icon": "🤐"
    }
]

const hobbiesOptions = [
    {
        "name": "Gym",
        "icon": "🏋️‍♂️"
    },
    {
        "name": "Sports",
        "icon": "⚽️"
    },
    {
        "name": "Video Games",
        "icon": "🎮"
    },
    {
        "name": "Reading",
        "icon": "📚"
    },
    {
        "name": "Movies",
        "icon": "🎥"
    },
    {
        "name": "Music",
        "icon": "🎵"
    },
    {
        "name": "Cooking",
        "icon": "👨‍🍳"
    },
    {
        "name": "Baking",
        "icon": "👩‍🍳"
    },
    {
        "name": "Art",
        "icon": "🎨"
    },
    {
        "name": "Photography",
        "icon": "📸"
    },
    {
        "name": "Writing",
        "icon": "✍️"
    },
    {
        "name": "Dancing",
        "icon": "💃"
    },
    {
        "name": "Singing",
        "icon": "🎤"
    },
    {
        "name": "Shopping",
        "icon": "🛍"
    },
    {
        "name": "Traveling",
        "icon": "🧳"
    },
    {
        "name": "Hiking",
        "icon": "🥾"
    },
    {
        "name": "Camping",
        "icon": "⛺️"
    },
    {
        "name": "Gardening",
        "icon": "🌱"
    },
    {
        "name": "Volunteering",
        "icon": "🤝"
    },
    {
        "name": "Meditation",
        "icon": "🧘‍♂️"
    },
    {
        "name": "Yoga",
        "icon": "🧘‍♀️"
    },
    {
        "name": "Board Games",
        "icon": "🎲"
    },
    {
        "name": "Card Games",
        "icon": "🃏"
    },
    {
        "name": "Chess",
        "icon": "♟"
    },
    {
        "name": "Puzzles",
        "icon": "🧩"
    },
    {
        "name": "Skiing",
        "icon": "⛷"
    },
]

const PictureSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`


export default function Register() {
    const [picture, setPicture] = useState<File | null>(null);
    const [pictureBase64, setPictureBase64] = useState<string>("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [step, setStep] = useState(0);
    const [hobbies, setHobbies] = useState([]);
    const [traits, setTraits] = useState<string[]>([]);
    const [university, setUniversity] = useState("");

    const router = useRouter();

    const handleRegister = () => {
        
        
        if (name == "" || email == "" || password == "" || phoneNumber == "" || traits.length == 0 || hobbies.length == 0 || university == "" || picture == null) {
            alertError("Please fill out all fields");
            
        } else {
            Promise.all([blobToBase64(picture)]).then((res) => {
                console.log(res.toString());
                setPictureBase64(res.toString());
            }
            )
            signUp({
                name,
                email,
                password,
                phoneNumber,
                hobbies,
                traits,
                university,
                pictureBase64
            }).then(() => {
                alertSuccess("Successfully registered!");
                router.push("/login");
            }).catch((err) => {
                console.log(err);
                alertError("User already exists");
            })
        }
    }

    function blobToBase64(blob: any) {
        return new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onerror = () => {
                resolve(null)
                console.log("error");
            };
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
            
        });
    }

    const changeStep = (step: number, direction: number) => {
        switch (direction) {
            case 1:
                setStep(step + 1);
                break;
            case -1:
                setStep(step - 1);
                break;
            default:
                break;
        }
    }

    const renderStep = () => {
        switch (step) {
            case 0:
                return (
                    <>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            Basic Information
                        </Typography>
                        <TextField label="Full Name" variant="outlined" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField label="Email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <TextField label="Phone Number" variant="outlined" fullWidth margin="normal" type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </>
                )
            case 1:
                return (
                    <>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            Lifestyle Information
                        </Typography>

                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            What university do you attend?
                        </Typography>
                        <TextField label="University" variant="outlined" fullWidth margin="normal" value={university} onChange={(e) => setUniversity(e.target.value)} />
                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            Select some of your personality traits:
                        </Typography>
                        <div className={styles.options}>
                            {personalityTraits.map((personalityItem) => (
                                <CharacteristicTag name={personalityItem.name} icon={personalityItem.icon} selected={traits} setSelected={setTraits} />
                            ))}
                        </div>
                    </>
                )
            case 2:
                return (
                    <>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            Hobbie Information
                        </Typography>
                        <PictureSection>
                            <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                                Add a profile picture:
                            </Typography>
                            <div className={styles.options}>
                                <input type="file" accept="image/*" onChange={(e) => {e.target.files != null && setPicture(e.target.files[0])}} />
                            </div>
                            {picture && <img src={URL.createObjectURL(picture)} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />}

                        </PictureSection>
                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            What do you do in your free time?
                        </Typography>
                        <div className={styles.options}>
                            {hobbiesOptions.map((hobbie) => (
                                <CharacteristicTag name={hobbie.name} icon={hobbie.icon} selected={hobbies} setSelected={setHobbies} />
                            ))}
                        </div>
                    </>
                )
            default:
                break;
        }
        console.log(step);
    }

    return (
        <PageTemplate>
            <div className={styles.container}>
                <div className={styles.form}>
                    <Typography variant="h4" align="left" gutterBottom fontWeight="bold">
                        Registration
                    </Typography>

                    <div style={{
                        width: '30px',
                        height: '2px',
                        backgroundColor: 'blue',
                        marginTop: '-15px',
                        marginBottom: '15px'
                    }} />
                    {renderStep()}
                    <div style={{ position: 'absolute', bottom: '0px', width: '100%', marginLeft: -48, height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        <div>
                            <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                                Step {step + 1} of 3
                            </Typography>
                        </div>
                        <div>
                            <Link href="/login">
                                <Button variant="outlined" color="primary" style={{ marginRight: '-130px', minWidth: 120, visibility: step != 0 ? 'hidden' : 'visible' }} >
                                    Cancel
                                </Button>
                            </Link>
                            <Button variant="contained" color="primary" style={{ marginRight: '1rem', minWidth: 120, visibility: step == 0 ? 'hidden' : 'visible' }} onClick={() => changeStep(step, -1)}>
                                Back
                            </Button>
                            <Button variant="contained" color="primary" style={{ marginRight: '-130px', minWidth: 120, visibility: step != 2 ? 'visible' : 'hidden', }} onClick={() => changeStep(step, 1)}>
                                Next
                            </Button>
                            <Button variant="outlined" color="primary" style={{ marginLeft: '1rem', minWidth: 120, visibility: step == 2 ? 'visible' : 'hidden' }} onClick={handleRegister}>
                                Register
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}