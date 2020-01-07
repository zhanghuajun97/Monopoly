abstract class Scene extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddStage,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveStage,this);
    }

    protected abstract onAddStage();
    protected abstract onRemoveStage();
}