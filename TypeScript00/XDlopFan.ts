// const SLOW = 1;
// const MEDIUM = 2;
// const FAST = 3 ;
enum fanMode{
    SLOW = 1,
    MEDIUM,
    FAST ,
}


class Fan{
    private speed: number;
    private on : boolean;
    private radius : number;
    private color : string;
    constructor() {
        this.speed = fanMode.SLOW;
        this.on=false;
        this.radius=5;
        this.color= 'blue';
    }

    setSpeed(newspeed : fanMode){
        this.speed = newspeed;
    }
    setOn(newOn : boolean){
        this.on=newOn;
    }
    setRadius(newradius : number){
        this.radius = newradius;
    }
    setColor(newscolor : string){
        this.color = newscolor;
    }
}
let Fan1 = new Fan()
Fan1.setOn(true);
Fan1.setSpeed(fanMode.FAST);
Fan1.setColor('yellow');
Fan1.setRadius(10);
console.log(Fan1);
let Fan2 = new Fan()
Fan2.setOn(false);
Fan2.setSpeed(fanMode.MEDIUM);
Fan1.setColor('blue');
Fan1.setRadius(5);
console.log(Fan2);