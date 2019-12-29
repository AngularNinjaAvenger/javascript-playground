import react from 'react'

const  ui =({myState})=>{
return ( 
<div>
my name is {myState.name} 	
<form>
<input type='text'>
<input type='submit' value="submit">
</form>
</div>
			    )
		}

export default ui;