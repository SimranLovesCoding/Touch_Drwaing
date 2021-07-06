canvas = document.getElementById("mycanvas5")
ctx = canvas.getContext("2d")
color = "gold"
width = 3

width_screen = screen.width
new_canvas_width = screen.width - 70
new_canvas_height = screen.height - 100

if (width_screen < 992) {
    document.getElementById("mycanvas5").width=new_canvas_width
    document.getElementById("mycanvas5").height=new_canvas_height
    document.body.style.overflow="hidden"
}


canvas.addEventListener("touchstart",ts)
function ts(e) {
    lastx = e.touches[0].clientX - canvas.offsetLeft
    lasty = e.touches[0].clientY - canvas.offsetTop
    console.log("Yay_You_Touched_The_Canvas")
    color = document.getElementById("color_input").value
    width = document.getElementById("width_input").value
}

canvas.addEventListener("touchmove",tm)
function tm(e) {
    currentx = e.touches[0].clientX - canvas.offsetLeft
    currenty = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.moveTo(lastx, lasty)
    ctx.lineTo(currentx, currenty)
    ctx.stroke()
    lastx = currentx
    lasty = currenty
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
