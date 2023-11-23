import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {
  id: string;
  name: string;
  image: string;
  personalAttributes: string[];
  university: string;
};

const Personalities = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const PersonalityTag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    background-color: rgb(228, 228, 228);
    border-radius: 1rem;
    padding: 5px;
    margin: 5px;
    border: 1px solid black;
`;

export default function PersonCard({ id, name, image, personalAttributes, university }: Props) {
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {university}
        </Typography>
        <Personalities>
          {personalAttributes.map((attribute) => (
            <PersonalityTag key={attribute}>
              <Typography variant="body2" color="text.secondary">
                {attribute}
              </Typography>
            </PersonalityTag>
          ))}
        </Personalities>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Link href="https://wa.me/573205785410" target="_blank">
          <Button>Contact</Button>
        </Link>
        <Link href="/roomies/[id]" as={`/roomies/${id}`}>
          <Button variant='contained'>View Profile</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
