import Section from './Section';

const LeftAlignSection = Section.extend`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1em;
`;

export default LeftAlignSection;
