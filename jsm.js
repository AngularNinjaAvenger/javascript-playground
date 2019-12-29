
import react from 'react';
class contact extends react,Component {
	contactNumber.map((contactNumbers)=>{
		contactNumbers.split(1,3)
	})
	render(){
		return (  
				
			   )
	}
}

import react from 'react';
import {PropType} from 'react';
import contact from 'contact';
export default const user =()=>{
	const {user}=this.props
	render(){
		const theUserList = this.props.users
		return (
				<Fragmet>
					<contact contactNumber={user}/>
				</Fragmet>
		        )
	}
}
theUserList.defaultProps{
	theUserList:[1,2,3,4,5]
}

import react,{Component,Fragmet} from 'react';
import userList from 'users';
export default class app extends react {
	state={
		user:[1,2,3,4,5]
	}
	render(){
		return (
				<Fragmet>
					<userList users={this.state.user} />
				</Fragmet>
		        )
	}
}
