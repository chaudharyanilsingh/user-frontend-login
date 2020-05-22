import React from 'react';
import {
    
    CardBody,
    CardHeader,
    CardTitle,
    Table
    
  } from "reactstrap";
  
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import Axios from 'axios'
import { getCurrentUser } from '../util/APIUtils';
import { API_BASE_URL, ACCESS_TOKEN } from '../constants';
import './AddQuestion.css';
import Alert from 'react-s-alert';


class ShowQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Allquestion : [],
            Error:null,
            answer:'',
            currentQuestion:[],
            currentQuestionType:'',
            currentUser:[]

        
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    
    handleInputChange(event) {
      const target = event.target;
      const inputName = target.name;        
      const inputValue = target.value;

      this.setState({
          [inputName] : inputValue
      });        
  }

    
    componentDidMount(){ 

      
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response
      });
    }).catch(error => {
      
    }); 
        
        const url=`${API_BASE_URL}/questions/show/all`;
        Axios.get(url,{ headers: {"Authorization" : `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`} })
        .then(response => {
            this.setState({
                Allquestion:response.data
            })
            
          })
          .catch(error => {
            console.log(error);
            this.setState({
              Error:error.message
             
            })
          })
        }

        componentDidUpdate(){

        }
    AnswerHandler(q){

      this.setState({
        showPopUP:true,
        currentQuestion:q,
        currentQuestionType:q.questionType
      })
     }

    

    submitAnswer(){
      
      
      const questionResponse={
        question:this.state.currentQuestion.question,
        questionType:this.state.currentQuestionType
      }
        const answerResponse={

          userName:this.state.currentUser.email,
          answer:this.state.answer,
          
          questions:questionResponse
        }
       const url=`${API_BASE_URL}/answer/save`;
        Axios.post(url,answerResponse,{ headers: {"Authorization" : `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`} })
        .then(response => {
            Alert.success("your response is successfully saved");
            window.location.reload();
            
          })
          .catch(error => {
            console.log(error+"submit answer");
            this.setState({
              Error:error.message
             
            })
            Alert.error(error.message);
          })
        }
         
      

         
     render() {
        const { Error, Allquestion} = this.state;
        if(Error) {
            return (
              <div>Error: {Error}</div>
            )
          }
        return (<div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">ALL Questions</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                  <tr>
                <th>id</th>
                <th>Questiion</th>
                
              </tr>
                  </thead>
                  <tbody>
                  {Allquestion.map(Allquestion => (
                       <tr key={Allquestion.id}>
                          <td>{Allquestion.id}</td>
                          <td>{Allquestion.question}</td>
                          <button onClick={()=>this.AnswerHandler(Allquestion)} class="btn-primary">Answer</button>
                        </tr>
                   ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          </Row>
          {this.state.currentQuestion.questionType==='Text' ? 
          <div>
            <input type="text" name="answer" 
              className="form-control" placeholder="answer"
              value={this.state.answer} onChange={this.handleInputChange} required/>
                                            <Button variant="primary" onClick={()=>this.submitAnswer()}>
                                                Submit
                                            </Button>

          </div>
          : null  } 
          {

            this.state.currentQuestion.questionType==='CheckBox'?
            <div>
              <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">options</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                         <Form.Group>
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label={this.state.currentQuestion.userQuestionOptions.option1}
                                                name="answer"
                                                id="id1"
                                                value={this.state.currentQuestion.userQuestionOptions.option1}
                                                onClick={this.handleInputChange}
                                            />
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label={this.state.currentQuestion.userQuestionOptions.option2}
                                                name="answer"
                                                id="id2"
                                                value={this.state.currentQuestion.userQuestionOptions.option2}
                                                onClick={this.handleInputChange}
                                            />
                                            
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label={this.state.currentQuestion.userQuestionOptions.option3}
                                                name="answer"
                                                id="id3"
                                                value={this.state.currentQuestion.userQuestionOptions.option3}
                                                onClick={this.handleInputChange}
                                            />
                                            
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label={this.state.currentQuestion.userQuestionOptions.option4}
                                                name="answer"
                                                id="id4"
                                                value={this.state.currentQuestion.userQuestionOptions.option4}
                                                onClick={this.handleInputChange}
                                            />
                                        </Form.Group>
                                        
                                        <Button variant="primary" onClick={()=>this.submitAnswer()}>
                                                Submit
                                            </Button>
                                        </Form>
                                        </Col>
                                        </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            :null
          }
      </div>
        );
    }
}

export default ShowQuestion;
