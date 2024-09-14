import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let myPlayingTeam: Coach[] = [];

myPlayingTeam.push(myCricketCoach);
myPlayingTeam.push(myGolfCoach);

for(let playing of myPlayingTeam){
    console.log(playing.getDailyWorkOut());
}