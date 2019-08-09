export const ALL_CHANNELS = 'ALL_CHANNELS'

export function allChannels (payload) {
  return {
    type: ALL_CHANNELS,
    payload
  }
}

export const SET_NAME = 'SET_NAME'

export function setUser (payload) {
  return {
    type: SET_NAME,
    payload
  }
}