import { login, logout } from '../../actions/auth';

test(`Should set up login correctly`, () => {
    const uid = 1
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test(`Should set up logout correctly`, () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})
