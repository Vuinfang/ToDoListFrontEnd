import React, {useEffect, useState} from "react";
import AddTask from '../components/AddTask';
import Form from '../components/Form'
import axiosInstance from "../util/axiosInstance";
import {ClockCircleTwoTone} from '@ant-design/icons';
import Container from "../components/Container";
export default function Important () {
    const titileStyle = {
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
    return(
        <Container isImportant>
            <div style={titileStyle}>
                <ClockCircleTwoTone style={{marginRight: '10px'}} />
                <span>Important</span>
            </div>
        </Container>
    )
}
