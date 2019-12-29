import react from 'react'
export default const contact  = () =>{
	render(){
		return (
			<view>
			<button onpress={this.navigation.navigate.('routeTwo')}>click me</button>
			<text>{this.props.navigation.getParam("name")}</text>
			</view>
			   )
	}
}