'use client'
import styles from "../styles/register.module.css"
import PageTemplate from "../components/ui/PageTemplate"
import { Button, IconButton, Typography, TextField, Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import CharacteristicTag from "../components/user/CharacteristicTag";


export default function Register() {
    const [step, setStep] = useState(0);
    const [routine, setRoutine] = useState("");
    const [cleanliness, setCleanliness] = useState("");
    const [pets, setPets] = useState("");
    const [specialNeeds, setSpecialNeeds] = useState("");

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
                        <TextField label="Full Name" variant="outlined" fullWidth margin="normal" />
                        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
                        <TextField label="Password" variant="outlined" fullWidth margin="normal" />

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
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'flex-start',
                            marginBottom: '1rem',
                            flexWrap: 'wrap'
                        }}>
                            <CharacteristicTag name="Early Bird" icon="🐦" selected={routine} setSelected={setRoutine} />
                            <CharacteristicTag name="Night Owl" icon="🦉" selected={routine} setSelected={setRoutine} />
                        </div>
                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            How are you with cleanliness?
                        </Typography>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'flex-start',
                            marginBottom: '1rem',
                            flexWrap: 'wrap'
                        }}>
                            <CharacteristicTag name="Clean" icon="🧹" selected={cleanliness} setSelected={setCleanliness} />
                            <CharacteristicTag name="Messy" icon="💫" selected={cleanliness} setSelected={setCleanliness} />
                        </div>
                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            How do you feel about pets?
                        </Typography>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'flex-start',
                            marginBottom: '1rem',
                            flexWrap: 'wrap'
                        }}>
                            <CharacteristicTag name="Love" icon="🐶" selected={pets} setSelected={setPets} />
                            <CharacteristicTag name="Rather Not" icon="🙅" selected={pets} setSelected={setPets} />
                        </div>
                        <Typography variant="subtitle2" align="left" gutterBottom color="textSecondary">
                            Any special needs?
                        </Typography>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'flex-start',
                            marginBottom: '1rem',
                            flexWrap: 'wrap'
                        }}>
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
                        Step 3
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
                    <div style={{ position: 'absolute', bottom: '0px', width: '100%', marginLeft: -48, height: '64px' }}>
                        <Button variant="contained" color="primary" style={{ marginRight: '1rem', minWidth: 120, visibility: step == 0 ? 'hidden' : 'visible' }} onClick={() => changeStep(step, -1)}>
                            Back
                        </Button>
                        <Button variant="contained" color="primary" style={{ marginRight: '-130px', minWidth: 120, visibility: step != 2 ? 'visible' : 'hidden', }} onClick={() => changeStep(step, 1)}>
                            Next
                        </Button>
                        <Button variant="outlined" color="primary" style={{ marginLeft: '1rem', minWidth: 120, visibility: step == 2 ? 'visible' : 'hidden' }}>
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}