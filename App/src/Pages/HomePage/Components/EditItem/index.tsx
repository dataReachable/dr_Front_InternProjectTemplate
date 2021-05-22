/**
 * @file 这是 HomePage 的私有组件，双击可编辑数据的组件
 * @date 2021-05-22
 * @author lidaoping
 * @lastModify lidaoping 2021-05-22
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { FC, useState } from 'react';
import { Input } from 'antd';
import './style.scss';
import * as types from '../../../../Store/TodoList/types';
import { MessageType, ThenableArgument } from 'antd/lib/message';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */

/**
 * @param {types.ITodoType} data 必须，用于显示和编辑的数据
 * @param {number} index 必须，当前列表中的下标
 * @param {boolean} autoFocus 可选，是否自动获取焦点
 * @param {string} defaultValue 可选，input 输入框的默认文本
 * @param {boolean} defaultEditing 可选，编辑中状态，true 则直接显示 input，false 则显示数据
 * @callback changeEditing 可选，用于自定义改变 editing 的规则
 * @callback changeEditing 必须，编辑完成之后会把编辑后的数据和下标传递给该回调函数
 */
interface IProps {
    data: types.ITodoType;
    index: number;
    autoFocus?: boolean;
    defaultValue?: string;
    defaultEditing?: boolean;
    changeEditing?: (editing: boolean) => boolean;
    onEdited: (item: types.ITodoType, index: number) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const EditItem: FC<IProps> = ({
    data,
    index,
    autoFocus,
    defaultValue,
    defaultEditing,
    changeEditing,
    onEdited,
}): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    // 编辑中状态 true 显示 input，false 显示数据
    const [editing, setEditing] = useState<boolean>(defaultEditing || false);

    // 用于存储编辑输入框的文本
    const [updateInputText, setUpdateInputText] = useState<string>(data.text);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /**
     * 修改输入框文本改变时触发，将输入框的 value 赋值给 addInputText
     * @param {React.ChangeEvent<HTMLInputElement>} e input 中 value 改变的监听事件
     */
    const updateInputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setUpdateInputText(text);
    };

    /**
     * 用于改变 editing ，切换 input 和 数据 的函数
     * @param editing
     * @returns
     */
    const changeEditingHandle = (editing: boolean): void =>
        setEditing(changeEditing ? changeEditing(editing) : !editing);

    // 编辑事件，input 失去焦点或者在 input 中按下 Enter 键就会触发
    const editHandle = (data: types.ITodoType, index: number): void => {
        // 改变 editing 状态
        changeEditingHandle(editing);
        // 将修改输入框中文本赋给 data.text
        data.text = updateInputText;
        onEdited(data, index);
    };

    // input 失去焦点事件
    const blurHandle = (data: types.ITodoType, index: number): void => editHandle(data, index);

    // 在 input 中按下 Enter 的键盘监听事件
    const KeyEnterHandle = (
        e: React.KeyboardEvent<HTMLInputElement>,
        data: types.ITodoType,
        index: number,
    ): void => {
        if (e.key !== 'Enter') {
            return;
        }
        editHandle(data, index);
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div onDoubleClick={() => changeEditingHandle(editing)}>
            <Input
                hidden={!editing}
                autoFocus={autoFocus}
                defaultValue={defaultValue}
                onChange={updateInputChangeHandle}
                onBlur={() => blurHandle(data, index)}
                onKeyUp={(e) => KeyEnterHandle(e, data, index)}
            ></Input>
            <div hidden={editing}>{data.text}</div>
        </div>
    );
};
export default EditItem;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
