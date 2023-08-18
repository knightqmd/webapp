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
}class GamePlayground{
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
}class Game{
    constructor(id){
        this.id = id
        this.$game = $('#' +id)
        this.menu = new GameMenu(this)
        this.playground = new GamePlayground(this)
        this.$download = new GameDownload(this)
        console.log("create game web")
    }
}