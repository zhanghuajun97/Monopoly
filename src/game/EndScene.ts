//游戏结束场景
class EndScene extends Scene{
    private againBtn:egret.Bitmap;
    private homeBtn:egret.Bitmap;

    protected onAddStage(){
        let stageW=this.stage.stageWidth;
        let stageH=this.stage.stageHeight;

        //生成背景图
        let bg3=Main.createBitmapByName('true1_jpg');
        this.addChild(bg3);
        bg3.width=stageW;
        bg3.height=stageH;
        console.log("游戏结束");
        
        var shape:egret.Shape=new egret.Shape();
        shape.graphics.beginFill(0xffffff);
        shape.graphics.drawRect(0,0,400,300);
        shape.graphics.endFill();
        shape.anchorOffsetX=shape.width/2;
        shape.x=stageW/2;
        shape.y=stageH/10;
        this.addChild(shape);

        //游戏结果文本
        var RedPaperScore:string=egret.localStorage.getItem("RedPaperScore");
        var DaBianScore:string=egret.localStorage.getItem("DaBianScore");
        var txt=new egret.TextField();
        this.addChild(txt);
        txt.width=stageW;
        txt.text="你抢到了"+RedPaperScore+"个红包\n\n"+"被"+DaBianScore+"坨大便砸中";
        txt.textAlign=egret.HorizontalAlign.CENTER;
        txt.y=stageH*0.2;
        txt.size=30;
        txt.textColor=0xff0000;

        //生成再玩一次按钮
        this.againBtn=Main.createBitmapByName("again_png");
        this.addChild(this.againBtn);
        this.againBtn.x=stageW/2;
        this.againBtn.y=stageH*0.6;
        this.againBtn.anchorOffsetX=this.againBtn.width/2;
        this.againBtn.anchorOffsetY=this.againBtn.height/2;
        this.againBtn.touchEnabled=true;
        this.againBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.againBtnCallback,this);
        this.againBtn.addEventListener(egret.TouchEvent.TOUCH_END,this.againBtnCallback,this);

        //生成返回主菜单按钮
        this.homeBtn=Main.createBitmapByName("back_png");
        this.addChild(this.homeBtn);
        this.homeBtn.x=stageW/2;
        this.homeBtn.y=stageH*0.7;
        this.homeBtn.anchorOffsetX=this.homeBtn.width/2;
        this.homeBtn.anchorOffsetY=this.homeBtn.height/2;
        this.homeBtn.touchEnabled=true;
        this.homeBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.homeBtnCallback,this);
        this.homeBtn.addEventListener(egret.TouchEvent.TOUCH_END,this.homeBtnCallback,this);
    }
    //返回主菜单按钮回调
    private homeBtnCallback(evt:egret.TouchEvent){
        if(evt.type==egret.TouchEvent.TOUCH_BEGIN){
            this.homeBtn.scaleX=1.08;
            this.homeBtn.scaleY=1.08;
        }else if(evt.type==egret.TouchEvent.TOUCH_END){
            this.homeBtn.scaleX=1;
            this.homeBtn.scaleY=1;
            let s5=new StartScene();
            SceneManager.getInstance().changeScene(s5);
        }
    }
    //返回按钮回调
    private againBtnCallback(evt:egret.TouchEvent){
        if(evt.type==egret.TouchEvent.TOUCH_BEGIN){
            this.againBtn.scaleX=1.08;
            this.againBtn.scaleY=1.08;
        }else if(evt.type==egret.TouchEvent.TOUCH_END){
            this.againBtn.scaleX=1;
            this.againBtn.scaleY=1;
            let s4=new GameScene();
            SceneManager.getInstance().changeScene(s4);
        }
    }
    protected onRemoveStage(){

    }
}