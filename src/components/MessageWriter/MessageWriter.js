import React, {Component} from 'react';
import {Col, Row} from 'react-awesome-styled-grid'
import Input from "../Input/Input";
import PropTypes from "prop-types";
import Panel from "../Panel/Panel";

class MessageWriter extends Component {

    constructor(props) {
        super(props);
        this.state = {newMessage: ''};
    }

    handleChange = (event) => {
        this.setState({newMessage: event.target.value});
    };

    handleSubmit = (event) => {
        const {onMessageSent} = this.props;
        const {newMessage} = this.state;
        onMessageSent(newMessage);
        this.setState({newMessage: ''});
        event.preventDefault();
    };


    render() {
        const {newMessage} = this.state;
        return (
            <Panel secondary>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs={3}>
                            <Input onChange={this.handleChange} value={newMessage}/>
                        </Col>
                        <Col xs={1}>
                            <button type="submit">Send</button>
                        </Col>
                    </Row>
                </form>
            </Panel>
        );
    }
}

export default MessageWriter;

MessageWriter.propTypes = {
    onMessageSent: PropTypes.func.isRequired
};