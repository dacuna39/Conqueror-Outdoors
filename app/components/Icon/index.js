import React from 'react';
import styled from 'styled-components';
import A from './A';

const I = styled.i`
  padding: 0.5em;
  background: #eee;
  border: 1px solid #000;
  color: #000;
`;

const Icon = (props) => (
    <A> <I className={props.className} /> </A>
);

Icon.propTypes = {
    className: React.PropTypes.string.isRequired,
}

export default Icon;