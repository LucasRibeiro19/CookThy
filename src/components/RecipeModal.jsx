import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RecipeModal({recipe}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {label} = recipe.recipe;
  const {ingredientLines} = recipe.recipe

  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems: 'center'}}>
      <Button 
        onClick={handleOpen}
        variant="contained"
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
          <div className="modal-content">
            <h2>{label}</h2>
            <ul>
              {ingredientLines.map(ingredient => <li>{ingredient}</li>)}
            </ul>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
