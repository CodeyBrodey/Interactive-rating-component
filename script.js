const numbers = document.querySelectorAll('.rating-numbers');
const numbersArray = Array.from(numbers);

const setToActive = (event) => {
    const active = event.target;
    const unactive = numbersArray.filter(number => {
        return (number !== active)
    })
    unactive.forEach(unactiveEl => {
        unactiveEl.classList.remove('selected-rating')
        unactiveEl.classList.add('rating-numbers')
    })
    active.classList.add('selected-rating');
    active.classList.remove('rating-numbers')
}

numbers.forEach(number => {
    number.addEventListener('click', setToActive)
})


const submission = document.querySelector('.submit-button');

const getSelectedRating = (event) => {
    const cardSelection = document.querySelector('.card-selection')
    const cardSubmitted = document.querySelector('.card-submitted')
    const selectedNumber = document.querySelector('.selected-rating')
    const feedbackVar = document.querySelector('.feedback-var')
    cardSelection.classList.add('not-visible')
    cardSubmitted.classList.remove('not-visible')
    feedbackVar.textContent = selectedNumber.textContent;
}

submission.addEventListener('click', getSelectedRating);
