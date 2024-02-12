import React, { useEffect, useContext, useState, useRef } from 'react'
import { NavBar } from '@features/NavBar'
import styled from 'styled-components'
import { NavigationContext } from '@components/Route'
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore'
import { tasksSelector } from '@state/tasks/selectors'
import { authSelector } from '@state/auth'
import { useSelector, useDispatch } from 'react-redux'
import { updateItems } from '@state/tasks'
import { listenForAuthChanges } from '@state/auth'
import { getPersistence } from '@state/auth'
import { persistUid } from '@state/auth'
import { loadState } from '@utils/localStorage'

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
  const uid = useSelector(authSelector.uid)
  const dispatch = useDispatch()
  // const previousItems = usePrevious(items)
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

  // useEffect(() => {
  //   if (!!uid) {
  //     console.log('useeffect uid:', uid)
  //     dispatch(getPersistence())
  //   }
  // }, [uid])

  useEffect(() => {
    // try {
    //   let dataString = sessionStorage.getItem('uid')

    //   const data = JSON.parse(dataString)
    //   console.log(data)
    //   if (!!data) {
    //     dispatch(persistUid(data))
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
    const uid = loadState('uid')
    if (!!uid) {
      console.log(uid)
      dispatch(persistUid(uid))
    }
  }, [])

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
