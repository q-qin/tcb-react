import React from 'react'
import { useHistory } from 'react-router'

export const AuthRoute: React.FC<{}> = () => {
  const publicList = ['/login','/register']
  const history = useHistory()
  const pathname = history.location.pathname

  if (publicList.indexOf(pathname) > -1 ) {
    return null;
  }
  if(!localStorage.getItem('token')){
    history.replace('/login')
  }
  return null
}