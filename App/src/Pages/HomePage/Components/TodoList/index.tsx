/**
 * @file TodoList Components
 * @date 2021-05-20
 * @author 周成志
 * @lastModify 周成志 2021-05-20
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { FC, Fragment, useRef, useState } from 'react';
import { Row, Col, Radio, Button, Input, notification } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as types from '../../../../Store/TodoList/actionTypes';
import * as actions from '../../../../Store/TodoList/actions';
import { RootState } from '../../../../Store/rootReducer';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TodoList: FC = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Fragment>
            <TdInput />
            <TdList />
        </Fragment>
    );
};
export default TodoList;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TdInput: FC = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    const inputRef = useRef<Input>(null);
    const dispatch = useDispatch();
    const { todoList } = useSelector((state: RootState) => {
        const todoListReducer: types.TodoListReducer = state['todoListReducer'];
        return {
            todoList: todoListReducer.todoList,
        };
    }, shallowEqual);
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /**
     * 添加一个待办项，如果输入的待办项为空或者已存在，则会发出弹窗警告
     */
    const addTodoItem = (): void => {
        let val: string = inputRef.current?.state.value;
        val = val.trim();
        if (val.length != 0) {
            if (!todoList.find((todo) => todo.content === val)) {
                dispatch(
                    actions.addTodoItemAction({
                        id: new Date().getTime(),
                        content: val,
                        completed: false,
                    }),
                );
                inputRef.current!.setValue('');
            } else {
                notification['error']({
                    message: '代办项冲突',
                    description: `"${val}"待办项已存在，请重新输入！`,
                });
            }
        } else {
            notification['error']({
                message: '代办项输入错误',
                description: `待办项不能为空！`,
            });
        }
    };
    /**
     * 删除当前的待办项
     */
    const removeTodoItems = (): void => {
        todoList.forEach((todo) => {
            if (todo.completed) {
                dispatch(actions.removeTodoItemsAction(todo.id));
            }
        });
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row type="flex" gutter={[10, 10]} justify="center" align="middle">
            <Col span={6}>
                <Input ref={inputRef} placeholder="请输入代办事项..." />
            </Col>
            <Col span={2}>
                <Button onClick={addTodoItem}>添加</Button>
            </Col>
            <Col span={2} onClick={() => removeTodoItems()}>
                <Button type="danger">删除</Button>
            </Col>
        </Row>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TdList: FC = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const { todoList } = useSelector((state: RootState) => {
        const todoListReducer: types.TodoListReducer = state['todoListReducer'];
        return {
            todoList: todoListReducer.todoList,
        };
    }, shallowEqual);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Fragment>
            {todoList &&
                todoList.map((todo: types.TodoType) => <TdItem key={todo.id} todo={todo} />)}
        </Fragment>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */

/** This section will include all the interface for this tsx file */
interface IdItemPropTypes {
    todo: types.TodoType;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TdItem: FC<IdItemPropTypes> = ({ todo }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [update, setUpdate] = useState(false);
    const [val, setVal] = useState(todo.content);
    const inputRef = useRef<Input>(null);
    const dispatch = useDispatch();
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /**
     * 改变待办项的完成状态
     * @param {number} id 待办项的唯一id
     */
    const changeTodoComplete = (id: number): void => {
        dispatch(actions.changeTodoCompleteAction(id));
    };
    /**
     * 删除待办项
     * @param {number} id 待办项的唯一id
     */
    const removeTodoItem = (id: number): void => {
        dispatch(actions.removeTodoItemsAction(id));
    };
    /**
     * 更改待办项的内容
     * @param {number} id 待办项的唯一id，如果val为空，则弹出警告
     * @param {string} val 更改后的待办项内容
     */
    const changeTodoItemCotent = (id: number, val: string): void => {
        if (val.trim().length) {
            dispatch(
                actions.changeTodoContentAction({
                    id: id,
                    content: val.trim(),
                    completed: todo.completed,
                }),
            );
            setUpdate(false);
        } else {
            notification['error']({
                message: '代办项输入错误',
                description: `待办项不能为空！`,
            });
        }
    };
    /**
     * 展示没有进行修改时的待办项组件
     * @returns {JSX.Element} 没有进入修改状态的待办项组件
     */
    const showNormalItem = (): JSX.Element => {
        return (
            <Fragment>
                <Col span={1}>
                    <Radio
                        checked={todo.completed}
                        onClick={() => {
                            changeTodoComplete(todo.id);
                        }}
                    />
                </Col>
                <Col
                    span={7}
                    style={{ textAlign: 'center' }}
                    onDoubleClick={() => {
                        setVal(todo.content);
                        setUpdate(!update);
                    }}
                >
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.content}
                    </span>
                </Col>
                <Col span={2}>
                    <Button type="dashed" onClick={() => removeTodoItem(todo.id)}>
                        Delete
                    </Button>
                </Col>
            </Fragment>
        );
    };
    /**
     * 展示正在进行修改时的待办项组件
     * @returns {JSX.Element} 正在修改状态的待办项组件
     */
    const showChangeItem = (): JSX.Element => {
        return (
            <Fragment>
                <Col span={8}>
                    <Input ref={inputRef} value={val} onChange={(e) => setVal(e.target.value)} />
                </Col>
                <Col span={2}>
                    <Button type="dashed" onClick={() => changeTodoItemCotent(todo.id, val)}>
                        修改
                    </Button>
                </Col>
            </Fragment>
        );
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row type="flex" align="middle" gutter={[10, 10]} justify="center">
            {update ? showChangeItem() : showNormalItem()}
        </Row>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
