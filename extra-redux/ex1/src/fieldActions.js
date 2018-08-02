//Action creator
export function changeValue(e) {
    return {
        type: "VALUE_CHANGED",
        payload: e.target.value //OBS: Dado que vem junto com uma ação
    }
}