import {TimelineLite} from 'gsap';

// Types
export const SHOW_MODAL = "SHOW_MODAL";

// Actions
export function showModal(bool) {
  if (bool){
    let tl = new TimelineLite();
    tl.to(".Modal", 0 , {display:'grid'})
    tl.to(".Modal", .25 , {opacity: 1})
  } else {
    let tl = new TimelineLite();
    tl.to(".Modal", .25 , {opacity: 0})
    tl.to(".Modal", 0 , {display:'none', delay:1})
  }

  const payload = {showModal: bool }
  const type = SHOW_MODAL
  return {type, payload};
}



