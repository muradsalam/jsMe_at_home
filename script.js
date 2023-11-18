let hava = prompt('Write the tempereture.');
let netice;

if (hava <= '18') {
    netice = 'There is so cold. You need to go home.';
} else {
    netice = 'You can go to the see';
}

document.getElementById('murad').innerHTML = netice;