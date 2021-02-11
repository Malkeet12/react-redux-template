import React, { Component, Fragment as F } from 'react'
import SnackBar from 'components/SnackBar'

class GlobalUiComponents extends Component {


  render() {
    const {
      snackbar,
      hideSnackbar,
    } = this.props
    return (
      <F>
        <div>{snackbar && snackbar.show ? <SnackBar msg={snackbar.msg} type={snackbar.type} onHide={hideSnackbar} /> : ''}</div>
      </F>
    )
  }
}

export default GlobalUiComponents
