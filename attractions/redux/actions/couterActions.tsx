//Action type

export const INCREMENT_COUTER = `INCREMENT_COUTER`
export const DECREMENT_COUTER = `DECREMENT_COUTER`


//Action create


export const incrementCouter = () => ({
    type: INCREMENT_COUTER
})


export const decrementCouter = () => ({
    type: DECREMENT_COUTER
})