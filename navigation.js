import react from 'react';
import {Router,NavLink} from 'react';
export default const user=()=>{
	render(){
		return (
				<div>
				<div>
				<NavLink exact to = "/">
				home
				</NavLink>
				</div>
				<div>
				<NavLink  to = "/about">
				about
				</NavLink>
				</div>
				<div>
				<NavLink  to = "/contact">
				contact
				</NavLink>
				</div>
				</div>
			   )
	}
}