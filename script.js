const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score')
const yourScoreSpan = document.querySelector('[data-your-score')
const SELECTIONS = [
    {
        name: 'rock',
        emogi: '👊',
        beats: 'scissor'
    },
    {
        name: 'paper',
        emogi:'✋',
        beats: 'rock'
    },
    {
        name: 'scissor',
        emogi: '✌️',
        beats: 'paper'
    }
    ]

selectionButtons.forEach(selectionButton  => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})