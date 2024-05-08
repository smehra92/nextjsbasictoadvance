import React from 'react'

const ProductPage = ({ params , searchParams }) => {
  return (
    <>
    <div>ProductPage</div>
    <div>{params.slug}</div>
    <div>{searchParams.sortOrder}</div>
    </>
  )
}

export default ProductPage



//URL : http://localhost:3000/querystringparameters/random?sortOrder=abc
//Output : ProductPage
//         random
//         abc



//Note : Here we've used [[]] instead of [] so that we could use empty URL as well.