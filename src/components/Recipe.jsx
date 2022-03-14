import React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import ModalContext from '../contexts/ModalContext';
import RecipeModal from './RecipeModal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function Recipe( {recipe} ) {

    const {open, handleOpen, handleClose} = useContext(ModalContext);


    return (
        <>
        <Card sx={{ maxWidth: 300, display:'flex', flexDirection:'column', justifyContent:'space-around',padding:'1em', marginBottom:'1em'}}>
            <CardMedia
                sx={{borderRadius: '4px'}}
                component="img"
                height="50%"
                image={recipe.recipe.image}
                alt={recipe.recipe.label}
            />
            <CardContent>
                <Typography
                    sx={{textAlign:'center'}}
                    gutterBottom 
                    variant="h5" 
                    component="div"
                    >
                    {recipe.recipe.label}
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
                onClick={handleOpen}
                variant='contained'
                color='success'
            >Show details
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
                >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti minima, alias quis assumenda aliquam dicta iusto rem explicabo rerum cupiditate saepe aliquid asperiores voluptate odio dolorem laborum maiores labore quo.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ipsa aut et debitis, quae cum vero assumenda facilis, voluptatibus quia fugit quasi accusamus corporis autem explicabo necessitatibus aspernatur id dolores.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nemo corrupti? Est, velit fugit? Quia hic enim iusto, saepe est dolorum voluptas cum magni, maiores dicta, fugit sed. At, eligendi.
                </Typography>
                </Box>
            </Modal>
            </Card>
        </>
    )
}
