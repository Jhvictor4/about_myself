import React from "react";
import Nav from "./Nav.js";
import Text from "./Text.js"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const about =
`사람을 좋아하고, 배우기 좋아하는 서버 개발자입니다. 인천하늘고등학교를 졸업했고, 서울대학교 컴퓨터공학부 19학번으로 재학중입니다. 과내 개발동아리 와플스튜디오에서 Server developer로 활동 중이며, 여러가지 간단한 웹 애플리케이션을 제작한 경험이 있습니다.
많은 사람들이 즐겁게 사용하는 서비스를 만들어보고 싶습니다. 올해 여름부터 산업기능요원 재배정을 위해 Server 개발자로 복무하고 있습니다.
`

const skills = `기술 스택: AWS, Django, Spring, React, Tensorflow, C++ and C, Ocaml ..

                * 여행 & 외국어에 관심이 많습니다. 한국어, 영어 외에 스페인어, 일본어를 (조금!) 할 줄 압니다 ㅎㅎ.

                * 음악과 공연을 좋아합니다. 코로나 이전까지 미디, 노래, 춤 등 공연 활동을 하곤 했습니다.
                `

                  /* <div className="wf"><a  href="wafflestudio.com"> <i class="wf fa fa-link"></i></a> 와플스튜디오</div> */

function App() {
  return (
    <div className="Wrapper">
      <Nav />
      <div className="App">
        <Text Header="About Me" Description={ about }/>
        <Text Header="Projects" Description="" isProject= {true}/>
        <Text Header="Study / Research" Description="" isResearch= {true}/>
        <Text Header="etc." Description={ skills }/>
      </ div>
    </div>
  );
}

export default App;
