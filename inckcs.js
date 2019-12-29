import react from 'react';
import {View,Text} from 'react-native';
export default class app extends react.component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	const ary = [1,2,3,4,5];

	render(){
		ary.map((items){
			return(<Text>{items}<Text>)
	}
}