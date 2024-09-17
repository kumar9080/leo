class ToDoModel {
    rowNumber:number 
    rowDescription:string
    assignedTo:string

    constructor(rowNum: number, rowDes:string, assignedT: string){
        this.rowNumber = rowNum;
        this.rowDescription = rowDes;
        this.assignedTo = assignedT;
    }
}