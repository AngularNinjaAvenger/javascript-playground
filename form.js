 $('input').on('keydown',function() {
	let filter = $(this).val();
	let lt  = document.getElementsByTagName('li');
	if (lt[0].innerText.includes(filter)) {
		lt[0].style.visibility='hiddem'
	 }
	 else{
	
	 }
})
