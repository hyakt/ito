
canvas = null
ctx = null



window.onload = () ->
    init()
    start()

    return undefined

init = () ->
    canvas = document.getElementById("can")
    ctx= canvas.getContext('2d')
    canvas.onmousemove = mouseMoveListener

    return undefined

start = () ->
    # setInterval(drawRect())
    document.addEventListener("mousemove",drawRect())

    return undefined

drawRect = () ->
    ctx.beginPath()
    ctx.fillRect(30,30,100,50)

    return undefined



mouseMoveListener = (e) ->
    rect = e.target.getBoundingClientRect
    console.log e.clientX
    console.log e.clientY

    return undefined








