import React from 'react';
import Select from "react-select";
import { useState, useEffect, useMemo } from "react";
import { Link } from 'react-router-dom';
import kingHodu from './img/IMG_2291.jpg';
import styles from './startpage.module.css';

function StartPage(){

    const options = useMemo(
        () => [
          { value: "32강", label: "32강" },
          { value: "16강", label: "16강" },
          { value: "8강", label: "8강" },
        ],
        []
      );

    return(
        <div>
            <h1>호두 이상형 월드컵</h1>
            <img className={styles.kinghodu} src={kingHodu} title="주인이 뽑은 킹-호두"/>
            <div>
                <h4>
                    너무 귀여운 호두의 사진들 중 당신의 단연 최고의 호두의 사진은 무엇인가요??!!<br/>
                    무려 32장의 귀여운 호두들 중 대결을 통해 1등을 차지할 호두는 어떤 호두일지...<br/>
                    1등 호두를 위해서 고민해서 선택해주세요!!!<br/>
                </h4>
            </div>
            <Select options={options} defaultValue={options[0]} />
            <Link to="vs">
                <button>시작하기</button>
            </Link>
        </div>
    );
}

export default StartPage;