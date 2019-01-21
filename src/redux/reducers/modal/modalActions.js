// Types
export const SHOW_MODAL = "SHOW_MODAL";

// Actions
export function showModal(bool) {
  const payload = {showModal: bool }
  const type = SHOW_MODAL
  return {type, payload};
}



