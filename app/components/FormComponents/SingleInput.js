import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	border: 2px solid #282B24;
	background: #eee;
	font-size: 1em;
	color: #000;
	padding: 0.3em 0.5em;
`;

const SingleInput = (props) => (
	<div className="form-group">
		<Input
			className="form-input"
			name={props.name}
			type={props.inputType}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
	</div>
);

SingleInput.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number', 'password']).isRequired,
	title: React.PropTypes.string,
	name: React.PropTypes.string.isRequired,
	controlFunc: React.PropTypes.func.isRequired,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]).isRequired,
	placeholder: React.PropTypes.string,
};

export default SingleInput;