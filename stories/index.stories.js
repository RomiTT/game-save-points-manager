import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import {
  NavBar,
  NavBarLeftItem,
  NavBarCenterItem,
  NavBarRightItem
} from './css_tutorials/NavBar';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('CSS tutorials', module).add('NavBar using flexbox', () => (
  <div>
    <NavBar>
      <NavBarLeftItem>
        <div>Left Contents =============================</div>
      </NavBarLeftItem>
      <NavBarCenterItem>
        <div>Center Item</div>
      </NavBarCenterItem>
      <NavBarRightItem>
        <div>Right Item</div>
      </NavBarRightItem>
    </NavBar>
    <br />
    <NavBar>
      <NavBarLeftItem>
        <div>Left Contents</div>
      </NavBarLeftItem>
      <NavBarCenterItem>
        <div>Center Item =============================</div>
      </NavBarCenterItem>
      <NavBarRightItem>
        <div>Right Item</div>
      </NavBarRightItem>
    </NavBar>
    <br />
    <NavBar>
      <NavBarLeftItem>
        <div>Left Contents</div>
      </NavBarLeftItem>
      <NavBarCenterItem>
        <div>Center Item</div>
      </NavBarCenterItem>
      <NavBarRightItem>
        <div>Right Item =============================</div>
      </NavBarRightItem>
    </NavBar>
  </div>
));
