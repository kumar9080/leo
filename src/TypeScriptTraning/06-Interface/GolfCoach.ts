import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkOut(): String {
        return `Golf Mantra = Get Spinning the Golf daily on the court`;
    }
}