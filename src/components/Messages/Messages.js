import React from 'react';
import PropTypes from "prop-types"
import Message from "../Message/Message";


function Messages({messages}) {
    return messages.map((msg, i) => <Message key={i} text={msg}/>);
}

export default Messages;

Messages.propTypes = {
    messages: PropTypes.array.isRequired
};