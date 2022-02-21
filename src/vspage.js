import React from 'react';
import { useState, useEffect } from "react";
import styles from "./vspage.module.css";
import { Link } from 'react-router-dom';

const items = [
    {
        name : "호두마루 호두",
        src : require("./img/DE751A3F-431F-49A0-BD78-0023803748AD.JPG")
    },
    {
        name : "배게 위 얼굴 호두",
        src : require("./img/EDB1C9BC-F1D0-4FEA-AA45-F4CA1A09590C.JPG")
    },
    {
        name : "공주님 호두",
        src : require("./img/F95073CB-FE09-46D0-8937-54A9717ED252.JPG")
    },
    {
        name : "망연자실 호두",
        src : require("./img/IMG_0636.JPG")
    },
    {
        name : "갸우뚱 호두",
        src : require("./img/IMG_0663.jpg")
    },
    {
        name : "피곤한 아기 호두",
        src : require("./img/IMG_0747.jpg")
    },
    {
        name : "곰이 된 호두",
        src : require("./img/IMG_1221.JPG")
    },
    {
        name : "예쁜 척 의자 위 호두",
        src : require("./img/IMG_1271.JPG")
    },
];

function VsPage(){
    const [hodus, setHodu] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winnerhodu, setWinners] = useState([]);
    const [roundCount, setRound] = useState(1);
    const [totalRound, setTotal] = useState(4);
    const [winnerdisplay, setWinnerDisplay] = useState(false);

    useEffect(() => {
        items.sort(() => Math.random() - 0.5);
        setHodu(items);
        setDisplays([items[0], items[1]]);
    }, []);

    const clickEvent = hodu => () => {
        if (hodus.length <= 2) {
            if (winnerhodu.length === 0) {
              setDisplays([hodu]);
              setWinnerDisplay(true);
            } else {
              let updatedHodu = [...winnerhodu, hodu];
              setHodu(updatedHodu);
              setDisplays([updatedHodu[0], updatedHodu[1]]);
              setWinners([]);
              setRound(1);
              setTotal(totalRound / 2);
            }
        } 
        else if (hodus.length > 2) {
            setWinners([...winnerhodu, hodu]);
            setDisplays([hodus[2], hodus[3]]);
            setHodu(hodus.slice(2));
            setRound(roundCount + 1);
        }
    }
    return(
        <div className={styles.page}>
            <div className={styles.card}>
                {winnerdisplay ? (
                    <div>
                        <h1 className={styles.title}>
                            호두 이상형 월드컵 32강<br/>
                            우승 호두!!
                        </h1>
                        <div className={styles.title}>
                            <img className={styles.winnerhodu} src={displays[0].src}/>
                        </div>
                        <div className={styles.title}>
                            <label>{displays[0].name}</label>
                        </div>
                        <div className={styles.action}>
                            <Link to="/">
                                <button>다시하기</button>
                            </Link>
                            <button>공유하기</button>
                        </div>
                    </div>
                ) : (
                <div>
                    <h1 className={styles.title}>
                        호두 이상형 월드컵 32강&nbsp;&nbsp;{totalRound * 2}강&nbsp;&nbsp;{roundCount}/{totalRound}
                    </h1>
                    <div className={styles.basic}>
                    {
                        displays.map(d => {
                            return (
                                <div className={styles.vsImg} key={d.name} onClick={clickEvent(d)}>
                                    <img className={styles.kinghodu} src={d.src} />
                                    <div>{d.name}</div>
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
                )
            }
            </div>
            <div className={styles.comment}>
                <label>made by @choco1drink</label>
            </div>
        </div>
    );
}

export default VsPage;