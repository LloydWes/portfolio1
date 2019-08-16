window.addEventListener('load', function(){
	console.log('script has been loaded');
	let menu = document.querySelector('#ham_menu');
	menu.addEventListener('click', function(e){
		console.log('Event');
		let bars = document.querySelector('#ham_menu');
		bars.classList.toggle('change');
		document.querySelector('#ham_list').classList.toggle('change');
	});
});