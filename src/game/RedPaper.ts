class RedPaper extends egret.Sprite{
    public constructor(){
        super();
        this.init();
    }
    private redPaper:egret.Bitmap;
    private _speedX:number;
    private _speedY:number;
    private init(){
        var redPaper=Main.createBitmapByName('red1_png');
        this.addChild(redPaper);

        redPaper.scaleX=0.2;
        redPaper.scaleY=0.2;
        redPaper.y=-30;
       
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