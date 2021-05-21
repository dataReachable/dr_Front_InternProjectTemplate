/**
 * @file This is the Home page
 * @date 2021-05-20
 * @author lidaoping
 * @lastModify lidaoping 2021-05-20
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { FC, useRef, useState } from 'react';
import { Button, Col, Input, List, Row, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/rootReducer';
import * as types from "../../Store/TodoList/types";
import * as actions from "../../Store/TodoList/actions";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const HomePage: FC = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/

    // 用于手动控制重新渲染
    const [render, setRender] = useState(false);

    const [nextId, setNextId] = useState<number>(0);
    
    const [selectedTodo, setSelectedTodo] = useState<types.ITodoType | null>(null);

    const addInputRef = useRef<Input>(null);

    const state = useSelector<RootState>(state => state.HomeReducer);

    const dispatch = useDispatch();

    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const addHandle = () => {
        const text: string = addInputRef.current?.state.value;
        if (text == null || text.trim() === '') {
            return message.warning('请输入内容 !');
        }
        dispatch(actions.addAction({
            id: 1,
            text,
            editing: false
        }));
        setNextId(nextId + 1);
    };

    const removeHandle = () => {
        if (selectedTodo == null) {
            return message.warning('请先选中一项 !');
        }
        dispatch(actions.removeAction(selectedTodo));
    };

    const selectedHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedTodo((state as types.ITodoType[])[index]);
    };

    const inputEnterHandle = (e: React.FocusEvent<HTMLInputElement>, id: number) => {
        console.log('inputEnterHandle ===', e);
        const text = e.currentTarget.value;

        if (text == null || text.trim() === '') {
            return message.warning('请输入内容 !');
        }

        dispatch(actions.updateAction({
            id,
            text,
            editing: false
        }));
    };

    const updateTextHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(e);
        setRender(!render);
    };

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div>
            <Row type="flex" justify="center" gutter={15}>
                <Col span={8}>
                    <Input ref={ addInputRef }></Input>
                </Col>
                <Col span={2}>
                    <Button type="primary" onClick={() => addHandle()}>创建</Button>
                </Col>
                <Col span={2}>
                    <Button type="danger" onClick={() => removeHandle()}>删除</Button>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={12}>
                    <List
                        size="small"
                        bordered
                        dataSource={state as types.ITodoType[]}
                        renderItem={(item, index) => (
                            <List.Item 
                                onClick={(e) => selectedHandle(e, index)} 
                                onDoubleClick={(e) => {
                                    updateTextHandle(e);
                                    item.editing = !item.editing
                                }} 
                                key={index}>
                                {
                                    item.editing 
                                    ?
                                        <Input 
                                            defaultValue={item.text} 
                                            onBlur={(e) => {
                                                inputEnterHandle(e, item.id);
                                                item.editing = !item.editing
                                            }}></Input>
                                    :
                                        <div>{item.text}</div>
                                }
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
};
export default HomePage;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
