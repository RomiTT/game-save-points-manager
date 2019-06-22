import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Navbar,
  Colors,
  H1,
  Classes,
  Alignment,
  NavbarDivider,
  Button,
  NavbarGroup,
  NavbarHeading
} from '@blueprintjs/core';

const ftb = require('frameless-titlebar');
const TitleBar = ftb.default;

const titleBarTheme = {
  /* Title */
  barTheme: 'dark', // light, dark
  barHeight: '22px', // defines the bar height for mac os
  winBarHeight: '28px', // defines the bar height for windows os
  barColor: '#fff',
  barTitleColor: 'inherit',
  barBackgroundColor: Colors.DARK_GRAY4,
  barShowBorder: false,
  titleFontFamily: 'inherit',
  titleFontWeight: 'normal',
  barBorderBottom: '1px solid #000',
  inActiveOpacity: 0.6, // dim menu bar & title color when window is not in focus
  // should the icon be shown in the center of the toolbar on Mac/Linux apps alongside the app or title property
  showIconDarwin: true,
  /* Menu */
  menuStyle: 'horizontal', // horizontal, vertical, stacked
  menuDimItems: true, // dim other active menu items when menu list is open
  menuDimOpacity: 0.6,
  menuDisabledOpacity: 0.3,
  menuMarginBottom: 10, // margin from bottom for max height
  stackedMenuMarginRight: 200, // margin from right for max width
  menuMaxWidth: 350, // max width of a menu list
  menuBackgroundColor: '#fff',
  menuItemHeight: '30px',
  menuItemTextColor: '#fff',
  menuItemHoverBackground: 'rgba(255,255,255,0.3)',
  menuActiveTextColor: '#24292e',
  menuTextHighlightColor: '#fff',
  menuHighlightColor: '#0372ef',
  accentStatusIcon: true,
  menuSubLabelHeaders: true,
  menuSubLabelColor: '#6a737d',
  menuAcceleratorColor: '#6a737d',
  menuShowBoxShadow: true,
  menuBoxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  /* Menu Overlay */
  menuOverlayBackground: 'black',
  menuOverlayOpacity: 0.4,
  menuSeparatorColor: '#e1e4e8',
  /* WindowControls */
  windowControlsColor: '#fff',
  windowCloseHover: '#fff',
  windowCloseBackground: '#e81123',
  windowCloseActive: '#bf0f1d',
  windowDefaultBackground: 'rgba(255,255,255,0.3)',
  windowDefaultActive: 'rgba(255,255,255,0.2)',
  controlsLayout: 'right', // window control placement for linux systems
  linuxBorder: '1px solid rgba(0,0,0,0.06)', // linux window controls border color
  linuxCloseBackground: '#c85458', // linux close button background color
  linuxCloseColor: '#3b383d',
  linuxCloseActive: '#C24A41'
};

const App: React.FC = () => {
  return (
    <div className='hero is-fullheight bp3-dark'>
      <div className='hero-head'>
        <TitleBar
          app='Game Save Points Manager'
          icon={`./appIcon.ico`}
          theme={titleBarTheme}
        />
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Blueprint</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className={Classes.MINIMAL} icon='home' text='Home' />
            <Button className={Classes.MINIMAL} icon='document' text='Files' />
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon='user' />
            <Button className={Classes.MINIMAL} icon='notifications' />
            <Button className={Classes.MINIMAL} icon='cog' />
          </NavbarGroup>
        </Navbar>
      </div>
      <div
        className='hero-body'
        style={{
          backgroundColor: Colors.GOLD5
        }}
      >
        <div className='container has-text-centered'>
          <img src={logo} className='App-logo' alt='logo' />
          <p className='title'>Hello Game Save Points Manager</p>
        </div>
      </div>
    </div>
  );
};

export default App;
