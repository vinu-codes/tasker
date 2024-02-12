import React, { useEffect, useContext, useState, useRef } from 'react'
import { NavBar } from '@components/NavBar'
import styled from 'styled-components'
import { NavigationContext } from '@components/Route'
import { auth, fireStore } from '@services/firebase'
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore'
import { tasksSelector } from '@state/tasks/selectors'
import { authSelector } from '@state/auth'
import { useSelector, useDispatch } from 'react-redux'
import { updateItems } from '@state/tasks'
import { listenForAuthChanges } from '@state/auth'
import { getPersistence } from '@state/auth'

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: 72px;
`
const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`

const usePrevious = (value) => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef()
  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current
}

const Layout = ({ children, ...props }) => {
  const [currentPath, navigate] = useContext(NavigationContext)
  const [uid, setState] = useState('')
  const isAuth = true
  const items = useSelector(tasksSelector.items)
  const auth = useSelector(authSelector.auth)
  const dispatch = useDispatch()
  const previousItems = usePrevious(items)
  const containerRef = useRef(null)

  // useEffect(() => {
  //   if (!uid) return
  //   getUserData(uid)
  // }, [uid])

  // useEffect(() => {
  //   if (!uid) return
  //   console.log('items:', items)
  //   if (items === previousItems) return
  //   updateUserData(uid, items)
  // }, [items, uid])

  useEffect(() => {
    if (!uid) {
      navigate('/login')
    }
  }, [uid])

  useEffect(() => {
    if (!!uid) {
      console.log('useeffect uid:', uid)
      dispatch(getPersistence())
    }
  }, [uid])

  useEffect(() => {
    const body = document.querySelector('body')
    const top = body.getBoundingClientRect.top + 100
    if (body) {
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      })
    }
  }, [currentPath])

  return (
    <>
      <NavBar />
      <Container ref={containerRef}>
        <LayoutContainer {...props}>{children}</LayoutContainer>
      </Container>
    </>
  )
}

export { Layout }
