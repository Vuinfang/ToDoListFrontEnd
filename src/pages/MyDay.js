import React, {useEffect, useState} from "react";
import {getCurrentDate} from "../util/GetCurrentDate";
import {ClockCircleTwoTone} from '@ant-design/icons';
import Container from "../components/Container";
export default function MyDay () {
    const titleStyle = {
        marginLeft: '10px',
        display: 'flex',
        height: '50px',
        width: '90px',
        margin: '20px 30px 10px 30px',
        fontSize: '22px',
        fontWeight: '700',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
    const dateStyle = {
        marginLeft: '10px',
        display: 'flex',
        height: '20px',
        width: '90px',
        margin: '0px 0px 0px 40px',
        fontSize: '13px',
        fontWeight: '400',
        alignItems: 'center',
        justifyContent: 'space-between',
    }

    return(
        <Container>
            <div style={titleStyle}>
                <ClockCircleTwoTone style={{marginRight: '10px'}} />
                <span>Today</span>
            </div>
            <div style={dateStyle}>{getCurrentDate()}</div>
        </Container>
    )
}
