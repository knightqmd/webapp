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
}class Game{
    constructor(id){
        this.id = id
        this.$game = $('#' +id)
        this.menu = new GameMenu(this)
        console.log("create game web")
    }
}