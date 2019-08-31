import React from 'react';

class AppLayout extends React.Component {
  constructor(props) {
    super(props);
    this.headerId = 'romitt_applayout_header';
    this.footerId = 'romitt_applayout_footer';
    this.state = {
      bodyHeight: 0
    };

    this.containerStyle = {
      display: 'flex',
      'flex-direction': 'column',
      alignItems: 'stretch',
      width: '100%',
      height: '100%'
    };
    this.headerStyle = { flexGrow: 0, flexShrink: 0, backgroundColor: 'gray' };
    this.bodyStyle = { flexGrow: 1, flexShrink: 0, backgroundColor: 'yellow' };
    this.footerStyle = { flexGrow: 0, flexShrink: 0, backgroundColor: 'gray' };
  }

  componentDidMount() {
    window.addEventListener('DOMContentLoaded', this.handleResize);
    window.addEventListener('resize', this.handleResize);

    this.header = document.getElementById(this.headerId);
    this.footer = document.getElementById(this.footerId);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('DOMContentLoaded', this.handleResize);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    console.log(this.header);
    if (this.header && this.footer) {
      let newHeight =
        window.innerHeight -
        (this.header.offsetHeight + this.footer.offsetHeight);

      this.setState({ bodyHeight: newHeight });
    }
  };

  render() {
    let header = null;
    let body = null;
    let footer = null;

    if (Array.isArray(this.props.children)) {
      let children = this.props.children;
      switch (this.props.children.length) {
        case 0:
          break;

        case 1:
          body = children[0];
          break;

        case 2:
          header = children[0];
          body = children[1];
          break;

        default:
          header = children[0];
          body = children[1];
          footer = children[2];
          break;
      }
    } else {
      body = this.props.children;
    }

    return (
      <div style={this.containerStyle}>
        <div style={this.headerStyle} id={this.headerId}>
          {header}
        </div>
        <div
          style={{
            ...this.bodyStyle,
            height: '100%',
            overflow: 'auto'
          }}
        >
          {body}
        </div>
        <div style={this.footerStyle} id={this.footerId}>
          {footer}
        </div>
      </div>
    );
  }
}

export default AppLayout;
