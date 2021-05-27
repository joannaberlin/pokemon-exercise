let count = 1

function render(){
    let container = document.getElementById('pokemon')
    container.innerHTML = `<img class="poke" src ="https://tinyurl.com/ironhack-pokemons/${count}.svg">` 
}

let prev = document.getElementById('prev')
prev.onclick = function(){
    if (count > 1){
        count= count -1
        render()
    }   
}

let next = document.getElementById('next')
next.onclick = function(){
    if (count < 650){
        count= count +1
        render()
    }    
}

render();
