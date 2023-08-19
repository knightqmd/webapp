class GameMap extends GameObject{
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
}