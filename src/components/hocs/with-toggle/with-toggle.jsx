import React from "react";

const withToggle = (Wrapped) =>
  class WithOpen extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
      this._handleToggleOpen = this._handleToggleOpen.bind(this);
    }

    _handleToggleOpen() {
      this.setState(() => ({isOpen: !this.state.isOpen}));
    }
    render() {
      return <Wrapped {...this.props}
        isOpen={this.state.isOpen}
        handleToggleOpen={this._handleToggleOpen}/>;
    }
  };

export default withToggle;
