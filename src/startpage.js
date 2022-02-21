import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Select from "react-select";
import { useState, useEffect, useMemo } from "react";
import { Link } from 'react-router-dom';
import kingHodu from './img/IMG_2291.jpg';
import styles from './startpage.module.css';

function StartPage(){
    const [vsChange, setVs] = useState();

    const handleChange = (event) => {
        setVs(event.target.value);
    };
    const options = useMemo(
        () => [
          { value: "32강", label: "32강" },
          { value: "16강", label: "16강" },
          { value: "8강", label: "8강" },
        ],
        []
      );

    return(
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>호두 이상형 월드컵</h1>
                <div className={styles.basic}>
                    <img className={styles.kinghodu} src={kingHodu} title="주인이 뽑은 킹-호두"/>
                    <h4 className={styles.introduce}>
                        너무 귀여운 호두의 사진들 중 당신의 단연 최고의 호두의 사진은 무엇인가요??!!<br/>
                        무려 32장의 귀여운 호두들 중 대결을 통해 1등을 차지할 호두는 어떤 호두일지...<br/>
                        1등 호두를 위해 고민해서 선택해주세요!!!<br/>
                    </h4>
                </div>
                <div className={styles.action}>
                    <FormControl className={styles.selection}>
                        <InputLabel id="demo-simple-select-label">월드컵</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={vsChange}
                            label="월드컵"
                            onChange={handleChange}
                        >
                            <MenuItem value={32}>32강</MenuItem>
                            <MenuItem value={16}>16강</MenuItem>
                            <MenuItem value={8}>8강</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={styles.action}>
                {vsChange === 8 ? 
                    (
                    <Link to="vs8">
                        <button className={styles.button}>시작하기</button>
                    </Link>
                    )
                    :
                    vsChange === 16 ?
                    (
                        <Link to="vs16">
                        <button className={styles.button}>시작하기</button>
                        </Link>
                    )
                    :
                    vsChange === 32 ?
                    (
                        <Link to="vs32">
                        <button className={styles.button}>시작하기</button>
                        </Link>
                    )
                    :
                    (
                        <button className={styles.button}>시작하기</button>
                    )
                }
                </div>
                
            </div>
            <div className={styles.comment}>
                <label>made by @choco1drink</label>
            </div>
        </div>
    );
}

export default StartPage;