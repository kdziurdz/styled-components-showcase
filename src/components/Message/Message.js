import React from 'react';
import PropTypes from "prop-types"
import Panel from "../Panel/Panel";
import Text from "../Text/Text";


function Message({text}) {
    return (
        <Panel>
            <Text>{text}</Text>
        </Panel>
    );
}

export default Message;

Message.propTypes = {
    text: PropTypes.string.isRequired
};