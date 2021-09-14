
document.querySelectorAll('.header-section').forEach(function(item){
    item.addEventListener('click', (e) => {
        document.querySelectorAll('.header-section').forEach(function(item){
            item !== e.target ? item.classList.remove('active') : item.classList.add('active');
        });

        item.classList.toggle('active');
        
        if(item.id === 'header-section-1'){
            
        }
        else if(item.id === 'header-section-2'){
            
        }
        else if(item.id === 'header-section-3'){
            
        }
    })
})
