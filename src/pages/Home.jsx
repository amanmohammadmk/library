import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import BookListFirst from './BookListFirst';
import BookListSecond from './BookListSecond';
import './Home.css';
import BookListThird from './BookListThird';
import { Link } from 'react-router-dom';













function Home() {




  return (

    <div>


      <h1 className="text-center mt-5"><b>Your Library</b></h1>
      <p className='text-center text-info' style={{ marginTop: '-10px' }}>Know more</p>

      <div className="search-box">

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">E-bookStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link to={'/getyourbook'} style={{textDecoration:"none",color:"black"}}><Nav.Link href="#action2">My Books</Nav.Link></Link>
                <Link to={'/allcategory'} style={{textDecoration:"none",color:"black"}}><Nav.Link href="#action2">Category</Nav.Link></Link>
              </Nav>
              <Form className="d-flex">
                
                <Link to={'/searchwindow'}><Button variant="outline-info" >Search</Button></Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>

      <div  className='first rounded' > </div>
      <h1 className="text-center mt-2"><b>Trending</b></h1>

      
          <BookListFirst/>
          <BookListSecond/>
          <BookListThird/>

          


       
       





     

    </div>
  )
}

export default Home