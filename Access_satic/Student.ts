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
   getScoreMath():number{
       return this.scoreMath;
   }
   getScoreEL(): number{
       return this.getScoreEL()
   }
   getScoreLite(): number{
       return  this.getScoreLite()
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
   // count() : any {
   //     let arr1 = [];
   //     let arr2 = [];
   //     let arr3 = [];
   //     let arg : number = ((this.scoreMath+this.scoreEL+this.scoreLite)/3);
   //     if (arg>=8){
   //         arr1.push(arg);
   //     }else if (arg>=6){
   //         arr2.push(arg);
   //     }else {
   //         arr3.push(arg);
   //     }
   //     return `arr1:${arr1}, arr2:${arr2}, arr3:${arr3}`;
   // }

}
