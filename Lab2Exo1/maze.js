const boundries = document.querySelectorAll('.boundary');
const end = document.getElementById('end');
const start = document.getElementById('start');

boundries.forEach(boundry =>{
    boundry.addEventListener('mouseover', ()=>{
        boundries.forEach(bound =>{ 
            bound.style.border = '2px solid red';
        })
        end.style.pointerEvents = 'none';
    })
})

end.addEventListener('mouseover', ()=>{
    alert('You Win!');
})

start.addEventListener('click', ()=>{
    boundries.forEach(bound =>{ 
        bound.style.border = '1px solid black';
    })
    end.style.pointerEvents = 'auto';
})

