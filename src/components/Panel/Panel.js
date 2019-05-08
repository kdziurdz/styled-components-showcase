import styled from "styled-components";
import PropTypes from "prop-types";

const Panel = styled.div`
  background-color: ${props => props.secondary ? props.theme.secondaryBackground : props.theme.primaryBackground}
  border-radius: ${props => props.theme.borderRadius}
  padding: 0.5rem
  margin: 0.5rem
`;

export default Panel;

Panel.defaultProps = {
    secondary: false
};

Panel.propTypes = {
    secondary: PropTypes.bool
};