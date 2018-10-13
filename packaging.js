window.zlcdom = {}

zlcdom.getSiblings=function(node) {/*API*/
    var allChildren = node.parentNode.children
    var array = {
        length: 0
    }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
    return array
}
// console.log(getSiblings(item3))






zlcdom.addClass = function (node,classes) {
    classes.forEach((value)=>node.classList.add(value))
}


zlcdom.getSiblings = getSiblings
zlcdom.addClass = addClass
zlcdom.getSiblings(items)
zlcdom.addClass(items,['a','b','c'])
