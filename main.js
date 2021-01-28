let num_card = ''


document.querySelector('.card_number').oninput = function (event) {
    num_card = event['originalTarget']['value']

    console.log(event.data);

    if (
        (num_card.length == 4 && event.data != null) ||
        (num_card.length == 9 && event.data != null) ||
        (num_card.length == 14 && event.data != null)) {
        num_card += ' '
    }

    if ((num_card.replace(/\s+/g, '')).length < 6) {
        defaultStyle()
    }

    if ((num_card.replace(/\s+/g, '')).length == 6) {
        defineCard(num_card)
    }

    if (event['originalTarget']['value'] == null) {
        console.log('!!!');
    }

    document.querySelector('.card_number').value = num_card

}


function defineCard(text) {
    console.log(text.replace(/\s+/g, ''));

    let cardInfo = new CardInfo(text.replace(/\s+/g, '') + '0000000000');

    document.querySelector('#logo').src = './node_modules/card-info/dist/banks-logos/' + (cardInfo.bankLogo).split('/')[5];
    document.querySelector('#brand').src = './node_modules/card-info/dist/brands-logos/' + (cardInfo.brandLogo).split('/')[5];
    document.querySelector('#brand').alt = cardInfo.brandAlias;
    document.querySelector('.card').style.backgroundColor = cardInfo['backgroundColors'][1];
    document.querySelector('.card_inside').style.borderColor = cardInfo['backgroundColors'][0];
    document.querySelector('.card_inside').style.backgroundColor = cardInfo['backgroundColors'][0];
    document.querySelector('.card').style.borderColor = cardInfo['backgroundColors'][1];
    document.querySelector('.line').style.backgroundColor = '#000';
    document.querySelector('.card_number').style.top = '90px';
}

function defaultStyle() {
    document.querySelector('#logo').src = '';
    document.querySelector('#brand').src = '';
    document.querySelector('#brand').alt = '';
    document.querySelector('.card').style.backgroundColor = '#ececec';
    document.querySelector('.card').style.borderColor = '#b4b4b4';
    document.querySelector('.card_inside').style.borderColor = '#b4b4b4';
    document.querySelector('.card_inside').style.backgroundColor = '#fff';
    document.querySelector('.line').style.backgroundColor = '#c0c0c0';
    document.querySelector('.card_number').style.top = '30px';
}

function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.3)';
    }
    throw new Error('Bad Hex');
}