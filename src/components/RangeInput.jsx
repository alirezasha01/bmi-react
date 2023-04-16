import React from 'react';
import {Container, Form  , Row , Col} from 'react-bootstrap';
import './RangeInput.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const RangeInput = () => {
    const [ valueWeight, setValueWeight ] = React.useState(80);
    const [ valueHeight , setValueHeight ] = React.useState(150);
    const Result = Math.round(valueWeight / ((valueHeight/100)*(valueHeight/100)))
    let Bmi="";
    if(Result < 18){
        Bmi = "You are underweight"
    }
    else if ( 18 <= Result && Result < 25) {
        Bmi = "You are normal"
    } 
    else if (25 <= Result && Result < 40) {
        Bmi = "You are overweight"
    } else {
        Bmi = "You are obese"
    }
  return (
    <>
    <Container>
        <Row>
            <Col md={2}></Col>
            <Col>
               <h1>BMI Calculator</h1>
               <Form.Label className='form-label'>Weight</Form.Label>
               <Form.Range  min={1} max={300} value={valueWeight} onChange={e => setValueWeight(e.target.value)}/>
               <h5>{valueWeight}kg</h5>
               <Form.Label className='mt-5 form-label'>Height</Form.Label>
               <Form.Range  min={1} max={300} value={valueHeight} onChange={m => setValueHeight(m.target.value)}/>
               <h5>{valueHeight}cm</h5>
               <h4>Your BMI is : {Result}</h4>
               <div className='display-grid'>
               <h4>{Bmi}</h4>
               </div>
               
               </Col>
               <Col md={2}></Col>
        </Row>

    </Container>
    

    </>
  );
}

export default RangeInput;