




function detectCollision(objects, point) {
     const {x,y} = point;
return objects.find(item => {
    return x >= item.x && x <= item.x + item.width &&
            y >= item.y && y <= item.y + item.height;
})

}

const myObjects = [


    {x:  10, y: 20, width: 30, height: 30},


    {x: -40, y: 20, width: 30, height: 30},


    {x:   0, y:  0, width: 10, height:  5}


]

console.log(detectCollision(myObjects, {x: 4, y: 2}))