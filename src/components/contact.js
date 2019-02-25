import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class contact extends Component{
	render(){
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Sung Hyeon</h2>
						<img src="https://cdn01.x-plarium.com/browser/content/portal/soldiers-inc/story/strategy.png" alt="soldier" style={{height: '250px'}} />
						<p style={{width: '75%', margin:'auto', paddingTop:'1em'}}>The universe is very large and wonderful and filed with many stars; The world is very rich and filed with many people. Among its thousands of towns, millions of hmomes and billions of people, you may sometimes fell very small. You may feel lonely and forgotten. But do you know what you are? Among these billions of people, there is no other person like you. YOU ARE UNIQUE Why, look at your body, Your face, your legs, your fingers. They are not like anyone else's. 
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr/>
						
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
										<i className="fa fa-phone-square" aria-hidden="true" />
										02-720-6455
									</ListItemContent>
								</ListItem>
								
								<ListItem>
									<ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
										<i className="fa fa-fax" aria-hidden="true" />
										010-6780-9618
									</ListItemContent>
								</ListItem>
								
								<ListItem>
									<ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
										<i className="fa fa-envelope" aria-hidden="true" />
										sunghyeon86@gmail.com
									</ListItemContent>
								</ListItem>
								
								<ListItem>
									<ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
										<i className="fa fa-skype" aria-hidden="true" />
										sunghyeon86
									</ListItemContent>
								</ListItem>
								
							</List>
						</div>
						
						
					</Cell>

				</Grid>

			</div>
		
		);
	}
}
export default contact;