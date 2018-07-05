import {Map} from 'immutable'
const MOVE = 'MOVE'

let board = Map()

export default function reducer(state = {board: board, turn: 'X'}, action) {
  if (action.type === MOVE) {
    return { board: state.board.setIn(action.position, action.player), turn: action.player==="X" ? 'O': 'X'}
  }
   return state
}

export const move = function (player, position) {
    return {type: MOVE, player, position}
}
