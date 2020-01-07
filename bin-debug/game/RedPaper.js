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
var RedPaper = (function (_super) {
    __extends(RedPaper, _super);
    function RedPaper() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    RedPaper.prototype.init = function () {
        var redPaper = Main.createBitmapByName('red1_png');
        this.addChild(redPaper);
        redPaper.scaleX = 0.2;
        redPaper.scaleY = 0.2;
        redPaper.y = -30;
        var speedX = 20;
        var speedY = 20;
        this._speedX = speedX;
        this._speedY = speedY;
    };
    RedPaper.prototype.dropDown = function (deaths) {
        var x = this.x;
        var y = this.y;
        y += this._speedY;
        this.y = y;
    };
    return RedPaper;
}(egret.Sprite));
__reflect(RedPaper.prototype, "RedPaper");
