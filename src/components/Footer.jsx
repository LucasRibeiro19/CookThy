import { Typography } from "@mui/material";
function Footer() {
    return ( 
        <footer
            style={{backgroundColor: '#01937C', color:'#fff', position:'fixed', bottom:'0', width:'100%', textAlign: 'center'}}
        >
            <Typography
                variant="subtitle"
                fontFamily= 'Poppins'
                fontWeight='Bold'
            >©Cook'Thy2022

            </Typography>
        </footer>
     );
}

export default Footer;