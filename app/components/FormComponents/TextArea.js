import React from 'react';
import styled from 'styled-components';

const TextAreaCSS = styled.textarea`
	border: 1px solid #000;
	background: #eee;
`;

const TextArea = (props) => (
	<div className="form-group">
		<div className="form-label">{props.title}</div>
		<TextAreaCSS
			className="form-input"
			style={props.resize ? null : {resize: 'none'}}
			name={props.name}
			rows={props.rows}
			cols={props.cols}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
	</div>
);

TextArea.propTypes = {
	title: React.PropTypes.string.isRequired,
	rows: React.PropTypes.number.isRequired,
	cols: React.PropTypes.number,
	name: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired,
	resize: React.PropTypes.bool,
	placeholder: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired
};

export default TextArea;