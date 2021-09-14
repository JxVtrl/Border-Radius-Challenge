
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


let caixa = document.getElementById('display-box')

// ALL BORDERS
function allBorder(degrees){
    console.log(degrees)
    document.querySelectorAll(".all-variable").forEach(function(item){
        item.innerHTML = degrees + 'px';
        caixa.style.borderRadius = degrees + 'px';
    })
}


// 2X
function diagonalBorders1(degrees){
    caixa.style.borderTopLeftRadius = degrees + 'px';
    caixa.style.borderBottomRightRadius = degrees + 'px';
    document.getElementById('top-left').innerHTML = degrees + 'px';
    document.getElementById('bottom-right').innerHTML = degrees + 'px';
}

function diagonalBorders2(degrees){
    caixa.style.borderTopRightRadius = degrees + 'px';
    caixa.style.borderBottomLeftRadius = degrees + 'px';
    document.getElementById('top-right').innerHTML = degrees + 'px';
    document.getElementById('bottom-left').innerHTML = degrees + 'px';
}

// 4X
function topLeft(degrees){
    caixa.style.borderTopLeftRadius = degrees + 'px';
    document.getElementById('top-left').innerHTML = degrees + 'px';
}

function topRight(degrees){
    caixa.style.borderTopRightRadius = degrees + 'px';
    document.getElementById('top-right').innerHTML = degrees + 'px';
}

function botLeft(degrees){
    caixa.style.borderBottomLeftRadius = degrees + 'px';
    document.getElementById('bottom-left').innerHTML = degrees + 'px';
}

function botRight(degrees){
    caixa.style.borderBottomRightRadius = degrees + 'px';
    document.getElementById('bottom-right').innerHTML = degrees + 'px';
}