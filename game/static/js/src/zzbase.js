class Game{
    constructor(id){
        this.id = id
        this.$game = $('#' +id)
        this.menu = new GameMenu(this)
        console.log("create game web")
    }
}