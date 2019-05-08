import React, {PureComponent} from 'react';
import {Normalize} from "styled-normalize";
import {ThemeProvider} from "styled-components"
import {Col, Container, Row} from 'react-awesome-styled-grid'
import Messages from "./components/Messages/Messages";
import MessageWriter from "./components/MessageWriter/MessageWriter";
import './App.css';

const theme = {
    primaryBackground: "blue",
    secondaryBackground: "gray",
    borderRadius: '10px',
    fontSize: '20px',
    fontFamily: 'fantasy', // initial
    textColor: 'white'
};


class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            messages: ["message1", "message2"]
        }
    }

    handleMessageSent = (newMessage) => {
        this.setState((prevState) => ({
            messages: [...prevState.messages, newMessage]
        }))
    };

    render() {
        const {messages} = this.state;
        return (
            <React.Fragment>
                <Normalize/>
                <ThemeProvider theme={theme}>
                    <Container>
                        <Row>
                            <Col>
                                <Messages messages={messages}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <MessageWriter onMessageSent={this.handleMessageSent}/>
                            </Col>
                        </Row>
                    </Container>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

export default App;
