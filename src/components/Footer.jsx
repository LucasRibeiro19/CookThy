import { Typography } from "@mui/material";
function Footer() {
    return ( 
        <footer
            style={{backgroundColor: '#01937C', color:'#fff', position:'fixed', bottom:'0', width:'100%', textAlign: 'center'}}
        >
            <Typography
                fontFamily= 'Poppins'
                fontWeight='Bold'
            >Conceived by: Claire Roman, Nicolas Journet and Lucas Ribeiro

            </Typography>
        </footer>
     );
}

export default Footer;