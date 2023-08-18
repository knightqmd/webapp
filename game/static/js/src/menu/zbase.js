class GameMenu{
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