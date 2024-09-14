import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkOut(): String {
        return `Cricket Mantra =  Get Daily 5 hrs batting practice`;
    }
}