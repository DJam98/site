/**
 * Create context provider
 */
import React, { useState, useEffect } from "react"

import DBContext from "src/context/DBContext"
// import { db } from "../apps"
import { handleLogin, handleSignup, getUser, userSignedUp } from "./db"

const DBProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)
  const [signedUp, setSignedUp] = useState()

  useEffect(() => {
    userSignedUp().then(result => {
      setSignedUp(result)
    })
  }, [])
  useEffect(() => {
    getUser()
      .get()
      .then(doc => {
        setUser(doc.data())
      })
  }, [])

  if (user === undefined) {
    return <></>
  }
  return (
    <DBContext.Provider value={{ handleLogin, handleSignup, user, signedUp }}>
      {children}
    </DBContext.Provider>
  )
}

export { DBProvider }