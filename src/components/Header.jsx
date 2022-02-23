import '../header.css';

function Header() {
    return ( 
        <header style={{display : 'flex', justifyContent :'space-between', alignItems:'center'}}>
            <h6>LOGO</h6>
            <input type='text'placeholder="Search Recipe..."/>
            <h6>CTA BURGER</h6>
        </header>
     );
}

export default Header;