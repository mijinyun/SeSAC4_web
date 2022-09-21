import React, { Component } from 'react';
import book from './book.jpg';

function Test4 (props) {

    const box = {
        // display : 'flex',
        // justifyContent:'center',
        // flexDirection : 'column',
        position:'relative',
        width:'400px',
        backgroundColor:'bisque',
        padding :'30px'
    }

    return (
        <div style={box}>
            <h1 style={{color:'orange',textAlign:'center'}}>이번주 베스트셀러</h1>
            <img style={{width:'150px',position:'relative',left:'30%'}}src={book}></img>
            <h2>{props.title}</h2>
            <h4>저자 : {props.author}</h4>
            <h4>판매가 : {props.price}</h4>
            <h4>구분 : {props.type}</h4>
        </div>
    )
}

export default Test4;