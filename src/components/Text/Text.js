import styled from 'styled-components';
import PropTypes from 'prop-types'

const Text = styled.p`
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.textColor};
  display: ${props => props.inline ? 'inline' : 'block'}
`;

export default Text;

Text.propTypes = {
    inline: PropTypes.bool
};

Text.defaultProps = {
    inline: false
};