import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Recipe( {recipe} ) {

    const navigate = useNavigate();

    const {label} = recipe.recipe;

    const handleDetails = () => {
        console.log(label);
        navigate(`/Recipe/${label}`)
    }

    return (
        <>
        <Card sx={{ maxWidth: 300, display:'flex', flexDirection:'column', justifyContent:'space-around',padding:'1em', marginBottom:'1em'}}>
            <CardMedia
                sx={{borderRadius: '4px'}}
                component="img"
                height="50%"
                image={recipe.recipe.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography
                    sx={{textAlign:'center'}}
                    gutterBottom 
                    variant="h5" 
                    component="div"
                    >
                    {label}
                </Typography>
                <CardContent
                    sx={{display:'flex', justifyContent:'space-between'}}
                >
                    <Typography variant="body2" color="text.secondary">
                    {recipe.recipe.totalTime}'
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {recipe.recipe.yield} Persons
                    </Typography>
                </CardContent>
            </CardContent>
            {/* <CardActions
                sx={{alignSelf:'center'}}
            >
                <Button size="small">Show details</Button>
            </CardActions> */}
            <Button
                onClick={handleDetails}
                variant='contained'
                color='success'
             >Show details
             </Button>
      
            </Card>
        </>
    )
}
