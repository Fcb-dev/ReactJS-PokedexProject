import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './style.css';
import { Button, CardActionArea, CardActions } from '@mui/material';

export function PokeCard({ name, image, types }) {

  const typeHandler = () => {
    if(types[1]){
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="230" image={image}/>
        <CardContent>
          <Typography className="pokemon-name" gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography className="pokemon-name" gutterBottom variant="caption" component="div">
            {typeHandler()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
