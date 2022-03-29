import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { getTitle, getRate } from "../redux/actions/movieActions";

function NavBar() {
  const dispatch = useDispatch();
  const ratingChanged = newRating => {
    dispatch(getRate(newRating));
  };
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand href='#home'>GoMyMovies</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Series
            </Nav.Link>
            <Nav.Link as={Link} to='/'>
              Movies
            </Nav.Link>
          </Nav>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor='#ffd700'
          />
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              onChange={e => dispatch(getTitle(e.target.value))}
            />
            <Button variant='outline-secondary'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
