/**
 * @file HomePage组件
 * @date 2022-3-29
 * @author  张明舟
 * @lastModify  2022-3-31
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Row, Col, Button, Input, List, message, InputRef, Spin } from 'antd';
import React, { FC, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/Store/rootReducer';
import * as types from '~/Store/HomePage/types';
import * as actions from '~/Store/HomePage/actions';
import style from './style.scss';
import { useEffect } from 'react';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const HomePage: FC = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const homepageState = useSelector((state: RootState) => state.homePageReducer);
    const dispatch = useDispatch();
    /**
     * 列表项编辑输入框节点ref
     */
    const listItemInputRef = useRef<InputRef>(null);
    /**
     * 加载状态
     * */
    const [loading, setLoading] = useState(false);
    /**
     * 输入框值
     */
    const [inputValue, setInputValue] = useState('');
    /**
     * 高亮节点
     */
    const [currentNode, setCurrentNode] = useState<types.ListItemType | null>(null);
    /**
     * 双击列表项时 聚焦列表项编辑输入框
     */
    useEffect(() => {
        setLoading(false);
        listItemInputRef.current?.focus();
    }, [homepageState]);
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /**
     * 新增元素方法 参数类型
     */
    type modeType = 'sync' | 'async';
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /**
     * 元素是否存在
     * @param {Array<types.ListItemType>} parent 父元素
     * @param {types.ListItemType | null} child 子元素
     */
    const isExist = (
        parent: Array<types.ListItemType>,
        child: types.ListItemType | null,
    ): boolean => {
        return Boolean(parent.find((item) => item.id === child?.id));
    };
    /**
     * 新增元素事件
     * @param {modeType} mode 操作类型 sync为同步操作 async为异步操作
     */
    const handleAddElement = (mode: modeType) => {
        const newElement = {
            id: Date.now(),
            value: inputValue,
            edit: false,
        };
        if (inputValue) {
            setCurrentNode(newElement);
            if (mode === 'sync') {
                dispatch(actions.dispatchCreateElement(newElement));
            } else {
                setLoading(true);
                dispatch(actions.dispatchCreateElementAsync(newElement));
            }
        } else {
            void message.warning('请输入值');
        }
    };
    /**
     * 删除元素事件
     * @param {modeType} mode 操作类型 sync为同步操作 async为异步操作
     */
    const handleDelElement = (mode: modeType) => {
        let flag = false;
        flag = isExist(homepageState, currentNode);
        if (flag && currentNode) {
            if (mode === 'sync') {
                dispatch(actions.dispatchDelElement(currentNode));
            } else {
                setLoading(true);
                dispatch(actions.dispatchDelElementAsync(currentNode));
            }
        } else {
            void message.warning('请先选中元素，再删除');
        }
    };
    /**
     * 输入框 change 事件
     * @param even 每次输入框变化时的事件对象
     */
    const handleInputChange = (even: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(even.target.value);
    };
    /**
     * 列表项点击事件
     * @param item 当前点击列表项数据
     */
    const handleListItemClick = (item: types.ListItemType) => {
        setCurrentNode(item);
    };
    /**
     * 列表项双击事件 列表切换为输入框
     * @param item 当前点击列表项数据
     */
    const handleListItemDoubleClick = (item: types.ListItemType) => {
        const temp = { ...item };

        temp.edit = true;
        setCurrentNode(item);
        dispatch(actions.dispatchUpdateElement(temp));
    };
    /**
     * 列表项输入框失去焦点事件 列表切换为输入框
     * @param item 当前点击列表项数据
     */
    const handleListItemInputBlur = (item: types.ListItemType) => {
        const temp = { ...item };
        if (typeof listItemInputRef.current?.input?.value === 'string') {
            temp.value = listItemInputRef.current.input.value;
        }
        temp.edit = false;
        setCurrentNode(item);
        dispatch(actions.dispatchUpdateElement(temp));
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.homePage_wrapper}>
            <Row gutter={10}>
                <Col span={6}>
                    <Input
                        placeholder="请输入"
                        defaultValue={inputValue}
                        onChange={handleInputChange}
                    ></Input>
                </Col>
                <Col span={6}>
                    <Button
                        style={{ marginRight: 10 }}
                        type="primary"
                        loading={loading}
                        onClick={() => handleAddElement('sync')}
                    >
                        创建
                    </Button>
                    <Button
                        style={{ marginRight: 10 }}
                        type="primary"
                        loading={loading}
                        onClick={() => handleAddElement('async')}
                    >
                        异步创建
                    </Button>
                    <Button
                        style={{ marginRight: 10 }}
                        type="primary"
                        loading={loading}
                        danger
                        onClick={() => handleDelElement('sync')}
                    >
                        删除
                    </Button>
                    <Button
                        type="primary"
                        loading={loading}
                        danger
                        onClick={() => handleDelElement('async')}
                    >
                        异步删除
                    </Button>
                </Col>
            </Row>
            <Spin spinning={loading}>
                <List
                    className={style.homePage_list}
                    bordered
                    dataSource={homepageState}
                    renderItem={(item) => (
                        <List.Item
                            className={
                                currentNode?.id === item.id ? style.homePage_list__active : ''
                            }
                            onDoubleClick={() => handleListItemDoubleClick(item)}
                            onClick={() => handleListItemClick(item)}
                            key={item.id}
                        >
                            {item.edit ? (
                                <Input
                                    ref={listItemInputRef}
                                    placeholder="请输入"
                                    defaultValue={item.value}
                                    onBlur={() => handleListItemInputBlur(item)}
                                ></Input>
                            ) : (
                                item.value
                            )}
                        </List.Item>
                    )}
                />
            </Spin>
        </div>
    );
};
export default HomePage;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
