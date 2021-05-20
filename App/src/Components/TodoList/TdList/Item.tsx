/**
 * @file TdItem
 * @date 2021-05-20
 * @author 周成志
 * @lastModify 周成志 2021-05-20
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { FC, Fragment, useRef, useState } from 'react';
import { Row, Col, Radio, Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import * as types from '../../../Store/TodoList/actionTypes';
import * as actions from '../../../Store/TodoList/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface PropTypes {
    todo: types.TodoType;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TdItem: FC<PropTypes> = ({ todo }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const inputRef = useRef<Input>(null);
    const dispatch = useDispatch();
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const [update, setUpdate] = useState(false);
    const [val, setVal] = useState(todo.content);
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    function changeTodoComplete(id: number) {
        dispatch(actions.changeTodoCompleteAction(id));
    }
    function removeTodoItem(id: number) {
        dispatch(actions.removeTodoItemsAction(id));
    }
    function changeTodoItemCotent(id: number, val: string) {
        if (val.trim().length) {
            dispatch(
                actions.changeTodoContentAction({
                    id: id,
                    content: val.trim(),
                    completed: todo.completed,
                }),
            );
            setUpdate(false);
        }
    }
    function showNormalItem() {
        return (
            <Fragment>
                <Col span={1}>
                    <Radio checked={todo.completed} />
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
    }
    function showChangeItem() {
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
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row
            type="flex"
            align="middle"
            gutter={[10, 10]}
            justify="center"
            onClick={() => {
                changeTodoComplete(todo.id);
            }}
        >
            {update ? showChangeItem() : showNormalItem()}
        </Row>
    );
};
export default TdItem;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
