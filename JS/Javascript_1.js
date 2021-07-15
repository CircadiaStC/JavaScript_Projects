function Art_Function() {
    var Artist_Output;
    var Artists=document.getElementById("Artist_Input").value;
    var Artist_String=" is a great artist!";
    switch(Artists) {
        case "Pablo Picasso":
            Artist_Output="Pablo Picasso"+ Artist_String;
        break;
        case "Henri Matisse":
            Artist_Output="Henri Matisse"+ Artist_String;
        break;
        case "Mark Rothko":
            Artist_Output="Mark Rothko"+ Artist_String;
        break;
        case "Salvador Dali":
            Artist_Output= "Salvador Dali"+ Artist_String;
        break;
        case "Frida Kahlo":
            Artist_Output= "Frida Kahlo"+ Artist_String;
        break;
        case  "Jackson Pollock":
            Artist_Output= "Jackson Pollock"+ Artist_String;
        break;
        default:
            Artist_Output= "I know, other artists are great, but choose only from this list.";
    }
    document.getElementById("Output").innerHTML= Artist_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML="The text has changed!";
}

function draw()  {
    var canvas=document.getElementById("canvas");
    if (canvas.getContext)  {
        var ctx=canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80,130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fillStyle= 'cyan';
    ctx.fill();
        
    }
}

function gradient() {
    var canvas=document.getElementById("gradient");
    if (canvas.getContext)  {
        var ctx=canvas.getContext("2d");

        var grad= ctx.createLinearGradient(0, 0, 170, 0);
        grad.addColorStop(0, "black");
        grad.addColorStop(0.5, "teal");
        grad.addColorStop(1, "cyan");
        ctx.fillStyle= grad;
        ctx.fillRect(0, 0, 500, 250);

    }
}



