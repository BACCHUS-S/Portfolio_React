import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center', paddingTop:"10px"}}>
              <img
                src="https://lh3.googleusercontent.com/-9vfcNnTB4BE/W8D9QPmfdqI/AAAAAAAAAsQ/GoD_3A-J-jwGlSVLYQVPuqtU3Z6_lsXSgCEwYBhgL/w140-h140-p/74B6D48F-2892-4CA9-A243-BF9F6E91BC10.jpeg"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2>Sung Hyeon</h2>
            <h4 style={{color: 'grey'}}>Front-End Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm SKKU(Sung Kyun Kyuan Univ) Computer Education 4th student. Nice to see you all!! My hobby is exercise espacially weight-trainning and I like watching china drama because that make me smile.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>서울특별시 종로구 혜화로6길 13-6 203호</p>
            <h5>Phone</h5>
            <p>(010) 6780-9618</p>
            <h5>Email</h5>
            <p>sunghyeon86@gmail.com</p>
            <h5>Web</h5>
            <p>hhttps://github.com/oronaminc</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2011}
              endYear={2013}
              schoolName="Ansan, Kyung-An High School"
              schoolDescription="
              On February 19, 1994, the school was approved to establish Daehwa Academy. On January 14, 1995, he was approved for the establishment of Kyung An High School. On March 2, 1995, he held his first entrance ceremony. On April 9, 1996, he had a ceremony for the opening ceremony, and on December 26, 1996, he received an award for excellent school management. On February 12, 1998, the first graduation ceremony was held. The lesson is, 'Let's think about it and act rightly and live cool', and the branch is zelkova and the cultivation is plum. An outdoor theater, and a greenhouse. Every year we hold the Daehae Art Festival."
               />
               <Education
                 startYear={2014}
                 endYear={2020}
                 schoolName="Seoul, Sung Kyun Kuan University"
                 schoolDescription="Sungkyunkwan was founded in the 13th year of the Joseon Dynasty in 1398 in accordance with the founding principle of Confucianism. In 1895, Sungkyunkwan was established as a Sungkyunkwan University and developed into a modern university. However, the title of Sungkyunkwan was changed to Kyunggi Academy at the time of Japanese rule and education was soon stopped. After the liberation, Sungkyunkwan recovered its status. In addition, Shin Sik University - Sungkyunkwan University - which was succeeded by Sungkyunkwan in 1946 under the leadership of Sungkyunkwan in 1946 under the leadership of Professor Kim Chang Sook has been established. The abbreviation for English is SKKU (SungKyunKwan University)."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2014}
              endYear={2016}
              jobName="LSP Saturday School After School Lecturer"
              jobDescription="Ansan Kyung-An High School Career Counseling Department Project, Activities: Ansan Kyung-An High School 1st grade 24 students + 2nd grade 6 students High school planner (for 3P high school students) Lecture and checkup, student career counseling LSP Saturday School is an on-the-go program at Ansan Kyung-An High School. I meet four hours every Saturday to get planners how to write, how to study, and career counseling."
              />
              <Experience
                startYear={2017}
                endYear={2018}
                jobName="Air Force in Suwon(10th wings)"
                jobDescription="Military service contents: Information system operation bottle -> Working in the computer equipment maintenance team. Military Service Details: PC maintenance or server operation was carried out, along with the management and maintenance of the flight monitoring system (ACMI system)."
                />
                <Experience
                startYear={2019}
                endYear={2019}
                jobName="Android Developer in KRINFRA"
                jobDescription="From January to March (until the start of the course), we are developing enterprise applications for our company. The 'communicator' we are developing now is an application that manages the photos and files necessary for GIS survey information and performs socket communication. The server side has not been created yet, and we plan to complete it for the rest of February. Because it is an application used by corporations, it is centered on RFP (Request For Proposal)."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={95}
                />
                <Skills
                  skill="android"
                  progress={85}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={65}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;