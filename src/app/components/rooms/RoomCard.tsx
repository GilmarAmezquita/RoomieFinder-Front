import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import WhatshotIcon from '@mui/icons-material/Whatshot';

type Props = {
    title: string;
    description: string;
    image: string;
    price: number;
    personalAttributes: string[];
    match: boolean;
};

const MatchTag = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    background-color: #f44336;
    width: 5.9rem;
    color: white;
    padding: 0.5rem;
    border-radius: 2rem;
    margin-top: -50px;
    margin-left: 10px;
`;

export default function RoomCard(props: Props) {
    if (props.match) {
        return (
            <Card sx={{ width: 300, margin: '1rem' }}>
                
                <CardMedia
                    sx={{ height: 140}}
                    image={props.image}
                    title="Room Image"
                />
                <MatchTag>
                    <WhatshotIcon />
                    <Typography variant="body1" color="white" fontWeight="bold">
                        Match
                    </Typography>
                </MatchTag>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight="bold">
                        {props.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">Contact</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    } else {
        return (
            <Card sx={{ width: 300, margin: '1rem' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={props.image}
                    title="Room Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight="bold">
                        {props.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">Contact</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}
