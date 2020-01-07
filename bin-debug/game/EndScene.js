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
//游戏结束场景
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EndScene.prototype.onAddStage = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        //生成背景图
        var bg3 = Main.createBitmapByName('true1_jpg');
        this.addChild(bg3);
        bg3.width = stageW;
        bg3.height = stageH;
        console.log("游戏结束");
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xffffff);
        shape.graphics.drawRect(0, 0, 400, 300);
        shape.graphics.endFill();
        shape.anchorOffsetX = shape.width / 2;
        shape.x = stageW / 2;
        shape.y = stageH / 10;
        this.addChild(shape);
        //游戏结果文本
        var RedPaperScore = egret.localStorage.getItem("RedPaperScore");
        var DaBianScore = egret.localStorage.getItem("DaBianScore");
        var txt = new egret.TextField();
        this.addChild(txt);
        txt.width = stageW;
        txt.text = "你抢到了" + RedPaperScore + "个红包\n\n" + "被" + DaBianScore + "坨大便砸中";
        txt.textAlign = egret.HorizontalAlign.CENTER;
        txt.y = stageH * 0.2;
        txt.size = 30;
        txt.textColor = 0xff0000;
        //生成再玩一次按钮
        this.againBtn = Main.createBitmapByName("again_png");
        this.addChild(this.againBtn);
        this.againBtn.x = stageW / 2;
        this.againBtn.y = stageH * 0.6;
        this.againBtn.anchorOffsetX = this.againBtn.width / 2;
        this.againBtn.anchorOffsetY = this.againBtn.height / 2;
        this.againBtn.touchEnabled = true;
        this.againBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.againBtnCallback, this);
        this.againBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.againBtnCallback, this);
        //生成返回主菜单按钮
        this.homeBtn = Main.createBitmapByName("back_png");
        this.addChild(this.homeBtn);
        this.homeBtn.x = stageW / 2;
        this.homeBtn.y = stageH * 0.7;
        this.homeBtn.anchorOffsetX = this.homeBtn.width / 2;
        this.homeBtn.anchorOffsetY = this.homeBtn.height / 2;
        this.homeBtn.touchEnabled = true;
        this.homeBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.homeBtnCallback, this);
        this.homeBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.homeBtnCallback, this);
    };
    //返回主菜单按钮回调
    EndScene.prototype.homeBtnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            this.homeBtn.scaleX = 1.08;
            this.homeBtn.scaleY = 1.08;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            this.homeBtn.scaleX = 1;
            this.homeBtn.scaleY = 1;
            var s5 = new StartScene();
            SceneManager.getInstance().changeScene(s5);
        }
    };
    //返回按钮回调
    EndScene.prototype.againBtnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            this.againBtn.scaleX = 1.08;
            this.againBtn.scaleY = 1.08;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            this.againBtn.scaleX = 1;
            this.againBtn.scaleY = 1;
            var s4 = new GameScene();
            SceneManager.getInstance().changeScene(s4);
        }
    };
    EndScene.prototype.onRemoveStage = function () {
    };
    return EndScene;
}(Scene));
__reflect(EndScene.prototype, "EndScene");
