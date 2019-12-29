 import react from 'react';
 import {BrowserRouter,router} from 'react-dom';
 import home from './home'
 import about from './about'
 import contact from './contact'
 const pageContent=()=>{
 	render(){
 		return (
				<switch>
				<BrowserRouter>
				<router path='/home' component={home}>
				<router path='/about' component={about}>
				<router path='/section' component={section}>
				</BrowserRouter>
				</switch>
 			   )
 	}
 }