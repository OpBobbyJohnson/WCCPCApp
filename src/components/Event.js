import React from 'react';
import { Container, Accordion, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import '../css/Event.css';
export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            attendies:props.attendies,
            id: props.id
        }
        this.renderAttendies = this.renderAttendies.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderAttendies() {
        console.log(this.state.attendies)
        let arr = [];
        let i = 0;
        for (let attendie of this.state.attendies) {
            arr.push(<div key={i}>{attendie}</div>);
            i++;
        }
        return arr;
    }

    handleSubmit(event) {
        let val = document.getElementById(`eventForm${this.state.id}`).value;
        if(val !== '' || val){
            let temp = this.state.attendies;
            temp.push(val);
            this.setState({attendies:temp});
        }
    }

    render() {
        console.log('render');
        return (
            <Container>
                <div className="eventContainer">
                    <div>
                        <h3>Name:</h3>{this.state.name}
                    </div>
                    <div>
                        <h3>Description</h3>{this.state.description}
                    </div>
                    <Accordion className="eventAccordian">
                        <Card>
                            <Card.Header className="eventAccordian">
                                There are currently {this.props.attendies.length}, click
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    here
                            </Accordion.Toggle>
                                to view attendies.
                        </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="eventAccordian">{this.renderAttendies()}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion className="eventAccordian">
                        <Card>
                            <Card.Header className="eventAccordian">
                                Plan on attending? Click
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    here
                            </Accordion.Toggle>
                                Join.
                        </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="eventAccordian">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            id={`eventForm${this.state.id}`}
                                            placeholder="Put name here"
                                            aria-label="Name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <Button onClick={event => this.handleSubmit(event)}>
                                        Join
                                    </Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </Container >
        )
    }
}