//游戏场景
class GameScene extends Scene{
    private RedPaperScore:egret.TextField;//红包分数
    private DaBianScore:egret.TextField;//大便分数
    private basket:egret.Bitmap;//篮子
    private timeText:egret.TextField;//计时文本
    private timer:egret.Timer;//红包和大便掉下计时器
    private RedPaperTimer:egret.Timer;//红包掉落计时器
    private redPaper:egret.Bitmap;//红包

    private deaths:Array<any>;
    private deaths1:Array<any>;
    private balls1:Array<any>;
    private balls2:Array<any>;
    private RedPapers:Array<any>;
    private DaBians:Array<any>;

    private score1:number=0;
    private score2:number=0;
    private nowscore:number;
    private j:number=0;

    protected onAddStage(){
        let stageW=this.stage.stageWidth;
        let stageH=this.stage.stageHeight;
        //添加背景图
        let bg=Main.createBitmapByName('true1_jpg');
        this.addChild(bg);
        bg.width=stageW;
        bg.height=stageH;
        //添加红包分数文本
        this.RedPaperScore=new egret.TextField();
        this.addChild(this.RedPaperScore);
        this.RedPaperScore.size=40;
        this.RedPaperScore.y=20;
        this.RedPaperScore.textColor=0x0FB20A;
        this.RedPaperScore.text='红包：0';
        //添加大便分数文本
        this.DaBianScore=new egret.TextField();
        this.addChild(this.DaBianScore);
        this.DaBianScore.size=40;
        this.DaBianScore.y=80;
        this.DaBianScore.textColor=0x0FB20A;
        this.DaBianScore.text="大便：0";
        //生成篮子
        this.basket=Main.createBitmapByName('lanzi_png');
        this.addChild(this.basket);
        this.basket.x=stageW/2;
        this.basket.y=stageH-this.basket.height/2;
        this.basket.scaleX=0.6;
        this.basket.touchEnabled=true;
        this.basket.anchorOffsetX=this.basket.width/2;
        this.basket.anchorOffsetY=this.basket.height/2;
        this.basket.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this);
        //生成计时器文本
        this.timeText=new egret.TextField();
        this.timeText.width=stageW;
        this.timeText.y=100;
        this.timeText.textAlign=egret.HorizontalAlign.CENTER;
        this.timeText.size=80;
        this.timeText.textColor=0x0000ff;
        this.timeText.text="30'00'";
        this.addChild(this.timeText);
        this.createTimer();

        this.RedPapers=[];
        this.balls1=[];

        this.DaBians=[];
        this.balls2=[];
        //红包大便计时器
        this.timer=new egret.Timer(50,0);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        this.timer.start();

        this.deaths=[];
        this.deaths1=[]
    }
    
    private timerFunc(){
        this.j++;
        //生成红包
        if(this.j%6==0){
            let redPaper=new RedPaper();
            redPaper.x=Math.floor(Math.random()*this.stage.stageWidth+1);
            this.addChild(redPaper);
            this.RedPapers.push(redPaper);
            this.balls1.push(redPaper);
        }
        //生成大便
        if(this.j%10==0){
            let daBian=new DaBian();
            daBian.x=Math.floor(Math.random()*this.stage.stageWidth+1);
            this.addChild(daBian);
            this.DaBians.push(daBian);
            this.balls2.push(daBian);
        }
        //大便掉落
        for(var k=0;k<this.DaBians.length;k++){
            if(this.num>=20){
                this.timer.delay=50;
                this.DaBians[k].dropDown(this.deaths);
            }else if(this.num<20&&this.num>10){
                this.timer.delay=30;
                this.DaBians[k].dropDown(this.deaths);
            }else if(this.num<=10){
                this.timer.delay=20;
                this.DaBians[k].dropDown(this.deaths);
            }
        }
        //红包掉落
        for(var i=0;i<this.RedPapers.length;i++){
            if(this.num>=20){
                this.timer.delay=50;
                this.RedPapers[i].dropDown(this.deaths);
            }else if(this.num<20&&this.num>10){
                this.timer.delay=30;
                this.RedPapers[i].dropDown(this.deaths);
            }else if(this.num<=10){
                this.timer.delay=20;
                this.RedPapers[i].dropDown(this.deaths);
            }
            
        }
        //红包判断碰撞
		for(var j = 0; j < this.balls1.length; j++){
            if((this.balls1[j].y>(this.basket.y-this.basket.height/2))){
                 if((this.basket.x-this.basket.width/2)<this.balls1[j].x&&this.balls1[j].x<(this.basket.x+this.basket.width/2)){
                    this.score1++;
                    this.RedPaperScore.text="红包："+this.score1;
                    var key:string="RedPaperScore";
                    var value:string=""+this.score1;
                    egret.localStorage.setItem(key,value);
                    this.balls1[j].x = 10000;
				    this.balls1[j].y = 10000;
                }
            }
            
		}
        //大便碰撞检测
        for(var i=0;i<this.balls2.length;i++){
            if((this.balls2[i].y>(this.basket.y-this.basket.height/2))){
                if((this.basket.x-this.basket.width/2)<this.balls2[i].x&&this.balls2[i].x<(this.basket.x+this.basket.width/2)){  
                    this.score2++;
                    this.DaBianScore.text="大便："+this.score2;
                    var key:string="DaBianScore";
                    var value:string=""+this.score2;
                    egret.localStorage.setItem(key,value);
                    this.balls2[i].x=10000;
                    this.balls2[i].y=10000;
                }
            }
        }

        
    }
    private touchHandler(evt:egret.TouchEvent){
       this.basket.x=evt.stageX;
    }
    private _timer:egret.Timer;
    private num=30;
    private createTimer(){
        console.log("计时开始");
        this._timer=new egret.Timer(1000,this.num);
        this._timer.start();
        this._timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerOver,this);
    }
    private onTimer(){
        this.num-=1;
        this.timeText.text=this.num+"'00''";
    }

    private onTimerOver(){
        this._timer.stop();
        this.timer.stop();
        this.timeText.text="00'00''";
        //进入游戏结束场景
        let s3:EndScene=new EndScene();
        SceneManager.getInstance().changeScene(s3);
    }

    protected onRemoveStage(){

    }
}