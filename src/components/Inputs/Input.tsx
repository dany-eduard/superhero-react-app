/* eslint-disable no-unused-vars */
import _uniqueId from 'lodash/uniqueId'
import { ChangeEvent } from 'react'
import PropTypes from 'prop-types'

interface InputProps {
  autoComplete?: 'off' | 'on'
  className?: string
  divClass?: string
  id?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  readOnly?: boolean
  resProps?: any
  type?: string
  value: string | number | null | undefined
}

const Input = ({
  autoComplete = 'off',
  className = '',
  divClass = '',
  id = _uniqueId('html-input-'),
  onChange,
  placeholder = '',
  readOnly = false,
  resProps = {},
  type = 'text',
  value,
}: InputProps) => (
  <div className={`input-group ${divClass}`}>
    <input
      autoComplete={autoComplete}
      className={`form-control me-2 ${className}`}
      id={id}
      type={type}
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={onChange}
      {...resProps}
    />
  </div>
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes['string' || 'number'].isRequired,
}

Input.defaultProps = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  divClass: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  resProps: PropTypes.object,
  type: PropTypes.string,
}

export default Input
