import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/Announcement.css';
export default class Announcement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <div className="announcementContainer">
                    <div>
                        <h3>Name:</h3>{this.props.name}
                    </div>
                    <div>
                        <h3>Description</h3>{this.props.description}
                    </div>
                </div>
            </Container>
        )
    }
}