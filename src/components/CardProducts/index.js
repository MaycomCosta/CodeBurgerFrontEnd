import React from 'react'

import propTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProducts({ product }) {
  const { putProductInCart } = useCart()
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
      </div>
    </Container>
  )
}

CardProducts.propTypes = {
  product: propTypes.object
}
