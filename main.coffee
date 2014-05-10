
canvas = null
ctx = null


window.onload = () ->
    init()
    start()

    return undefined

init = () ->
    canvas = document.getElementById("can")
    ctx= canvas.getContext('2d')

start = () ->
    # setInterval(drawRect())
    document.addEventListener("mousemove",drawRect())

    return undefined

drawRect = () ->
    ctx.beginPath()
    ctx.fillRect(30,30,100,50)

    return undefined







