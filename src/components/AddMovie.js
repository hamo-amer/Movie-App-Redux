import React, { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/actions/movieActions";

function AddMovie() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(1);

  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <FormControl type='text' onChange={e => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <FormControl
              type='text'
              onChange={e => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>PosterUrl</Form.Label>
            <FormControl
              type='text'
              onChange={e => setPosterUrl(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rate</Form.Label>
            <FormControl
              type='number'
              onChange={e => setRate(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              dispatch(
                addMovie({
                  id: Math.random(),
                  title,
                  description,
                  posterUrl,
                  rate,
                })
              );
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
