import React, { useState } from 'react';
import { navigate } from 'gatsby';

import {
  NavbarWrappedStyled,
  ContentWrapped,
  DisableBodyScroll,
  Logo,
} from './styles';

import MenuButton from './MenuButton';

interface Props {
  isHidden: boolean;
  logoImg?: string;
  [index: string]: any;
}

const NavbarWrapped: React.FC<Props> = props => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavbarWrappedStyled {...props}>
      <DisableBodyScroll disableScroll={isOpen && !props.isHidden} />
      <Logo
        isWrapped={true}
        image={props.logoImg}
        onClick={() => navigate('/')}
      />
      <MenuButton isClicked={isOpen} onClick={() => setOpen(!isOpen)} />
      <ContentWrapped isClicked={isOpen} isHidden={props.isHidden}>
        {props.children}
      </ContentWrapped>
    </NavbarWrappedStyled>
  );
};

export default NavbarWrapped;
