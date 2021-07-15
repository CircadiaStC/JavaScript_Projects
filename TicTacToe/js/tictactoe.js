//keeps track of whose turn it is.
let activePlayer='X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares=[];

function placeXOrO(squareNumber)    {
    //ensures a square hasn't been selected already
    //The .some() method is used to check each element of array to see if it contains the square number clicked.
    if (!selectedSquares.some(element => element.includes(squareNumber)))   {
        let select = document.getElementById(squareNumber);
    if (activePlayer === 'X')   {
        //If activePlayer = X the x.png is placed in HTML.
        select.style.backgroundImage= 'url("images/starfleet.png")';
    } else {
        select.style.backgroundImage= 'url("images/tribble.png")';
    }
    //squareNumber and activePLayer are concatenated together and added to array.
    selectedSquares.push(squareNumber + activePlayer);
    checkWinConditions();
    if (activePlayer === 'X')   {
        activePlayer = 'O';
    } else {
        activePlayer="X";
    }

    audio('./media/ding.flac');
    if (activePlayer === 'O'){
        disableClick();
        setTimeout(function (){ computersTurn(); }, 1000)
    }
    return true;
 }
 // Random square is selected
 function computersTurn()   {
     let success = false;
     let pickASquare;
     while(!success) {
         pickASquare= String(Math.floor(Math.random() * 9));
         if (placeXOrO(pickASquare)){
             placeXOrO(pickASquare);
             success = true;
         };
     }
 }

 function checkWinConditions()  {
     if     (arrayIncludes('0X', '1X', '2X'))  { drawWinLine(50, 100, 558, 100) }
     else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
     else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
     else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
     else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
     else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
     else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
     else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
     else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
     else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
     else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
     else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
     else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
     else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
     else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
     else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
     else if (selectedSquares.length >= 9)  {
         audio('./media/tribble.wav');
         setTimeout(function () { resetGame(); }, 1000);
     }

     //checks if an array includes 3 strings
     function arrayIncludes(squareA, squareB, squareC)  {
         const a = selectedSquares.includes(squareA)
         const b = selectedSquares.includes(squareB)
         const c = selectedSquares.includes(squareC)
         if (a === true && b === true && c === true)  { return true}
     }
    }  
}   

function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function()   {body.style.pointerEvents = 'auto';}, 1000);
}

function audio(audioURL)    {
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2)    {
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        //stores temporary axis data updated in animation loop
        x = x1,
        y = y1;

function animateLineDrawing()   {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608, 608)
    c.beginPath();
    c.moveTo(x1, y1)
    c.lineTo(x,y)
    c.lineWidth = 10;
    c.strokeStyle = 'red';
    c.stroke();
    //condition checks if we've reached the endpoint
    if (x1 <= x2 && y1 <= y2)   {
        if (x < x2) {  x += 10; }
        if (y < y2 ) { y += 10; }
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    }
    if (x1 <= x2 && y1 >= y2)   {
        if (x < x2) { x += 10; }
        if (y > y2) { y -= 10; }
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }
}

function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
}

disableClick();
audio('./media/badum.wav');
animateLineDrawing();
setTimeout(function () { clear(); resetGame(); }, 1000);

}

function resetGame()    {
    //for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        //This removes elements backgroundImage
        square.style.backgroundImage = ''
    }
    //This resets our array so it is emoty and we can start over
    selectedSquares = [];
}

