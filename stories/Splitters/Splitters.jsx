import React from 'react';
import styles from './Splitters.module.scss';

export class HorizontalSplitter extends React.Component {
  state = {
    bottomStyle: { height: 500 }
  };

  handleMouseDown = e => {
    console.log('onMouseDown:', e);
    e.preventDefault();
  };

  handleMouseMove = e => {
    e.preventDefault();
  };

  handleMouseUp = e => {
    console.log('onMouseUp');
    e.preventDefault();
  };

  render() {
    let top = 'Invalid Element';
    let bottom = 'Invalid Element';
    const { children } = this.props;

    if (Array.isArray(children)) {
      if (children.length === 2) {
        top = children[0];
        bottom = children[1];
      }
    }

    return (
      <div className={styles.horizontalSplitter}>
        <div style={{ height: '100%' }}>{top}</div>
        <div
          className={styles.resizeBar}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
        >
          ResizeBar
        </div>
        <div style={this.state.bottomStyle}>{bottom}</div>
      </div>
    );
  }
}

export class VerticalSplitter extends React.Component {
  handleMouseDown = e => {
    console.log('onMouseDown:', e);
    e.preventDefault();
  };

  handleMouseMove = e => {
    e.preventDefault();
  };

  handleMouseUp = e => {
    console.log('onMouseUp');
    e.preventDefault();
  };

  render() {
    let left = 'Invalid Element';
    let right = 'Invalid Element';
    const { children } = this.props;

    if (Array.isArray(children)) {
      if (children.length === 2) {
        left = children[0];
        right = children[1];
      }
    }

    return (
      <div
        className={styles.verticalSplitter}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      >
        <div style={{ width: '100%' }}>{left}</div>
        <div className={styles.resizeBar}>ResizeBar</div>
        <div style={{ width: '400px' }}>{right}</div>
      </div>
    );
  }
}
