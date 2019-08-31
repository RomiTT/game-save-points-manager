import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import './index.css';
import { Button, Welcome } from '@storybook/react/demo';
import {
  NavBar,
  NavBarLeftItem,
  NavBarCenterItem,
  NavBarRightItem
} from './css_tutorials/NavBar';
import Layout1 from './css_tutorials/Layout1';
import AppLayout from './css_tutorials/AppLayout';

import { VerticalSplitter, HorizontalSplitter } from './Splitters/Splitters';

import Splitter from 'm-react-splitters';
import 'm-react-splitters/lib/splitters.css';

import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

import SplitPane from 'react-split-pane';

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

storiesOf('Splitters')
  .add('Basic', () => (
    <div style={{ height: '100%' }}>
      <h1>Splitter Demo</h1>
      <HorizontalSplitter>
        <div>
          <h1>Top</h1>
        </div>
        <VerticalSplitter>
          <div>
            <h1>Left</h1>
          </div>
          <div>
            <h1>Right</h1>
          </div>
        </VerticalSplitter>
      </HorizontalSplitter>
    </div>
  ))
  .add('m-react-splitters', () => (
    <div style={{ height: '100%' }}>
      <h1>m-react-splitter</h1>
      <div style={{ height: '100%', backgroundColor: 'green' }}>
        <Splitter
          position='horizontal'
          primaryPaneMaxHeight='80%'
          primaryPaneMinHeight={0}
          primaryPaneHeight='400px'
          dispatchResize={true}
          postPoned={true}
        >
          <Splitter
            position='vertical'
            primaryPaneMaxWidth='80%'
            primaryPaneMinWidth={0}
            primaryPaneWidth='400px'
            postPoned={false}
          >
            <div />
            <div />
          </Splitter>
          <div />
        </Splitter>
      </div>
    </div>
  ))
  .add('react-splitter-layout', () => (
    <div style={{ height: '100%' }}>
      <h1>react-splitter-layout</h1>
      <div style={{ height: '100%', backgroundColor: 'green' }}>
        <SplitterLayout vertical={true}>
          <div>Pane 1</div>
          <div>Pane 2</div>
        </SplitterLayout>
      </div>
    </div>
  ))
  .add('react-split-pane', () => (
    <div style={{ height: '100%' }}>
      <h1>react-split-pane</h1>
      <div style={{ height: '100%', backgroundColor: 'green' }}>
        <SplitPane split='vertical' minSize={50} defaultSize={100}>
          <div />
          <div />
        </SplitPane>
      </div>
    </div>
  ));

storiesOf('CSS layouts', module)
  .add('Layout1', () => <Layout1 />)
  .add('AppLayout', () => (
    <AppLayout>
      <div style={{ backgroundColor: 'gray' }}>
        <h2>Header</h2>
      </div>
      <div
        style={{ backgroundColor: 'yellow', height: '100%', overflow: 'auto' }}
      >
        <h2>Body</h2>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
        <h1>This is great</h1>
      </div>
      <div style={{ backgroundColor: 'gray' }}>
        <h2>Footer</h2>
      </div>
    </AppLayout>
  ));
