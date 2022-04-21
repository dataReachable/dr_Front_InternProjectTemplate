/**
 * @file
 * @date 2022-04-20
 * @author
 * @lastModify  2022-04-20
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import style from './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/Store/rootReducer';
import { v1 } from 'uuid';
import React, { useState } from 'react';
import * as actions from '~/Store/List/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const HomePage = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/

    const listData = useSelector((state: RootState) => state.listReducers);
    const dispatch = useDispatch();

    const [addInputValue, setAddInputValue] = useState<string>('');
    const [timer, setTimer] = useState<unknown>();

    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    const addInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddInputValue(e.target.value);
    };

    const addItemCb = () => {
        if (!addInputValue.trim()) return;
        const itemData = { id: v1(), value: addInputValue, isChecked: false, isInput: false };
        dispatch(actions.addItemActionSaga(itemData));
        setAddInputValue('');
    };

    const deleteItemsCb = () => {
        dispatch(actions.removeItemsActionSaga());
    };

    const selectItemCb = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: string) => {
        clearTimeout(Number(timer));
        const t = setTimeout(() => {
            dispatch(actions.selectItemActionSaga(id));
        }, 200);
        setTimer(t);
    };

    const updateItemCb = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: string) => {
        clearTimeout(Number(timer));
        dispatch(actions.updateItemActionSaga(id));
    };

    const updateItemInputValueCb = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        dispatch(actions.updateItemInputValueActionSaga({ id, value: e.target.value }));
    };

    const itemInputBlurCb = (_, id: string) => {
        console.log(1);
        dispatch(actions.updateItemInputBlurActionSaga(id));
    };
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <>
            <div className={style.pages_wrapper}>
                <div className={style.wrapper_operate}>
                    <input
                        type="text"
                        className={style.wrapper_input}
                        value={addInputValue}
                        onChange={addInputChange}
                    />
                    <button className={style.button_add} onClick={addItemCb}>
                        添加
                    </button>
                    <button className={style.button_remove} onClick={deleteItemsCb}>
                        删除
                    </button>
                </div>
                <ul className={style.wrapper_list}>
                    {listData.list.map((item) => {
                        const ele = item.isInput ? (
                            <input
                                className={style.item_input}
                                type="text"
                                value={item.value}
                                onChange={(e) => updateItemInputValueCb(e, item.id as string)}
                                onBlur={(e) => {
                                    itemInputBlurCb(e, item.id as string);
                                }}
                            />
                        ) : (
                            <>{item.value}</>
                        );
                        return (
                            <li
                                className={
                                    item.isChecked
                                        ? style.wrapper_item_active
                                        : style.wrapper_item_inactive
                                }
                                key={item.id}
                                onClick={(e) => selectItemCb(e, item.id as string)}
                                onDoubleClick={(e) => updateItemCb(e, item.id as string)}
                            >
                                {ele}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default HomePage;

/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
