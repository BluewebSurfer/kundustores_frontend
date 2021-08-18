import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const Search = () => {
    return (
        <div>
            <Form>
  <Row className="align-items-center">
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
       
      </Form.Label>
      <Form.Control id="inlineFormInputName" placeholder="Search hare..." />
    </Col>
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
       
      </Form.Label>   
    </Col>
    <Col xs="auto" className="my-1">
      <Button type="submit">Submit</Button>
    </Col>
  </Row>
</Form>
        </div>
    );
}

export default Search;
