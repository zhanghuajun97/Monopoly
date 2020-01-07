var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
    }
    SceneManager.getInstance = function () {
        if (!this._manager) {
            this._manager = new SceneManager();
        }
        return this._manager;
    };
    //舞台管理类
    SceneManager.prototype.changeScene = function (newScene) {
        if (this._currentScene) {
            this.gameStage.removeChild(this._currentScene);
            this._currentScene = null;
        }
        this.gameStage.addChild(newScene);
        this._currentScene = newScene;
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
