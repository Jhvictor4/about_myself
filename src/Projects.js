import React from "react";
import './Projects.css'

function Projects({pheader, plink, typeoflink, pshort, pdescription}) {
  return (
      <div className = "projectWrapper">
          <h1 className="projectName">
            { pheader }
          </h1>
          <h2 className="pshort">
           <a href={plink} target="_blank"> <i class={typeoflink} aria-hidden="true"></i> </a>
           {pshort}
          </h2>
          <div className="pdescription">
            <p>
              { pdescription }
            </p>
         </div>
      </div>
  );
}

Projects.defaultProps = {
  pheader: "프로젝트 이름",
  plink: "프로젝트 링크",
  typeoflink: "fa fa-github",
  pshort: "프로젝트 간략한 설명",
  pdescription: "프로젝트 자세한 설명 입니다."
}

export default Projects;
