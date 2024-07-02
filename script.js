function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 15)];
    }
    return color;
}

function changeBackground() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    document.getElementById('gradient-code').innerText = gradient;
}
