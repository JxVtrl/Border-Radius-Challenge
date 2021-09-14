let caixa = document.getElementById('display-box')
let copy = document.getElementById('copy-button')

// Menu Selection
document.querySelectorAll('.header-section').forEach((item) => {
    item.addEventListener('click', (e) => {
        // Remove all selected Menu Itens
        document.querySelectorAll('.header-section').forEach((item) => {
            item !== e.target ? item.classList.remove('selected') : item.classList.add('selected');
        });

        // Reset all borders 
        document.querySelectorAll('.all-variable').forEach((item) => {
            item.innerHTML = '0px';
            caixa.style.borderRadius = 0;

            // Reset all Range Input
            document.querySelectorAll('.range').forEach((item) => {
                item.value = 0;
            })
        })

        // Active selected
        item.classList.toggle('selected');
        if(item.id === 'section-1'){
            //other
            document.querySelector('#range-section-2').classList.add('hide');
            document.querySelector('#range-section-3').classList.add('hide');
            document.querySelector('#range-section-4').classList.add('hide');
            
            //this
            document.querySelector('#range-section-1').classList.add('active');
            document.querySelector('#range-section-1').classList.remove('hide');

            document.querySelectorAll('.normalbtn').forEach((item) => {
                item.classList.add('normal');
            })
        }
        else if(item.id === 'section-2'){
            //other
            document.querySelector('#range-section-1').classList.add('hide');
            document.querySelector('#range-section-3').classList.add('hide');
            document.querySelector('#range-section-4').classList.add('hide');
            
            //this
            document.querySelector('#range-section-2').classList.add('active');
            document.querySelector('#range-section-2').classList.remove('hide');

            document.querySelectorAll('.normalbtn').forEach((item) => {
                item.classList.add('normal');
            })
        }
        else if(item.id === 'section-3'){
            //other
            document.querySelector('#range-section-1').classList.add('hide');
            document.querySelector('#range-section-2').classList.add('hide');
            document.querySelector('#range-section-4').classList.add('hide');

            //this
            document.querySelector('#range-section-3').classList.add('active');
            document.querySelector('#range-section-3').classList.remove('hide');

            document.querySelectorAll('.normalbtn').forEach((item) => {
                item.classList.add('normal');
            })
        }
        else if(item.id === 'section-4'){
            //other
            document.querySelector('#range-section-1').classList.add('hide');
            document.querySelector('#range-section-2').classList.add('hide');
            document.querySelector('#range-section-3').classList.add('hide');

            //this
            document.querySelector('#range-section-4').classList.add('active');
            document.querySelector('#range-section-4').classList.remove('hide');


            document.querySelectorAll('.normalbtn').forEach((item) => {
                item.classList.remove('normal');
            })
        }
    })
})


// Copy Button
copy.addEventListener('click', () => {
    copy.innerHTML = 'Copied!';
    setTimeout(() => {
        copy.innerHTML = 'Copy';
    }, 1200)



})



// ALL BORDERS
function allBorder(degrees){
    console.log(degrees)
    document.querySelectorAll(".all-variable").forEach((item) => {
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