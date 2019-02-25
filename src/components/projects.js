import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/da9a1e74-424b-4f4c-ad4e-b6d1d1a6a4c8/d5tyyr6-0d540b3c-775c-4e89-93b7-2cb8e4fc83f6.png) center / cover'}} >Android Camera #1</CardTitle>
            <CardText>
            Android Camera Function with CAMERA (ver1)
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/oronaminc/Android_Camera">GitHub</Button>
              <Button colored a href="https://github.com/oronaminc/Android_Camera/issues">ScreenShot</Button>
              <Button colored>Etc</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/da9a1e74-424b-4f4c-ad4e-b6d1d1a6a4c8/d5tyyr6-0d540b3c-775c-4e89-93b7-2cb8e4fc83f6.png) center / cover'}} >Android grid Album #2</CardTitle>
            <CardText>
            Customed grid album with recycling items
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/oronaminc/Android_Camera">GitHub</Button>
              <Button colored a href="https://github.com/oronaminc/Android_Camera/issues">ScreenShot</Button>
              <Button colored>Etc</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/da9a1e74-424b-4f4c-ad4e-b6d1d1a6a4c8/d5tyyr6-0d540b3c-775c-4e89-93b7-2cb8e4fc83f6.png) center / cover'}} >Android Socket #3</CardTitle>
            <CardText>
              TCP/IP Communication with socket communication
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/oronaminc/Android_AP-project">GitHub</Button>
              <Button colored a href="https://github.com/oronaminc/Android_AP-project/issues">ScreenShot</Button>
              <Button colored>Etc</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              React Portfolio with nodsJS, AJAX, Api connection
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/oronaminc/Portfolio_React">GitHub</Button>
              <Button colored a href="https://github.com/oronaminc/Portfolio_React/issues">ScreenShot</Button>
              <Button colored>Etc</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Mvoie Chart with Torrent Movie api
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/oronaminc/movie_app">GitHub</Button>
              <Button colored a href="https://github.com/oronaminc/movie_app/issues">ScreenShot</Button>
              <Button colored>Etc</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>


      )
    } else if(this.state.activeTab === 2) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://programmers.co.kr/assets/img-meta-programmers-c4442532396affc7fdb576c46ed7cb0540f48cf846e853f173b212faa1d26fad.png) center / cover'}} >Algorithm Answer</CardTitle>
            <CardText>
              Baekjoon, Online jedge problem solving
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/oronaminc/Baekjoon">GitHub</Button>
              <Button colored a href="https://github.com/oronaminc/Baekjoon/issues">ScreenShot</Button>
              <Button colored>Etc</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>


      )
    } 
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Android</Tab>
          <Tab>React</Tab>
          <Tab>Algorithm</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
