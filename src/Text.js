import React from "react";
import './App.css';
import './Text.css';
import Projects from "./Projects.js";

const sha = `샤틀버스는 서울대학교 캠퍼스 내 버스 도착정보를 종합적으로 알려주는 어플리케이션입니다. 제작 과정에서 Server측 개발을 맡았으며, 테라폼과 Spring boot를 이용했습니다.
저는 공공 api로 받은 데이터를 파싱해 api 문서에 맞게 2차 가공한 후 배포하는 역할을 맡았고, 추후 학부에서 배운 dijkstra 알고리즘을 통해 간단한 경로 알림 기능을 구현했습니다. 샤틀버스 앱은 5월 중 배포 예정에 있습니다.`
const gua = `괌(GUAM)은 주니어 IT 개발자들이 크고 작은 프로젝트를 함께 해결할 수 있도록 돕는 매칭 어플리케이션입니다. Kotlin과 Spring boot, 쿠버네티스를 기술 스택으로 Server 개발을 맡았습니다.
저는 어플 기획 및 DB 설계, 관리를 맡았으며, 괌 어플리케이션은 6월 중 배포 예정에 있습니다. `
const kwo = `고등학교 디자이너 친구의 개인 웹앱을 기획하고, 제작했습니다. 포트폴리오 및 e-shop 기능을 가진 웹앱이었고, 마크업에서부터 배포까지 full-stack developing을 경험할 수 있었습니다.
React - DRF(django restful framework) 구조의 페이지를 제작했고, react-router를 통해 SPA를 구현하며 관련 개념을 학습할 수 있었습니다.`
const brz = `지인의 요청으로 음악학원 페이지를 제작해보았습니다. 큰 볼륨의 application을 관리하기 위해 모듈화와 pagination 등의 기능을 사용하였고, AWS에서 서버를 나눠 관리하는 등의 작업을 수행했습니다.`
const gol = `고등학생을 멘토링하면서 jsp와 MySQl, 부트스트랩을 이용한 간단한 게시판을 구현해보았습니다. 프레임워크 없이 DB와 어플리케이션을 관리하며 커넥션 풀, DTO 등의 서버 측 개념을 재정립했습니다.
이렇게 구현하는 과정에서 다양한 웹 해킹 이슈를 확인하고 수정해보는 연습도 할 수 있었습니다. `

const csn = `ML에 대한 이해를 어느정도 갖추기 위해 교내 스터디에서 cs231n 강좌를 수강했습니다. 이후 Kaggle 프로젝트를 함께 해결하면서 어느정도 관련 개념을 정립할 수 있었습니다.`
const gen = `고등학교 시절 문제 유형을 분석해주는 어플리케이션을 만들고 싶어 조사하면서 Word2Vec이라는 기술에 대해 접한 적이 있습니다. 이후 Gensim 라이브러리를 통해 기초적인 크롤링과 NLP 튜토리얼을 익히며 첫 ML 스터디를 마쳤습니다.`
const iip = `프로그래밍을 처음 접하게 되었던 활동입니다. 고등학교에서 오픈소스 아두이노를 통해 저렴한 전자의수를 제작하는 활동을 진행했고, 작성된 프로그램을 통해 의수가 task를 수행해나가는 모습을 보며 처음으로 프로그래머를 꿈꾸게 되었습니다.`

function Text({ Header, Description, isProject, isResearch }) {
  return (
      <div>
        <header className="App-header">
          <h1 className="header">
            { Header }
          </h1>
          { isProject && <div className="pWrapper">
              <Projects pheader="샤틀버스" plink="https://github.com/wafflestudio/shuttlebus-backend" pshort=" 서울대 캠퍼스 내부 교통정보 알림서비스" pdescription={sha} />
              <Projects pheader="괌(GUAM)" plink="https://github.com/wafflestudio/shuttlebus-backend" pshort=" IT 프로젝트 매칭 어플" pdescription={gua} />
              <Projects pheader="kwon_thefact0ry" plink="https://github.com/min112402/web1" pshort=" 디자이너 개인 페이지 제작 (kwonthefactory.com)" pdescription={kwo} />
              <Projects pheader="Breeze_Academy" plink="https://github.com/Jhvictor4/web_breeze" pshort=" 음악학원 홍보 및 커뮤니티 사이트 (TBD)" pdescription={brz} />
              <Projects pheader="골드(Goldu)" plink="http://daisy20217.cafe24.com/" typeoflink="fa fa-link"  pshort=" 지역상권 활성화를 위한 커뮤니티" pdescription={gol} />
            </div>
          }
          {
            isResearch && <div className="pWrapper">
              <Projects pheader="CS231n" plink="https://github.com/wafflestudio/shuttlebus-backend" typeoflink="" pshort=" 컴퓨터비전 학습" pdescription={csn} />
              <Projects pheader="Gensim" plink="https://github.com/wafflestudio/shuttlebus-backend" typeoflink="" pshort=" 인공지능 입문, NLP" pdescription={gen} />
              <Projects pheader="IIP-project" plink="https://github.com/Dictor/HaneulMyo" pshort=" 아두이노를 이용한 오픈소스 전자 의수" pdescription={iip} />
            </div>
          }
          <p
            className="description"
          >
            { Description }
          </p>
        </header>
      </div>
  );
}

Text.defaultProps = {
  Header: "안녕하세요",
  Description: "강지혁 입니다.",
  isProject: false,
  isResearch: false
}

export default Text;
