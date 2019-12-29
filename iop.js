 let xhr  = xhrHtmlRequest;
 xhr.open('GET','http://www.google.com',true);
 xhr.onLoad(()=>{
 	if (xhr.readyStateChange !== 4) {
 		console.log('something went wrong')
 	}
 	else if(xhr.status ===) {

 	}
const style  = StyleSheet.create({
	flex: 1,
	flexDirection: platform.select({
		ios:{
			return 'row'
		},
		andriod:{
			return 'colum'
		}
	})
})
 })
import react-native from 'react-native';
import {CreateStackNavigation} from 'react-Navigation';
import button.andriod from './button.andriod';
import button.ios from './button.ios';
import app from './app';
import {Image,ImageBackground} from 'react-native';
export default class navOne extends {
	render(){
		return (
					<ImageBackground source={uri:'url'} style:{resizeMode:'contain'}>
					<Image source={
								uri:'http://www.google.com',
								crop:{
									resizeMode:'contain';
								}

									}
					</ImageBackground>
			   )
	}
}
const CreateStackNavigation = CreateStackNavigation({
	button.andriod,
	button.ios
},initialRouteName:'app')


import react-native from 'react-native';
import button from './button';
export default class app extends {
	render(){
		return (  
			<buton>
			<component />
			</button>
			   )
	}
}
button.ios.js
import react-native from 'react-native';
import {TouchableOpacity} from 'react-native'
export default const button  = () =>{
	render(){
		return (
				<TouchableOpacity>

				</TouchableOpacity>
			   )
	}
}
button.andriod.js
import react-native from 'react-native';
import {TouchableNativeFeedback} from 'react-native'
export default const button  = () =>{
	render(){
		return (
				<TouchableNativeFeedback>

				</TouchableNativeFeedback>
			   )
	}
