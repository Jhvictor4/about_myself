import React from "react";
import './App.css';
import './Text.css';
import Projects from "./Projects.js";

/*<Projects pheader="Breeze_Academy" plink="https://github.com/Jhvictor4/web_breeze" pshort=" 음악학원 홍보 및 커뮤니티 사이트 (TBD)" pdescription={brz} />

<Projects pheader="Kaggle" plink="https://github.com/wafflestudio/shuttlebus-backend" typeoflink="" pshort=" 인공지능 입문, NLP" pdescription={gen} />*/

const sha = `샤틀버스는 서울대학교 캠퍼스 내 버스 도착정보를 종합적으로 알려주는 어플리케이션입니다. Java 기반 Spring을 사용해 서버 개발을 진행했고, 배포에 Terraform을 이용했습니다.
저는 기존 시내버스 정보를 공공 api로 받은 뒤, 데이터를 파싱해 2차 가공 & 배포하는 역할을 맡았습니다. 이를 교내 시내버스 정보와 함께 가공하여 추천 경로, 도착 시간 등의 정보를 제공했습니다. 프로젝트를 진행하면서, API 명세와 Error Code를 통해 클라이언트와 원활하게 의사소통하는 법을 익혔습니다.
또 데이터를 깔끔하게 가공하는 방법에 대해서도 고민해볼 수 있었습니다.`

const gua = `괌(GUAM)은 주니어 IT 개발자들이 크고 작은 프로젝트를 함께 해결할 수 있도록 돕는 매칭 어플리케이션입니다. Kotlin 기반 Spring boot를 사용한 Server 개발을 맡았습니다.
저는 어플 기획 및 DB 설계, 검색 및 추천 기능 제작을 담당했습니다. M:N 관계의 엔티티들 사이 상호작용을 효율적으로 설계하기 위한 고민을 많이 해볼 수 있었습니다. 해당 프로젝트는 MSA 연습의 일환으로 백엔드를 세개의 어플리케이션으로 나누어 구현했고, k8s를 통해 컨테이너화 & 배포 자동화를 진행했습니다.
MSA, 컨테이너 layer의 다양한 특성 등에 대해 알아보았고, 효율적인 서비스 제공 방법에 대해 많은 공부를 할 수 있었습니다.`

const kwo = `고등학교 디자이너 친구의 개인 웹앱을 기획하고, 제작했습니다. React - DRF(django restful framework)를 기술 스택으로, 포트폴리오 및 e-shop 기능을 가진 웹앱을 제작했습니다.
해당 프로젝트를 통해 기획, 마크업에서부터 배포까지 진행해보며 full-stack developing을 체험해보았습니다.
프론트 구현에서는 react-router를 사용하면서 SPA 관련 개념에 대해 학습해보기도 했습니다.
  처음으로 웹 서비스 개발 전반에 관여해보면서 웹 개발에 대한 이해를 넓혀보았던 활동이었습니다.`

const brz = `지인의 요청으로 음악학원 페이지를 제작해보았습니다. 큰 볼륨의 application을 관리하기 위해 모듈화와 pagination 등의 기능을 사용하였고, AWS에서 서버를 나눠 관리하는 등의 작업을 수행했습니다.`

const gol = `고등학생을 멘토링하면서 jsp와 MySQl, 부트스트랩을 이용한 간단한 게시판을 구현해보았습니다. Java Beans를 통해 VO, DTO 등을 설계하고, 이를 JSP view에서 표현해보면서 기본적인 MVC architecture에 대한 이해를 정립했습니다.
또 User authentication을 위해 세션을 관리해보면서 인증 관련 개념도 학습했습니다. 이렇게 구현하는 과정에서 XSS, sql injection 등의 다양한 웹 해킹 이슈를 확인했고, 보완해보기도 했습니다.
프레임워크를 사용할 때에는 자세히 이해하지 못한 개념들을 익히는 데 도움이 많이 되었던 활동입니다.`

const csn = `ML/DL에 관심을 가지고 학내 스터디에 참여했습니다. cs231n 강의와 '밑바닥부터 시작하는 딥러닝' 교재를 공부하며 ML/DL에 입문했습니다. 이후 Regression, Classification, Computer Vision, NLP, Recommendation System
5개의 카테고리에 관한 Kaggle 프로젝트를 진행해보고, 리뷰하면서 관련 알고리즘 & 모듈들을 익혀나갔습니다. 스터디는 현재 진행중이며, 6월 중에 실제 kaggle competition에 함께 도전해보는 것을 목표로 하고 있습니다.`

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
              <Projects pheader="괌(GUAM)" plink="https://github.com/wafflestudio/waffle-guam-project" pshort=" IT 프로젝트 매칭 어플" pdescription={gua} />
              <Projects pheader="샤틀버스" plink="https://github.com/wafflestudio/shuttlebus-backend" pshort=" 서울대 캠퍼스 내부 교통정보 알림서비스" pdescription={sha} />
              <Projects pheader="kwon_thefact0ry" plink="http://kwonthefactory.com/" typeoflink="fa fa-link" pshort=" 디자이너 개인 페이지 제작 (kwonthefactory.com)" pdescription={kwo} />
              <Projects pheader="골드(Goldu)" plink="http://daisy20217.cafe24.com/" typeoflink="fa fa-link"  pshort=" 지역상권 활성화를 위한 커뮤니티" pdescription={gol} />
            </div>
          }
          {
            isResearch && <div className="pWrapper">
              <Projects pheader="ML/DL" plink="https://www.notion.so/jirmkaggle/Kaggle-Project-1189193859f64bbaa6ac714c7a734855" typeoflink="fa fa-link" pshort= "ML/DL 스터디 & Kaggle 프로젝트" pdescription={csn} />
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
