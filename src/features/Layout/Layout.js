import React, { useEffect, useContext, useState, useRef } from 'react'
import { NavBar } from '@components/NavBar'
import styled from 'styled-components'
import { NavigationContext } from '@components/Route'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, fireStore } from '@services/firebase'
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore'
import { tasksSelector } from '@state/tasks/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { updateItems } from '@state/tasks'

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

// const useEffectWithIncreasedLength = (dependencies, callback) => {
//   const previousLengthRef = useRef(dependencies.length)

//   useEffect(() => {
//     // Check if the length of the dependencies has increased
//     if (dependencies.length > previousLengthRef.current) {
//       // Execute the callback function
//       callback()
//     }

//     // Update the reference with the current length
//     previousLengthRef.current = dependencies.length
//   }, [dependencies]) // eslint-disable-line react-hooks/exhaustive-deps
// }

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
  const dispatch = useDispatch()
  const previousItems = usePrevious(items)
  const containerRef = useRef(null)
  // useEffectWithIncreasedLength(items, () => {
  //   console.log('items length increased')
  // })

  const signInWithEmailAndPasswordExample = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      // The user is signed in
      const user = userCredential.user

      // You can execute any function here after successful sign-in
      console.log('User signed in:', user.uid)
      setState(user.uid)
    } catch (error) {
      // Handle errors here
      console.error('Sign-in error:', error.message)
    }
  }

  const getUserData = async (uid) => {
    try {
      // get the doc reference {userDoc: {hasLiked: false}}
      const userDocumentRef = doc(fireStore, 'users', uid)
      const docSnapshot = await getDoc(userDocumentRef)

      if (docSnapshot.exists()) {
        const data = docSnapshot.data()
        // return data ? data.hasLiked : null
        dispatch(updateItems(data.items))
      }
    } catch (error) {
      console.log('error getting user data', error)
    }
  }

  const updateUserData = async (uid, items) => {
    try {
      const userDocumentRef = doc(fireStore, 'users', uid)
      const docSnapshot = await getDoc(userDocumentRef)

      if (docSnapshot.exists()) {
        console.log('doc exists for user')
        await updateDoc(userDocumentRef, {
          items,
        })
        dispatch(updateItems(items))
      } else {
        console.log('error updating user doc')
      }
    } catch (error) {}
  }

  useEffect(() => {
    if (!uid) return
    getUserData(uid)
  }, [uid])

  useEffect(() => {
    if (!uid) return
    console.log('items:', items)
    if (items === previousItems) return
    updateUserData(uid, items)
  }, [items, uid])

  useEffect(() => {
    const email = 'vinujithmin@gmail.com'
    const password = 'password123'
    signInWithEmailAndPasswordExample(email, password)
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

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

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
