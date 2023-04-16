import React from 'react';
import {Container, Form  , Row , Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const RangeInput = () => {
    const [ valueWeight, setValueWeight ] = React.useState(80);
    const [ valueHeight , setValueHeight ] = React.useState(150);
  return (
    <>
    <Container>
        <Row>
            <Col md={2}></Col>
            <Col>
               <Form.Label>Weight</Form.Label>
               <Form.Range  min={0} max={300} value={valueWeight} onChange={e => setValueWeight(e.target.value)}/>
               <p>{valueWeight}</p>
               <Form.Label>Height</Form.Label>
               <Form.Range  min={0} max={300} value={valueHeight} onChange={m => setValueHeight(m.target.value)}/>
               <p>{valueHeight}</p></Col>
               <Col md={2}>
            </Col>
        </Row>

    </Container>
    

    </>
  );
}

export default RangeInput;