import react,{component} from 'react';
import {CreateSwitchNavigtion} from 'react-navigation';
import {form} from './form';
import {contact} from './contact';
import {propType} from "react"
const appNavigation = CreateSwitchNavigtion({
		"routeOne": contact;
		"routeTwo": form;
},{initialRouteName:'home'})
export default class appNavigation extends component {
static navigationOption = {
	headerTitle: "home page",
	headerStyle:{
		color: 'green',
		font-weight: 900;
	}
}
	render(){
		return (

			   )
	}
}
static = {
	home:propType.number.isRequired
}