
// import Actions Types
import {
  SHOW_MODAL,
} from './modalActions';

// Initial State
const initialState = {
  showModal: false,
}

// Reducer
export default function (state = initialState, action) {
  switch (action.type) {
      case SHOW_MODAL:
          return Object.assign({}, state,  action.payload )
      default:
          return state;
  }
}