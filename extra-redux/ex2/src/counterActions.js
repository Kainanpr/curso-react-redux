//Primeiro arquivo criado -> OBS:(3 funções que são Actions Creator)
export function inc() {
  return {
    type: 'INC'
  }
}

export function dec() {
  return {
    type: 'DEC'
  }
}

export function stepChanged(e) {
  return {
    type: 'STEP_CHANGED',
    payload: e.target.value
  }
}