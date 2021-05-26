/**
 * @file 这是 HomePage
 * @date 2021-05-22
 * @author lidaoping
 * @lastModify lidaoping 2021-05-22
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect, useState } from 'react';
import { Row, Col, Input, Button, List, message } from 'antd';
import EditItem from './Components/EditItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/rootReducer';
import * as types from '../../Store/TodoList/types';
import {
    addAction,
    removeAction,
    removeActionAsync,
    updateAction,
} from '../../Store/TodoList/actions';
import './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const HomePage = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    // 获取 TodoListReducer 中返回的 state
    const state = useSelector<RootState, types.ITodoType[]>((state) => state.TodoListReducer);

    // 获取 ITodoActionType 类型的 dispatch
    const dispatch = useDispatch();

    // 添加输入框的文本内容
    const [addInputText, setAddInputText] = useState<string>('');

    // 当前选中的列表下标
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);

    // 当用户选中一个 List.Item 时，点击删除按钮之后，如果当前选中下标小于当前数组最后一个元素下标，则让 selectedIndex 等于数组最后元素下标
    useEffect(() => {
        // 如果执行删除操作导致数组长度变得比当前选中还小，则让当前选中的数字变成数组最后一个的下标位置
        // 如果 state.length 变成 0 了，那么 selectedIndex 自然就变成了 -1
        if (selectedIndex > state.length - 1) {
            setSelectedIndex(state.length - 1);
        }
    }, [state]);

    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /**
     * 添加输入框文本改变时触发，将输入框的 value 赋值给 addInputText
     * @param {React.ChangeEvent<HTMLInputElement>} e input 中 value 改变的监听事件
     */
    const handleAddInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setAddInputText(e.target.value);

    /**
     * 添加按钮的监听事件
     */
    const handleAddButton = () => {
        // 如果输入框内容为空，则提示用户输入内容
        if (addInputText.trim() === '') {
            message.warn('请输入内容 !').then(
                (val) => console.log('val ==', val),
                (val) => console.log('val ==', val),
            );
            return;
        }
        // 发送 添加 action
        dispatch(
            addAction({
                id: -1,
                text: addInputText,
            }),
        );
        // 将输入框文本清空
        setAddInputText('');
    };

    /**
     * 删除按钮的监听事件
     * 发送 删除 action
     */
    const handleRemoveButton = () => {
        if (selectedIndex === -1) {
            message.warn('请先选择其中一项 !').then(
                (val) => console.log('val ==', val),
                (val) => console.log('val ==', val),
            );
            return;
        }
        // dispatch(removeAction(state[selectedIndex].id));
        dispatch(removeActionAsync(state[selectedIndex].id));
    };

    /**
     * List.Item 的点击事件，点击选中，如果再次点击同一个则取消选中
     * 如果当前选中的下标 selectedIndex 和点击元素的 index，不相等，则改变 selectedIndex，否则相等的则取消选中，变为 -1
     * @param index 点击选中的列表子项的索引
     */
    const selectedHandle = (index: number) =>
        setSelectedIndex(selectedIndex !== index ? index : -1);

    /**
     * input 失去焦点或 Enter 修改事件
     * @param data input 失去焦点或 Enter 修改后的数据
     * @param index 修改数据的下标
     */
    const handleEdit = (data: types.ITodoType, index: number) => dispatch(updateAction(data));
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div>
            <Row type="flex" justify="center" gutter={[0, 20]}>
                <Col span={8}>
                    <Input onChange={(e) => handleAddInputChange(e)} value={addInputText}></Input>
                </Col>
                <Col span={2}>
                    <Button type="primary" block={true} onClick={() => handleAddButton()}>
                        创建
                    </Button>
                </Col>
                <Col span={2}>
                    <Button
                        type="danger"
                        disabled={state.length === 0}
                        block={true}
                        onClick={() => handleRemoveButton()}
                    >
                        删除
                    </Button>
                </Col>
            </Row>
            <Row type="flex" justify="center" gutter={[0, 20]}>
                <Col span={12}>
                    <List
                        bordered
                        dataSource={state}
                        renderItem={(item, index) => (
                            <List.Item
                                className={selectedIndex === index ? 'li_selected' : ''}
                                key={index}
                                onClick={() => selectedHandle(index)}
                            >
                                <EditItem
                                    data={item}
                                    index={index}
                                    defaultValue={item.text}
                                    onEdited={handleEdit}
                                />
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
