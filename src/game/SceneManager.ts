class SceneManager{
    public constructor(){

    }

    private static _manager:SceneManager;
    public static getInstance(){
        if(!this._manager){
            this._manager=new SceneManager();
        }
        return this._manager;
    }
    private _currentScene:Scene;
    public gameStage:egret.DisplayObjectContainer;//舞台

    //舞台管理类
    public changeScene(newScene:Scene){
        if(this._currentScene){
            this.gameStage.removeChild(this._currentScene);
            this._currentScene=null;
        }
        this.gameStage.addChild(newScene);
        this._currentScene=newScene;
    }
}