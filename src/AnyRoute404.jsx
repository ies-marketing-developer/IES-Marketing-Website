import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AnyRoute404 = () => {
    const navigate = useNavigate()
    useEffect(()=> {
        navigate("/")
    }, [])
  return null;
}

export default AnyRoute404
