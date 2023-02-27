import React from 'react'

function Show({data}) {
  return (
    <>
    <div className="container">
        <h6>{data.name} </h6> 
        <h6>{data.email} </h6> 
        <h6>{data.tel} </h6> 
        

         
        </div></>
  )
}

export default Show