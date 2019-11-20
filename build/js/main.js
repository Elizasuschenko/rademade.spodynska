let filrterButtom = document.querySelector('.filter');
let filrterList = filrterButtom.querySelector('.filter-list');
let filterValueContent = filrterButtom.querySelector('.filter-value');
filrterButtom.addEventListener('click', ()=>{
	if(filrterList.hidden){
		filrterButtom.classList.add('filter-focus');
		filrterList.hidden = false
	}
	else{
		filrterButtom.classList.remove('filter-focus');
		filrterList.hidden = true
	}
});
let category = document.querySelectorAll('.list_item');
filrterList.addEventListener('click', ()=>{
	if(event.target.nodeName !== 'LI') return false;
	let filterValue = event.target.innerHTML;
	filterValueContent.innerHTML = filterValue;
	category.forEach((item)=>{
		let itemTitile = item.querySelector('.type').innerHTML;
		
		if(filterValue == itemTitile){
			item.hidden = false 
		}
		else if(filterValue === 'All types'){
			item.hidden = false
		}
		else(item.hidden = true)
	})
});