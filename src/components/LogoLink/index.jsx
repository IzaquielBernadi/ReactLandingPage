import * as Styled from './styles';
import P from 'prop-types';
import { Heading } from '../Heading';

export const LogoLink = ({ text, image = '', link }) => {
  return (
    <Heading>
      <Styled.Container href={link}>
        {!!image && <img src={image} alt={text} />}
        {!image && <span>{text}</span>}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  image: P.string,
  link: P.string.isRequired,
};
