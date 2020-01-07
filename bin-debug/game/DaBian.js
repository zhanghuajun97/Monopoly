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
var DaBian = (function (_super) {
    __extends(DaBian, _super);
    function DaBian() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    DaBian.prototype.init = function () {
        var DaBian = Main.createBitmapByName('dabian_png');
        this.addChild(DaBian);
        DaBian.scaleX = 0.6;
        DaBian.scaleY = 0.6;
        DaBian.y = -30;
        var speedX = 20;
        var speedY = 20;
        this._speedX = speedX;
        this._speedY = speedY;
    };
    DaBian.prototype.dropDown = function (deaths) {
        var x = this.x;
        var y = this.y;
        y += this._speedY;
        this.y = y;
    };
    return DaBian;
}(egret.Sprite));
__reflect(DaBian.prototype, "DaBian");
