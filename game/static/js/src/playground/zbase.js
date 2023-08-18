class GamePlayground{
    constructor(root){
        this.root = root;
        this.$playground = $(`
        <div class="game-playground">
        这是一个游戏界面
        </div>
        `);
        this.hide();
        this.root.$game.append(this.$playground);
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