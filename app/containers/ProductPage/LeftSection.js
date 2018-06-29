import Section from './Section';

const LeftSection = Section.extend`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 775px;

  background: rgba(0, 0, 0, 0.65);
  -webkit-box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.65);
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.65);
`;

export default LeftSection;
