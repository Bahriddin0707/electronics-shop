import { Form, Button } from "react-bootstrap";

function SearchBox() {
  return (
    <Form className="d-flex gap-2" style={{ marginRight: "20px" }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Search..." />
      </Form.Group>

      <Button
        type="submit"
        variant="outline-success"
        className="my-auto text-light"
      >
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;
