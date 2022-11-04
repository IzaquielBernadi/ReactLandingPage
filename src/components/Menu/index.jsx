import * as Styled from './styles';
import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLink';
import { Menu as MenuIcon } from '@styled-icons/evaicons-solid/Menu';

export const Menu = ({ links = [], logoData }) => {
  return (
    <>
      <Styled.Button>
        <MenuIcon />
      </Styled.Button>
      <Styled.Container>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
