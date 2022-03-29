import React from "react";
import { Button, Card } from "react-bootstrap";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem", marginBottom: "30px" }}>
      <Card.Img
        variant='top'
        src={movie.posterUrl}
        width='100%'
        height='300px'
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{"⭐".repeat(movie.rate)}</Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
//'https://media.istockphoto.com/photos/shot-of-a-young-man-taking-a-break-while-working-at-home-picture-id1347684123?s=2048x2048'
