export class student{
    private name : string;

   private scoreMath: number;
   private scoreEL:number;
   private scoreLite : number;
   constructor(name:string,
               scoreMath:number,
               scoreEL : number,
               scoreLite : number) {
       this.name=name;
       this.scoreEL=scoreEL;
       this.scoreLite=scoreLite;
       this.scoreMath=scoreMath;
   }
   getRank(): string {
       let arg : number = ((this.scoreMath+this.scoreEL+this.scoreLite)/3);
       if (arg >=8){
           return 'loai gioi';
       }else if (arg>=6){
           return 'kha';
       }
       else {
           return 'tb';
       }

   }
}
