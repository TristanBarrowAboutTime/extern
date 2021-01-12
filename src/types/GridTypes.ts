export enum GridType {
    NONE,
    NORMAL,
} 

export class Report {}

export class NormalGridRowData extends Report {
    constructor(reportName: string, description: string, lastRunDate: string) {
        super();
        this.reportName = reportName; 
        this.description = description; 
        this.lastRunDate = lastRunDate; 
    }
    reportName: string
    description: string
    lastRunDate: string
}


