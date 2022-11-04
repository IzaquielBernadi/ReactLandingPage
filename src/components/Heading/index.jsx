import * as Styled from './styles';
import P from 'prop-types';

export const Heading = ({ children, fontColor = false, as = 'h1', size = 'big', uppercase = false }) => {
  return (
    <div>
      <Styled.Title fontColor={fontColor} as={as} size={size} uppercase={uppercase}>
        {children}
      </Styled.Title>
    </div>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  fontColor: P.bool,
  uppercase: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
};
