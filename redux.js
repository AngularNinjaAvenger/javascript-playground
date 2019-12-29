initState{
	post:[]
}
const reducer =(state,action)=>{
	if (tyep=="ADD") {
		state: state + indomie.payload
	}
	store.subscribe(()=>{
		console.log("this shit has been upadted")
	})
}
export default (reducer,1);
const indomie = {tyep:"ADD",payload:40}
store.dispatch(indomie);
