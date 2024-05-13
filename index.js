let cells = []
let timerToFall // таймер, за сколько фигура сдвигается вниз, при увеличении уровня уменьшается
let figure

//как сделать вывод фигуры - через класс? координаты, цвет, частота?

onload = function() {
    cells = document.getElementsByClassName('cell')
    figure = randomFigure()
    figure.addEventListener('')

}

function randomFigure() {
    let random = Math.round(Math.random() * 5)
    switch (random) {
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    case 5: return 5 }
//в зависимости от рандома выбирается фигура и передаётся в figure. каждый раз новая?
}

function randomFieldFullfilling() {
    //?
}

function lineDisappearing() {
    //проверить в массиве построчно, всё ли заполнено, если заполнено, линия исчезает, верхние сдвигаются вниз, счетчик сколько линий исчезло, чем больше, тем больше очков
}

function figureMove() {
    //в figure добавляется eventlistener, если в бок, то проверяется, не упирается ли в стенку, если вниз, то пропускается таймер и фигура резко свдигается на линию вниз, как лучше сделать?
}

function levelUp() {
    //выводится сообщение, игра на пару секунд становится на паузу, уменьшается таймер
}