window.addEventListener('load', function(){
	console.log('script has been loaded');
	let menu = document.querySelector('#ham_menu');
	menu.addEventListener('click', function(e){
		console.log('Event');
		// let ham_menu = document.querySelector('#ham_menu');
		console.log(menu);
		menu.classList.toggle('change');
		let ham_list = document.querySelector('#ham_list');
		console.log(ham_list);
		ham_list.classList.toggle('change');
	});
});