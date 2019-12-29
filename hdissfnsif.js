import react-native from 'react-native';
import {Animated,Text,Image,Linking} from 'react-native';
export default class app extends component{
	const aryOfImages = ['http://imagesource.com',
						 'http://imagesource.com',
						 'http://imagesource.com',
						 'http://imagesource.com'] 
	render(){
		return(
			<Animated.View>
				<Text onPress={Linking.openURL('this is the openUR')}>hello world<Text> 
			<Animated.View>
			  )
	}
}