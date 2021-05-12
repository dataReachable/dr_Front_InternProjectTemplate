/**
 * @file
 * @date 2020-12-01
 * @author
 * @lastModify  2020-12-01
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from 'react';
import { Row, Col } from 'antd';

import InputTodoListItem from './Components/InputTodoListItem';
import ButtonCreateTodoListItem from './Components/ButtonCreateTodoListItem';
import ButtonDeleteTodoListItem from './Components/ButtonDeleteTodoListItem';
import ListShowTodoListItems from './Components/ListShowTodoListItems';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const HomePage = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <>
            {/* <Row>this is the test project</Row> */}
            <Row>
                <Col span={4} offset={8}><InputTodoListItem/></Col>
                <Col span={2}><ButtonCreateTodoListItem /></Col>
                <Col span={2}><ButtonDeleteTodoListItem /></Col>
            </Row>
            <Row>
                <Col span={16} offset={4}><ListShowTodoListItems /></Col>
            </Row>
        </>
    );
};
export default HomePage;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */