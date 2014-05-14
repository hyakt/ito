
canvas = null
ctx = null

LINE_MAX_SIZE = 10
mousePoint = {x:0,y:0}
line = [0..LINE_MAX_SIZE]


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
    
    return undefined



mouseMoveListener = (e) ->
    rect = e.target.getBoundingClientRect()

    mousePoint.x = e.clientX - rect.left
    mousePoint.y = e.clientY - rect.top

    ctx.clearRect(0,0,canvas.width,canvas.height)

    for i in [0..LINE_MAX_SIZE]
        
        if i == 0
            line[0] = {x:mousePoint.x, y:mousePoint.y}

        else
            ctx.fillRect(mousePoint.x + i,  line[i-1].y, 1, 1)
            ctx.fillRect(mousePoint.x - i,  line[i-1].y, 1, 1)

            console.log line[i-1]

    for i in [LINE_MAX_SIZE..1] by -1
        line[i] = line[i-1] 
    

    return undefined








