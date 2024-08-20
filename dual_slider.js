const sections = [
    { color1: '#ff6b6b', color2: '#1dd1a1', img: '0.png' },
    { color1: '#feca57', color2: '#54a0ff', img: '1.png' },
    { color1: '#ff9ff3', color2: '#00d2d3', img: '2.png' },
    { color1: '#48dbfb', color2: '#f368e0', img: '3.png' },
    { color1: '#1dd1a1', color2: '#ff6b6b', img: '4.png' },
    { color1: '#ff9ff3', color2: '#00d2d3', img: '5.png' }
];

function changeSlide(index) {
    document.getElementById('section1').style.backgroundColor = sections[index].color1;
    document.getElementById('section2').style.backgroundColor = sections[index].color2;
    document.getElementById('heroImage').src = sections[index].img;
}