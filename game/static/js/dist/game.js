class GameDownload{
    constructor(root){
        this.root = root;
        this.$download = $(`
        <div class="game-download">
            link for the game!
        </div>
        `);
        this.hide();
        this.root.$game.append(this.$download);
    }
    show(){
        this.$download.show();
    }

    hide(){
        this.$download.hide();
    }

    start(){
        this.show();
    }
}class GameMenu{
    constructor(root){
        this.root = root
        this.$menu = $(`
        <div class="game-menu">
            <div class="game-menu-field">
                <div class="game-menu-field-download" data-hint="click here download Linux image for challenge :)">
                    Download
                </div>
                <div class="game-menu-field-related-resources">
                    Related
                </div>
                <div class="game-menu-field-check">
                    Check
                </div>
                <div class="game-menu-field-settings">
                    Settings
                </div>
            </div>
        </div>
        `);
        this.root.$game.append(this.$menu);
        this.$download = this.$menu.find(".game-menu-field-download");
        this.$check = this.$menu.find(".game-menu-field-check");
        this.$settings = this.$menu.find(".game-menu-field-settings");
        this.$relatedResources = this.$menu.find(".game-menu-field-related-resources");

        console.log("create game menu")

        this.start();
    }
    start(){
        this.add_listener();
    }
    add_listener(){
        let outer_this = this;
        this.$download.click(function(){
            console.log("download");
            outer_this.root.menu.hide();
            outer_this.root.$download.show();
        });

        this.$relatedResources.click(function(){
            console.log("related resources");
        });

        this.$check.click(function(){
            console.log("check");
            outer_this.root.menu.hide();
            outer_this.root.playground.show();
        });

        this.$settings.click(function(){
            console.log("settings");
        });
    }
    hide(){
        this.$menu.hide();
    }
    show(){
        this.$menu.show();
    }
}

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
class GamePlayground{
    constructor(root){
        this.root = root;
        this.$playground = $(`
        <div class="game-playground">
        this is playground
        </div>
        `);
        this.root.$game.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        console.log("playground"+this.width);


        this.gamemap = new GameMap(this);
        this.hide();

        this.start();
    }

    show(){  // 显示游戏界面
        this.$playground.show();
    }

    hide(){  // 隐藏游戏界面
        this.$playground.hide();
    }
    
    start(){   // todo
        this.show();
    }
}class GameMap extends GameObject{
    constructor(playground){
        super();
        this.playground = playground;
        this.$canvas = $("<canvas></canvas>");
        this.ctx = this.$canvas[0].getContext("2d");
        console.log("gamemap_playground:"+this.playground.width);
        this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;
        this.playground.$playground.append(this.$canvas);

    }
    start(){   
    }
    update(){
        this.render();
    }
    render(){
        this.ctx.fillStyle = "rgb(0,0,0))";
        this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
    }
}export class Game{
    constructor(id){
        this.id = id
        this.$game = $('#' +id)
        this.menu = new GameMenu(this)
        this.playground = new GamePlayground(this)
        this.$download = new GameDownload(this)
        console.log("create game web")
    }
}