const canvas = document.querySelector('canvas'),
fillColor = document.querySelector('#fill-color'),
sizeSlider = document.querySelector("#size-slider"),
colorBtns = document.querySelectorAll(".colors .option"),
colorPicker = document.querySelector('#color-picker'),
eraser = document.querySelector('#eraser'),
toolsBtn = document.querySelectorAll('.tool');
ctx = canvas.getContext('2d');

let prevMouseX, prevMouseY,snapshot,
isDrawing = false,
selectedTool = 'brush',
brushWidth = 5,
selectedColor = '#000';

window.addEventListener('load', () =>{
    //setting canvas width/height .. ofsetwith height return viewable width and height of an element.

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

const drawRect = (e) =>{
    //if fillColor is not checked draw a rect with birder else draw react with background.

    if(!fillColor.checked){
        return  ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX-e.offsetX, prevMouseY-e.offsetY);
    }else{
       ctx.fillRect(e.offsetX, e.offsetY, prevMouseX-e.offsetX, prevMouseY-e.offsetY);
    }

}

const drawCircle = (e) =>{
    ctx.beginPath();//creating a new path to draw circle
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX),2) + Math.pow((prevMouseY - e.offsetY),2));//getting radius for circle according to the mouse pointer
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2*Math.PI);//creating circle according to the mouse pointer.
    fillColor.checked ? ctx.fill() : ctx.stroke(); //if fillcolor checked fill circle else draw border cirlce.

};

const drawTriangle = (e) =>{
    ctx.beginPath(); //creating a new path to draw triangle
    ctx.moveTo(prevMouseX, prevMouseY);//moving triangle to the mouse pointer
    ctx.lineTo(e.offsetX, e.offsetY);//creating first line according to the mouse pointer.
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);//creating bottom line of triangle
    ctx.closePath();
    fillColor.checked ? ctx.fill() : ctx.stroke();//if fillColor is checked fill || else draw border trinagle

}

const startDraw = (e) =>{
    isDrawing = true;
    prevMouseX = e.offsetX;//passing current mouseX position as prevMouseX value
    prevMouseY = e.offsetY;// passing current mouseY position as prevMouseY vlaue;
    ctx.beginPath(); //creating new path to draw
    ctx.lineWidth = brushWidth;//passing brushSize as line width
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    snapshot = ctx.getImageData(0,0, canvas.width, canvas.height);//coping canvas data and passing as snapsshot value this avoids dragging the image

}
const drawing = (e) =>{
    if(!isDrawing) return; //if isDrawing is false return from here.
    ctx.putImageData(snapshot, 0,0)//adding coping canvas data on this canvas
    if(selectedTool === "brush" || selectedTool === "eraser"){
        ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;//if selected color tool is eraser then set strokeStyle to white // to paint white color on the existing canvas content else set the stroke color to selected color.
        
        ctx.lineTo(e.offsetX, e.offsetY);// creating line according to the mouse pointer
        ctx.stroke();// drawing / filling line color;
    }else if(selectedTool === "rectangle"){
        drawRect(e);
    }else if(selectedTool === "circle"){
        drawCircle(e);
    }else{
        drawTriangle(e);
    }

};

toolsBtn.forEach(btn => {
   btn.addEventListener('click', () =>{//adding click event to all tool option 
    document.querySelector('.options .active').classList.remove('active');//removing active class from previous option and adding an current clicked option

    btn.classList.add('active')
    selectedTool = btn.id;
   })
});

colorBtns.forEach(btn =>{
   btn.addEventListener('click', () =>{
    document.querySelector('.colors .selected').classList.remove('selected');
    btn.classList.add('selected');
    selectedColor = (window.getComputedStyle(btn).getPropertyValue("background-color"));//passing background color;
   })
});

colorPicker.addEventListener('change', () =>{
    colorPicker.parentElement.style.background = colorPicker.value;
    colorPicker.parentElement.click();
});

sizeSlider.addEventListener('change', () => brushWidth = sizeSlider.value);//passing slider value as brushSize;
canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', () =>isDrawing = false);



// console.log(colorPicker);