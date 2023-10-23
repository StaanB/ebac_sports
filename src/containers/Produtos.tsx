import { useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

import { RootReducer } from '../redux/store'
import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const { data: produto, isLoading } = useGetProdutosQuery()

  if (isLoading) {
    return <h2>Carregando...</h2>
  }

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produto?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
