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
}