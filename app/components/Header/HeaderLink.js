import { Link } from 'react-router-dom';
import styled from 'styled-components';

//2a3132

export default styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0 0.5em;
  margin: 0 0.2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 1vw;
  border: 2px solid #444;
  background: #000;
  color: #eee;

  width: 9em;

  &:hover {
    background: #eee;
    color: #000;
    text-decoration: none;
  }
`;
