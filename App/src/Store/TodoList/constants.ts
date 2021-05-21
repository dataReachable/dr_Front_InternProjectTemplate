/**
 * @file todo action type
 * @date 2021-05-20
 * @author lidaoping
 * @lastModify lidaoping 2021-05-20
 */

/**
 * 用于判断对 todo 执行操作的类型
 * @param {string} ADD 增加操作 
 * @param {string} REMOVE 删除操作 
 * @param {string} UPDATE 更新操作 
 */
enum ACTION_TYPE {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    UPDATE = 'UPDATE'
}

export {
    ACTION_TYPE
}