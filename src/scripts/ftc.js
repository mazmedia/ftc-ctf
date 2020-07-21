document.querySelector('#convertftc').addEventListener('click', () => {
    const fahrenheight = document.querySelector('#ftci').value
    const equation = Math.floor((fahrenheight - 32) * 5 / 9)

    document.querySelector('#ftcoutput').textContent = `${equation} degrees celsius`
})