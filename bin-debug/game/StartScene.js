var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
//开始游戏场景
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartScene.prototype.onAddStage = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        //添加背景图
        var bg = Main.createBitmapByName('true_jpg');
        this.addChild(bg);
        bg.width = stageW;
        bg.height = stageH;
        //添加开始游戏按钮
        this.StartBtn = Main.createBitmapByName('start_png');
        this.addChild(this.StartBtn);
        this.StartBtn.x = stageW / 2;
        this.StartBtn.y = stageH / 3 * 2;
        this.StartBtn.anchorOffsetX = this.StartBtn.width / 2;
        this.StartBtn.anchorOffsetY = this.StartBtn.height / 2;
        this.StartBtn.touchEnabled = true;
        this.StartBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onChangeScene, this);
        this.StartBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onChangeScene, this);
        //生成帮助按钮
        this.help = Main.createBitmapByName('help_png');
        this.addChild(this.help);
        this.help.x = stageW / 2;
        this.help.y = stageH / 3 * 2 + 150;
        this.help.anchorOffsetX = this.help.width / 2;
        this.help.anchorOffsetY = this.help.height / 2;
        this.help.touchEnabled = true;
        this.help.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ToRule, this);
        this.help.addEventListener(egret.TouchEvent.TOUCH_END, this.ToRule, this);
    };
    //开始游戏按钮回调
    StartScene.prototype.onChangeScene = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            this.StartBtn.scaleX = 1.08;
            this.StartBtn.scaleY = 1.08;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            console.log("点击了开始游戏按钮，进入游戏场景");
            var s2 = new GameScene();
            SceneManager.getInstance().changeScene(s2);
        }
    };
    //帮助按钮回调
    StartScene.prototype.ToRule = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            this.help.scaleX = 1.08;
            this.help.scaleY = 1.08;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            this.help.scaleX = 1;
            this.help.scaleY = 1;
            //添加规则图片
            var rule = Main.createBitmapByName('rule_png');
            this.addChild(rule);
            rule.x = (this.stage.stageWidth - rule.width) / 2;
            rule.y = 100;
            //添加返回按钮
            this.back = Main.createBitmapByName('back_png');
            this.addChild(this.back);
            this.back.x = (this.stage.stageWidth - this.back.width) / 2;
            this.back.y = this.stage.stageHeight / 3 * 2 + 150;
            this.back.anchorOffsetX = this.width / 2;
            this.back.anchorOffsetY = this.height / 2;
            this.back.touchEnabled = true;
            this.back.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRemove, this);
            this.back.addEventListener(egret.TouchEvent.TOUCH_END, this.onRemove, this);
        }
    };
    //返回按钮回调
    StartScene.prototype.onRemove = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            this.back.scaleX = 1.08;
            this.back.scaleY = 1.08;
        }
        else {
            this.removeChildAt(3);
            this.removeChildAt(3);
        }
    };
    StartScene.prototype.onRemoveStage = function () {
    };
    return StartScene;
}(Scene));
__reflect(StartScene.prototype, "StartScene");
