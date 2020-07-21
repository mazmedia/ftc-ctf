document.querySelector('#convertctf').addEventListener('click', () => {
    const celsius = document.querySelector('#ctfi').value
    const equation = Math.floor(celsius * 9 / 5 + 32)

    document.querySelector('#ctfoutput').textContent = `${equation} degrees fahrenheit`
})