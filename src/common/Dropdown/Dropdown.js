import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Wrapper, Group, List, IconContainer, Header } from './Dropdown.styled'
import { Icon } from '@common/Icon'
import { updatedArray, updateSingleSelect } from './utils'
import PropTypes from 'prop-types'

const keyCodes = {
  ENTER: 'Enter',
}

const getSelectedItem = (options) => {
  const result = options.find((option) => !!option.active)
  return !!result ? result.label : ''
}

const Dropdown = ({ options, callback, name, isMulti, ...props }) => {
  const ref = useRef(null)
  const iRuffu = useRef([])
  const elementRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(getSelectedItem(options))

  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
    // eslint-disable-next-line
  }, [escFunction])

  useEffect(() => {
    const callback = (e) => {
      const target = e.target
      const wrapperRef = ref.current
      if (wrapperRef && !wrapperRef.contains(target)) {
        setIsOpen(false)
      }
    }
    const body = document.querySelector('body')
    body.addEventListener('click', callback)

    return () => {
      body.removeEventListener('click', callback)
    }
    // eslint-disable-next-line
  }, [])

  iRuffu.current =
    !!options &&
    options.length &&
    options.map((option, index) =>
      iRuffu.current[index] ? iRuffu.current[index] : React.createRef()
    )

  const onKeyDown = (e) => {
    const key = e.keyCode || e.charCode
    if (key === keyCodes.ENTER || key === 13) {
      if (isOpen) {
        setIsOpen(false)
        return
      }
      setIsOpen(true)
      return
    }
    if (isOpen) {
      if (key === '40' || key === 40) {
        // what is the ?. in javascript ? it's called optional chaining
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

        if (iRuffu && iRuffu?.current[0]) {
          iRuffu.current[0].current.focus()
        }
      }
    }
  }

  const handleSelect = (selectedOption) => {
    if (!isMulti) {
      setSelected(selectedOption.label)
      const payload = updateSingleSelect(selectedOption, options)
      // the value is an array with the active keys representing if it was selected
      callback({ name, value: payload })
      setIsOpen(false)
      return
    }
    const payload = updatedArray(selectedOption, options)
    callback({ name, value: payload })
  }

  const renderOptions = () => {
    if (!options || !options.length) return null
    const result = options.map((option, index) => (
      <List
        key={option.label}
        onClick={() => handleSelect(option)}
        ref={iRuffu.current[index]}
        onKeyDown={(e) => console.log(e)}
        tabIndex={0}
      >
        <IconContainer mr={8}>
          <Icon name={option.active ? 'CHECKBOX_FILLED' : 'CHECKBOX'} />
        </IconContainer>
        <span>{option.label}</span>
      </List>
    ))

    return (
      <Group
        style={{
          top: elementRef.current ? elementRef.current.offsetHeight : '54px',
        }}
        isActive={isOpen}
      >
        {result}
      </Group>
    )
  }

  if (!options || !options.length) return null
  return (
    <Wrapper ref={ref} mt={props.mt} tabIndex={0} onKeyDown={onKeyDown}>
      <Header
        ref={elementRef}
        isActive={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{!!selected ? selected : 'Select an option'}</span>
        <IconContainer className="IconContainer">
          <Icon name="CHEVRON" size={24} />
        </IconContainer>
      </Header>
      {renderOptions()}
    </Wrapper>
  )
}

Dropdown.defaultProps = {
  options: [],
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  isMulti: PropTypes.bool,
  callback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}
export { Dropdown }
