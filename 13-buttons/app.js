const main = document.querySelector('.main')

for (let i = 0; i<5 ; i++){
    const el = document.createElement('button');
    el.innerHTML = 'Нажми на меня'
    el.classList.add('btn')
    el.setAttribute (`data-id`, i)
    main.append(el)
}

let count = 0;
const countInHTML = document.createElement('div');
countInHTML.classList.add('count')
countInHTML.innerHTML = `Число нажатий : ${count}`
main.append(countInHTML)

let activeBtn = null;

function eventBtn (e){
    if (!e.target.classList.contains('btn')) return
    
    const target = e.target

    if (target === activeBtn) return

    if (activeBtn){
        activeBtn.innerHTML =`Нажми на меня`
    }
    if(e.target.classList.contains('btn')){
        count++
        countInHTML.innerHTML = `Число нажатий : ${count}`
        target.innerHTML = `Нажата!`;
        activeBtn = e.target;
    }
}

main.addEventListener('click',eventBtn)