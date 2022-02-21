import React from 'react';
import { useState, useEffect } from "react";
import styles from "./vspage.module.css";
import { Link } from 'react-router-dom';

const items = [
    {
        name : "지긋이 보는 호두",
        src : require("./img/2AA50071-FAC8-477E-BA3C-D7E76EEC6755.JPG")
    },
    {
        name : "차에 안겨 있는 호두",
        src : require("./img/9C259C3D-D5BA-4F41-93A4-D2925A3C3E0B.JPG")
    },
    {
        name : "이성을 잃은 호두",
        src : require("./img/71F5E2E5-5346-43CF-9928-574B51404C48.JPG")
    },
    {
        name : "혀 내밀은 호두",
        src : require("./img/86C73AEE-D901-403A-9239-D06428722CA3.JPG")
    },
    {
        name : "황당한 호두",
        src : require("./img/BE610F99-9828-4944-A114-EC964D5796D0.JPG")
    },
    {
        name : "물끄럼 호두",
        src : require("./img/C284BFB4-1213-4B0B-9C07-1D04CDCC2698.JPG")
    },
    {
        name : "푸근한 호두",
        src : require("./img/C918CEA5-FB43-4D59-BAB0-7612520E5BF0.JPG")
    },
    {
        name : "졸린 패딩 호두",
        src : require("./img/DC517D5B-2A7D-4A4F-A32F-BA0E6E11E799.JPG")
    },
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

function VsPage16(){
    const [hodus, setHodu] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winnerhodu, setWinners] = useState([]);
    const [roundCount, setRound] = useState(1);
    const [totalRound, setTotal] = useState(8);
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

export default VsPage16;