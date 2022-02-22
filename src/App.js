import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useScript } from "./hook";
import StartPage from "./startpage";
import VsPage from "./vspage";
import VsPage16 from "./vs16page";
import VsPage32 from "./vs32page";
import styles from"./app.module.css";

function App() {
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  useEffect(() => {
		if (status === "ready" && window.Kakao) {
			// 중복 initialization 방지
			if (!window.Kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				window.Kakao.init("발급받은 javascript key");
			}
		}
	}, [status]);	

  return (
    <div className={styles.skin}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<StartPage/>} />
          <Route path='/vs8' element={<VsPage/>} />
          <Route path='/vs16' element={<VsPage16/>} />
          <Route path='/vs32' element={<VsPage32/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
