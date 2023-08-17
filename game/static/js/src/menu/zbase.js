class GameMenu{
    constructor(root){
        this.root = root
        this.$menu = $(`
        <div class="game-menu">
        
        </div>
        `);
        this.root.$game.append(this.$menu);
        console.log("create game menu")
    }
}