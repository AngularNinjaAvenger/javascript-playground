import react-native from 'react-native';
import {View,Text,panResponder} from 'react-native';
export default class app extends react.component {
		const panResponder = panResponder.create({
			const position = new Animated.valueXY();
			onStartShouldSetPanResponder: () =>true;
			onPanreponderMove:(event,gesture)=> console.log(gesture);
			onPanreponderRealease:()=>;
		postion.setValue(gesture.xd,gesture.yb)
		})
	 constructor(props){
	 	super(props);
	 	this.state={panResponder}
	 }
	render(){
		return (   
			<Animated.View>
			<Text>hello world<Text>
			<Animated.View>
			   )
		
	}
}