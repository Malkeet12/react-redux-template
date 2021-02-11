import React, { Component } from 'react'
import './index.scss'
import Dialog from 'components/Dialog'
import Button from 'components/Button'
import CrossIcon from 'icons/cross'

export default class Confirm extends Component {
  render() {
    let { className, trigger, show, onClose, onConfirm, headerText, msgText, closeButtonText, confirmButtonText } = this.props
    return (
      <div id={'confirm-dialog'} className={className}>
        <Dialog trigger={trigger} open={show} lockScroll={true} closeOnDocumentClick={false} onModalClose={onClose} modal>
          <header>{headerText}</header>
          <span className="close-dialog" onClick={onClose}>
            <CrossIcon />
          </span>
          <p>{msgText}</p>
          <div className="btn-container" data-layout="row" data-layout-align="end center">
            {/* <Button label={closeButtonText} onClick={onClose} medium round outlined /> */}
            <Button label={confirmButtonText} onClick={onConfirm} medium round />
          </div>
        </Dialog>
      </div>
    )
  }
}
