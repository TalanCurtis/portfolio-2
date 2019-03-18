
// import Actions Types
import {
  SHOW_MODAL,
} from './modalActions';

// Initial State
const initialState = {
  showModal: false,
  header: "Test Modal Header",
  body: ["PaintYourPixture.jpg","PaintYourPixture.jpg","PaintYourPixture.jpg","kronk.mp4"],
  footer: [{title:"github", link:"www.google.com"}, {title:"site", link:"www.google.com"}],
  activeProject: "PaintYourPixture",
  description: "test description"
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