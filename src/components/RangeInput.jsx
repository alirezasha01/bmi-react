import React from 'react';
import {Container, Form  , Row , Col} from 'react-bootstrap';
import './RangeInput.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const RangeInput = () => {
    const [ valueWeight, setValueWeight ] = React.useState(80);
    const [ valueHeight , setValueHeight ] = React.useState(150);
    const Result = Math.round(valueWeight / ((valueHeight/100)*(valueHeight/100)))
  return (
    <>
    <Container>
        <Row>
            <Col md={2}></Col>
            <Col>
               <h1>BMI Calculator</h1>
               <Form.Label>Weight</Form.Label>
               <Form.Range  min={0} max={300} value={valueWeight} onChange={e => setValueWeight(e.target.value)}/>
               <h5>{valueWeight}kg</h5>
               <Form.Label>Height</Form.Label>
               <Form.Range  min={0} max={300} value={valueHeight} onChange={m => setValueHeight(m.target.value)}/>
               <h5>{valueHeight}cm</h5>
               <h4>Your BMI is : {Result}</h4>
               </Col>
               <Col md={2}></Col>
        </Row>

    </Container>
    

    </>
  );
}

export default RangeInput;