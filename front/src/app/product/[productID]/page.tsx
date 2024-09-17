import ProductDetail from '@/views/ProductDetail/ProductDetail'
import React from 'react'

const Detail:React.FC <{params: {productID: string}}>= ({params}) => {
  return (
    <ProductDetail />
  )
}

export default Detail