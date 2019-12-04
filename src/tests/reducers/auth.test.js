import authReducer from '../../reducers/auth'

test('should store user id correctly', ()=> {
    const action = {
        type: 'LOGIN',
        uid: 1
    }

    const state = authReducer(undefined, action);
    expect(state).toEqual({uid: 1})
})

test('should return empty object', ()=> {
    const action = {
        type: 'LOGOUT'
    }

    const state = authReducer(undefined, action);
    expect(state).toEqual({})
})