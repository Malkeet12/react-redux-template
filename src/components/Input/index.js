import React from 'react'
import './index.scss'

const Input = props => {
  let className = 'custom-input-container',
    { onChange, onKeyPress, label, value, type, readOnly, placeholder, disabled, noBorder, required, onBlur, onFocus } = props

  let addClass = classToAdd => {
    className += ' ' + classToAdd
  }

  if (props.className) {
    addClass(props.className)
  }

  if (noBorder) addClass('no-border')

  return (
    <div className={className} data-layout={'column'}>
      {label ? <div className={'input-label'}>{label}</div> : ''}
      <input
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        readOnly={readOnly}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={onFocus}
      />
    </div>
  )
}

export default Input
