
document.querySelectorAll('.header-section').forEach(function(item){
    item.addEventListener('click', (e) => {
        document.querySelectorAll('.header-section').forEach(function(item){
            item !== e.target ? item.classList.remove('active') : item.classList.add('active');
        });

        item.classList.toggle('active');
        
        if(item.id === 'header-section-1'){
            document.querySelector('#range-section-1').classList.add('active2');
            document.querySelector('#range-section-1').classList.remove('inactive');
            document.querySelector('#range-section-2').classList.add('inactive');
            document.querySelector('#range-section-3').classList.add('inactive');
        }
        else if(item.id === 'header-section-2'){
            document.querySelector('#range-section-1').classList.add('inactive');
            document.querySelector('#range-section-2').classList.add('active2');
            document.querySelector('#range-section-2').classList.remove('inactive');
            document.querySelector('#range-section-3').classList.add('inactive');
        }
        else if(item.id === 'header-section-3'){
            document.querySelector('#range-section-1').classList.add('inactive');
            document.querySelector('#range-section-2').classList.add('inactive');
            document.querySelector('#range-section-3').classList.remove('inactive');
            document.querySelector('#range-section-3').classList.add('active2');
        }
    })
})
