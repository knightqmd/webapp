class Game{
    constructor(id){
        this.id = id
        this.$game = $('#' +id)
        this.menu = new GameMenu(this)
        this.playground = new GamePlayground(this)
        this.$download = new GameDownload(this)
        console.log("create game web")
    }
}