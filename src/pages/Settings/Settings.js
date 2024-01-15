import React from 'react'
import { SettingsForm } from '@components/SettingsForm'

const defaultCategories = [
  {
    label: 'Personal',
    value: 'personal',
    color: '#f5424b',
  },
  {
    label: 'Work',
    value: 'Work',
    color: '#ff8800',
  },
]

const Settings = () => {
  return <SettingsForm categories={defaultCategories} />
}

export { Settings }
