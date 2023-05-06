export function fetchData(data) {
    return async (dispatch) => {
        dispatch({
            type: 'SET_DATA',
            payload: data,
        })
    }
}
  