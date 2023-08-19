

let GAME_OBJECTS = [];

class GameObject{
    constructor(){
        GAME_OBJECTS.push(this);
        this.has_start_is_called = false; //是否调用过start
        this.timedelta = 0; //每一帧的时间差
    }

    start(){ //初始化第一帧

    }

    update(){ //每一帧都会调用
    
    }
    on_destory(){ //销毁时调用
        
    }

    destory(){ //销毁, 从GAME_OBJECTS中移除
        for(let i=0;i<GAME_OBJECTS.length;i++){
            if(GAME_OBJECTS[i] == this){
                GAME_OBJECTS.splice(i,1);
                break;
            }
        }
    }
}

let last_timestamp = 0;
let GAME_ANIMATIONS = function(timestamp){
    for(let i=0;i<GAME_OBJECTS.length;i++){
        if(GAME_OBJECTS[i].has_start_is_called == false){
            GAME_OBJECTS[i].start();
            GAME_OBJECTS[i].has_start_is_called = true;
        }else{
            GAME_OBJECTS[i].timedelta = timestamp - last_timestamp;
            GAME_OBJECTS[i].update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(GAME_ANIMATIONS);
}

requestAnimationFrame(GAME_ANIMATIONS);
