/**
 * @file
 * @date 2020-12-01
 * @author
 * @lastModify  2020-12-01
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Row, Col, Button, Input, List } from 'antd';
import 'antd/dist/antd.css';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/Store/rootReducer';
import { InputRef } from 'antd';
import { addItemAction, deleteItemAction, updateItemAction } from '~/Store/HomePage/actions';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const HomePage = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [inputValue, setInputValue] = useState('');
    const [editValue, setEditValue] = useState('');
    const [itemID, setItemID] = useState(-1);
    const [currentEditId, setCurrentEditId] = useState(-1);
    const textInput = useRef<InputRef>(null);
    const editInput = useRef<InputRef>(null);
    const dispatch = useDispatch();
    const result = useSelector((state: RootState) => {
        return state.HomePageReducer;
    });
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/

    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ---s--------------------------------- */
    /************* This section will include this component general function *************/
    const changeInputValue = () => setInputValue(textInput.current!.input!.value);
    const changeEditValue = () => setEditValue(editInput.current!.input!.value);
    const handleAddItem = () => {
        if (inputValue == '') return;
        dispatch(addItemAction({ id: result.length, content: inputValue }));
        setInputValue('');
    };
    const handleDeleteItem = () => dispatch(deleteItemAction(itemID));
    const handleUpdateItem = (id: number) => dispatch(updateItemAction({ id, content: editValue }));
    const selectItem = (id: number) => setItemID(id);
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <>
            <Row justify="center">
                <Col span={8}>
                    <Input
                        value={inputValue}
                        placeholder="输点什么..."
                        ref={textInput}
                        onChange={changeInputValue}
                    ></Input>
                </Col>
                <Col>
                    <Button type="primary" onClick={handleAddItem}>
                        增加
                    </Button>
                    <Button type="primary" danger onClick={handleDeleteItem}>
                        删除
                    </Button>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={8}>
                    <List
                        bordered
                        dataSource={result}
                        renderItem={(item) => (
                            <List.Item
                                onClick={() => selectItem(item.id)}
                                style={
                                    item.id == itemID
                                        ? { backgroundColor: '#f40', color: 'white' }
                                        : {}
                                }
                                onDoubleClick={() => {
                                    setCurrentEditId(item.id);
                                    setEditValue(item.content);
                                }}
                                onBlur={() => {
                                    setCurrentEditId(-1);
                                }}
                            >
                                {currentEditId == item.id ? (
                                    <Input
                                        autoFocus
                                        value={editValue}
                                        ref={editInput}
                                        onChange={() => changeEditValue()}
                                        onBlur={() => handleUpdateItem(item.id)}
                                    ></Input>
                                ) : (
                                    item.content
                                )}
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </>
    );
};
export default HomePage;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
