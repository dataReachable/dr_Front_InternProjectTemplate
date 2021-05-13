/**
 * @file
 * @date 2021/05/12 15:52
 * @author xiongwen
 * @lastModify xiongwen 2021/--/-- --:--
 */

import React from 'react';

import { RootState } from "../../../../Store/rootReducer";
import * as actions from "../../../../Store/TodoList/actions";
import { useDispatch, useSelector } from 'react-redux';

import { Input, List } from 'antd';

import style from './style.scss';

/**
 * 定义一个 Button 组件
 * @returns {JSX.Element} - 返回值
 */
const UlShowTodoListItems = ():JSX.Element => {
    /**
     * 获取状态
     */
    const toDoListState = useSelector(
        (state: RootState) => state.TodoListReducer
    );
    /**
     * 获取 dispatch 方法
     */
    const dispatch = useDispatch();
    
    return <List
                bordered
                dataSource={toDoListState.items}
                renderItem={(item, index) => {
                    if (toDoListState.selected === index && toDoListState.editable) {
                        return (
                            <List.Item 
                                key={item} 
                                tabIndex={0}
                                className={style.item}
                            >
                                <Input 
                                    type="text" 
                                    value={item}
                                    data-value={item}
                                    onBlur={() => dispatch(actions.toggleEditableAction())}
                                    autoFocus
                                    onChange={(event) => dispatch(actions.itemValueChangeAction(event.target.value))}
                                    spellCheck={false}
                                />
                            </List.Item>
                        );
                    } else {
                        return (
                            <List.Item 
                                key={item} 
                                tabIndex={0}
                                data-index={index}
                                onFocus={event => dispatch(actions.selectedNewItemAction(Number(event.target.dataset.index)))}
                                className={style.item}
                                onDoubleClick={() => dispatch(actions.toggleEditableAction())}
                            >
                                {item}
                            </List.Item>
                        )
                    }
                }}
            />
}

export default UlShowTodoListItems;