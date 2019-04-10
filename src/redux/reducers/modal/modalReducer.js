
// import Actions Types
import {
  SHOW_MODAL,
} from './modalActions';

// Initial State
const initialState = {
  showModal: false,
  id:0,
  title: "Paint Your Pixture",
  directory:"PaintYourPixture",
  contentImages: ["PaintYourPixture.jpg","PaintYourPixture.jpg","PaintYourPixture.jpg","PaintYourPixture.jpg"],
  coverImage: "PaintYourPixture_cover.JPG",
  links: [
      {"title": "site", "link": "www.google.com"},
      {"title": "github", "link": "www.google.com"}
  ],
  description: "This was a challenge to take a static images from designer to functional site.",
  tags: ["react", "redux", "css"]
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