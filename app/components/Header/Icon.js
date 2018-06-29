import styled from 'styled-components';
import A from './A';

const I = styled.i`
  padding: 0.5em;
  background: #eee;
  border: 1px solid #000;
`;

const Icon = (props) = (
    <A href={'#'}> <I className={'w-icon' + className}></I> </A>
)

Icon.propTypes = {
    className: React.PropTypes.string.isRequired,
}

export default Icon;