import React from 'react';

const withItemSelection = (Wrapped, initialId = 0) =>
  class WithItemSelection extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        selectedId: initialId
      };
      this._handleChangeSelectedId = this._handleChangeSelectedId.bind(this);
    }
    _handleChangeSelectedId(callback, selectedId) {
      callback();
      this.setState(() => ({selectedId}));
    }

    render() {
      return <Wrapped {...this.props}
        selectedId={this.state.selectedId}
        handleChangeSelectedId={this._handleChangeSelectedId} />;
    }
  };

export default withItemSelection;
