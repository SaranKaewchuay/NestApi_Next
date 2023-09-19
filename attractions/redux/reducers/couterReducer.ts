
import { INCREMENT_COUTER, DECREMENT_COUTER } from "../actions/couterActions"



const couterReducer = (state = { value: 0 }, actions: any) => {
    switch (actions.key) {
        case INCREMENT_COUTER:
            return {
                ...state,
                value: state.value + 1
            }
        case DECREMENT_COUTER:
            return {
                ...state,
                value: state.value - 1
            }

        default:
            return {
                ...state
            }
    }
}

export default couterReducer
