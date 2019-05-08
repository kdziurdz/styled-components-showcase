import styled from 'styled-components';

const Input = styled.input`
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  padding: 0.5rem;
  border-radius: ${props => props.theme.borderRadius};
`;

export default Input;