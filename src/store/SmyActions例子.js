// import * as TYPE from './myTypes'
import {ADD, MINUS} from './SmyTypes例子'

export default {
    [ADD] (context,n) {
        context.commit(ADD, n)
    },
    [MINUS] ({commit},payload) {
        commit(MINUS, payload)
    }
}