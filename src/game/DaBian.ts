class DaBian extends egret.Sprite{
    public constructor(){
        super();
        this.init();
    }
    private redPaper:egret.Bitmap;
    private _speedX:number;
    private _speedY:number;
    private init(){
        var DaBian=Main.createBitmapByName('dabian_png');
        this.addChild(DaBian);

        DaBian.scaleX=0.6;
        DaBian.scaleY=0.6;
        DaBian.y=-30;
       

        var speedX=20;
        var speedY=20;
        this._speedX=speedX;
        this._speedY=speedY;

    }
    public dropDown(deaths:Array<any>){
        var x=this.x;
        var y=this.y;
        y+=this._speedY;
        this.y=y;
    }

    
}