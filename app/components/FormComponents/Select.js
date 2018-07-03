import React from 'react';
import styled from 'styled-components';

const SelectCSS = styled.select`
	border: 2px solid #282B24;
	background: #eee;
	font-size: 1em;
	padding: 0.3em 0.25em;
	color: #000;
`;

const Select = (props) => (
	<div className="form-group">
		<div> {props.name} &nbsp;</div>
		<SelectCSS
			name={props.name}
			value={props.selectedOption}
			onChange={props.controlFunc}
			className="form-select">
			<option value="">{props.placeholder}</option>
			{props.options.map(opt => {
				return (
					<option
						key={opt}
						value={opt}>{opt}</option>
				);
			})}
		</SelectCSS>
	</div>
);

Select.propTypes = {
	name: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOption: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string
};

export default Select;