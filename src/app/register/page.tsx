'use client'
import styles from "../styles/register.module.css"
import PageTemplate from "../components/ui/PageTemplate"
import { Button, Typography, TextField } from "@mui/material";
import { alertError, alertSuccess } from "../components/alerts/alert";
import { useEffect, useState } from "react";
import CharacteristicTag from "../components/user/CharacteristicTag";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAllPersonalities } from "../services/formDataConsult";
import { signUp } from "../services/auth";

const personalityDictionary = {
    "ISTJ": "Inspector",
    "ISFJ": "Protector",
    "INFJ": "Counselor",
    "INTJ": "Architect",
    "ISTP": "Virtuoso",
    "ISFP": "Adventurer",
    "INFP": "Mediator",
    "INTP": "Logician",
    "ESTP": "Entrepreneur",
    "ESFP": "Entertainer",
    "ENFP": "Campaigner",
    "ENTP": "Innovator",
    "ESTJ": "Supervisor",
    "ESFJ": "Caregiver",
    "ENFJ": "Protagonist",
    "ENTJ": "Commander"
};

export default function Register() {
    const [personalities, setPersonalities] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [step, setStep] = useState(0);
    const [routine, setRoutine] = useState("");
    const [cleanliness, setCleanliness] = useState("");
    const [pets, setPets] = useState("");
    const [specialNeeds, setSpecialNeeds] = useState("");
    const [personality, setPersonality] = useState("");
    const [sociability, setSociability] = useState("");
    const [noise, setNoise] = useState("");

    const router = useRouter();

    useEffect(() => {
        getAllPersonalities().then((res) => {
            setPersonalities(res.data);
        }
        ).catch((err) => {
            console.log(err);
        })
    }, []);

    const handleRegister = () => {
        if (name == "" || email == "" || password == "" || phoneNumber == "" || routine == "" || cleanliness == "" || pets == "" || specialNeeds == "" || personality == "" || sociability == "" || noise == "") {
            alertError("Please fill out all fields");
            console.log(name, email, password, phoneNumber, routine, cleanliness, pets, specialNeeds, personality, sociability, noise);
        }else{
            signUp({
                name,
                email,
                password,
                phoneNumber,
                routine,
                cleanliness,
                pets,
                specialNeeds,
                personality,
                sociability,
                noise
            }).then(() => {
                alertSuccess("Successfully registered!");
                router.push("/login");
            }).catch((err) => {
                alertError("User already exists");
            })
        }
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
                            What is your routine like?
                        </Typography>
                        <div className={styles.options}>
                            <CharacteristicTag name="Early Bird" icon="🐦" selected={routine} setSelected={setRoutine} />
                            <CharacteristicTag name="Night Owl" icon="🦉" selected={routine} setSelected={setRoutine} />
                        </div>
                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            How are you with cleanliness?
                        </Typography>
                        <div className={styles.options}>
                            <CharacteristicTag name="Clean" icon="🧹" selected={cleanliness} setSelected={setCleanliness} />
                            <CharacteristicTag name="Messy" icon="💫" selected={cleanliness} setSelected={setCleanliness} />
                        </div>
                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            How do you feel about pets?
                        </Typography>
                        <div className={styles.options}>
                            <CharacteristicTag name="Love" icon="🐶" selected={pets} setSelected={setPets} />
                            <CharacteristicTag name="Rather Not" icon="🙅" selected={pets} setSelected={setPets} />
                        </div>
                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            Any special needs?
                        </Typography>
                        <div className={styles.options}>
                            <CharacteristicTag name="None" icon="✅" selected={specialNeeds} setSelected={setSpecialNeeds} />
                            <CharacteristicTag name="Allergies" icon="🤧" selected={specialNeeds} setSelected={setSpecialNeeds} />
                            <CharacteristicTag name="Parking" icon="🚗" selected={specialNeeds} setSelected={setSpecialNeeds} />
                            <CharacteristicTag name="Smoking" icon="🚭" selected={specialNeeds} setSelected={setSpecialNeeds} />

                        </div>
                    </>
                )
            case 2:
                return (
                    <>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            Personality Information
                        </Typography>
                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            Whats your type of personality?: {personalityDictionary[personality as keyof typeof personalityDictionary]}
                        </Typography>
                        <div className={styles.options}>
                            {personalities.map((personalityItem) => (
                                <CharacteristicTag name={personalityItem.code} icon={personalityItem.emoji} selected={personality} setSelected={setPersonality} />
                            ))}
                        </div>
                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            How sociable are you?
                        </Typography>
                        <div className={styles.options}>
                            <CharacteristicTag name="Introvert" icon="🤫" selected={sociability} setSelected={setSociability} />
                            <CharacteristicTag name="Extrovert" icon="🗣" selected={sociability} setSelected={setSociability} />
                        </div>
                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            How do you feel about noise?
                        </Typography>
                        <div className={styles.options}>
                            <CharacteristicTag name="Doesn't Matter" icon="🤷" selected={noise} setSelected={setNoise} />
                            <CharacteristicTag name="Prefer Quiet" icon="🤫" selected={noise} setSelected={setNoise} />
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
                    <div style={{ position: 'absolute', bottom: '0px', width: '100%', marginLeft: -48, height: '100px',display: 'flex', alignItems: 'center', justifyContent:'flex-start',flexDirection: 'column' }}>
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