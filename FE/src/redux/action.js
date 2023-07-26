/**
 * @param {*} data
 * @returns {{payload: *, type: string}}
 * Nhận mã code sau khi xác nhận thành công email
 */
export const receiveData = (data) => ({
    type: "RECEIVE_DATA",
    payload: data,
});
export const receiveAccount = (data) => ({
    type: "RECEIVE_ACCOUNT",
    payload: data,
});