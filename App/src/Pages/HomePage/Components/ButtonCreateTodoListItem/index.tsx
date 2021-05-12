/**
 * @file
 * @date 2021/05/12 15:52
 * @author xiongwen
 * @lastModify xiongwen 2021/--/-- --:--
 */

import React from 'react';

import * as actions from "../../../../Store/TodoList/actions";
import { useDispatch } from 'react-redux';

import { Button } from 'antd';

/**
 * 定义一个 Button 组件
 * @returns {JSX.Element} - 返回值
 */
const ButtonCreateTodoListItem = ():JSX.Element => {
    /**
     * 获取 dispatch 方法
     */
    const dispatch = useDispatch();
    return (
        <Button
            type="primary"
            onClick={() => dispatch(actions.createTodoListItemAction())}>
            Create
        </Button>
    );
}

export default ButtonCreateTodoListItem;