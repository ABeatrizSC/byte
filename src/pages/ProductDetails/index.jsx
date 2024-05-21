import React from 'react'
import './style.css'
import { useParams } from 'react-router-dom'

export function ProductDetails() {
  const { id } = useParams();
  console.log(id)
  return (
    <>
      <p>Página do produto {id}</p>
    </>
  )
}
