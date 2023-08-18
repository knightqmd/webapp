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
}