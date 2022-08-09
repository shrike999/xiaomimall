function animate(obj, tgt, callback){
    clearInterval(obj.timer)               
    obj.timer = setInterval(function(){
        let step = (tgt > obj.offsetLeft)? Math.ceil((tgt - obj.offsetLeft)/10):Math.floor((tgt - obj.offsetLeft)/10)
        obj.style.left = obj.offsetLeft + step + 'px'
        if(obj.offsetLeft == tgt){
            if(callback)
                callback()
            clearInterval(obj.timer);
        }
            
    }, 15)
}