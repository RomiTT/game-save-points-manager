import React from 'react';

export class NavBar extends React.Component {
  containerStyle = {
    display: 'flex',
    alignItems: 'stretch',
    backgroundColor: '#f1f1f1'
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={{ ...this.props.style, ...this.containerStyle }}
      >
        {this.props.children}
      </div>
    );
  }
}

export class NavBarLeftItem extends React.Component {
  itemStyle = {
    backgroundColor: 'DodgerBlue',
    color: 'white',
    margin: '10px',
    textAlign: 'center',
    lineHeight: '75px',
    fontSize: '30px',
    flexGrow: 1
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={{ ...this.props.style, ...this.itemStyle }}
      >
        <div style={{ float: 'left' }}>{this.props.children}</div>
      </div>
    );
  }
}

export class NavBarCenterItem extends React.Component {
  itemStyle = {
    backgroundColor: 'DodgerBlue',
    color: 'white',
    margin: '10px',
    textAlign: 'center',
    lineHeight: '75px',
    fontSize: '30px',
    flexGrow: 1
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={{ ...this.props.style, ...this.itemStyle }}
      >
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export class NavBarRightItem extends React.Component {
  itemStyle = {
    backgroundColor: 'DodgerBlue',
    color: 'white',
    margin: '10px',
    textAlign: 'center',
    lineHeight: '75px',
    fontSize: '30px',
    flexGrow: 1
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={{ ...this.props.style, ...this.itemStyle }}
      >
        <div style={{ float: 'right' }}>{this.props.children}</div>
      </div>
    );
  }
}
