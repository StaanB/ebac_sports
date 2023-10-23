import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ProdutosState = {
  itens: Produto[]
}

const initialState: ProdutosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        state.itens.splice(state.itens.indexOf(produto), 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar } = favoritosSlice.actions

export default favoritosSlice.reducer
