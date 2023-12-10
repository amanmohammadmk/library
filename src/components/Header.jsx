import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import { BookOpen } from 'react-feather';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const {name}=location.state || {};
  return (
    <div>
         <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={'/home'} style={{textDecoration:"none",color:"black"}}>
              <BookOpen size={48}/>
              <span className='m-3' style={{fontWeight:"700"}}> book.storE</span>
           </Link>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{name}</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
   
export default Header