console.log('i happened')

const cardList = document.querySelector( '.cardList');

addCard( 'test');

function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}
