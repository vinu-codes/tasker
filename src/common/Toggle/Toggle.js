import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { mbFn, mtFn } from '@common/Theme'
import { colors } from '@common/Theme'

const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${mtFn};
  ${mbFn};
`

const ToggleContent = styled.div`
  position: relative;
  height: 26px;
  width: 42px;
`

const ToggleTitle = styled.span`
  font-size: 16px;
  position: relative;
  color: grey;
  padding-right: 6px;
  font-weight: normal;
  font-size: 16px;
  text-align: right;
  &.is-disabled {
    color: #4d4d4d;
  }
`

const ToggleLabel = styled.label`
  left: 0;
  width: 42px;
  height: 26px;
  position: absolute;
  display: block;
  border-radius: 15px;
  background: #202428;
  border: 1px solid #333b44;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: white;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
const ToggleCheckbox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  position: absolute;
  height: 26px;
  cursor: pointer;
  margin: 0;
  &:checked + .ToggleLabel {
    background: ${colors.rust};
    border: 1px solid ${colors.rust};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

const Toggle = ({
  isActive,
  id,
  className,
  onChange,
  disabled,
  name,
  label,
  ...props
}) => {
  const handleChange = (e) => {
    const value = e.target.checked
    console.log({ value })
    onChange({ name, value })
  }

  return (
    <ToggleWrapper className={className} id={id} {...props}>
      {label && (
        <ToggleTitle className={disabled ? 'is-disabled' : ''}>
          {label}
        </ToggleTitle>
      )}
      <ToggleContent>
        <ToggleCheckbox
          checked={isActive}
          onChange={(e) => handleChange(e)}
          id="checkbox"
          type="checkbox"
        />
        <ToggleLabel className="ToggleLabel" htmlFor="checkbox" />
      </ToggleContent>
    </ToggleWrapper>
  )
}

Toggle.defaultProps = {
  isActive: false,
  onChange: () => {},
  id: '',
  className: '',
  label: '',
}

Toggle.propTypes = {
  isActive: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string,
}

export { Toggle }
