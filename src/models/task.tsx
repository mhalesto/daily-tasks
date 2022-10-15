export class TaskModel {
  constructor(obj?: any) {
    this.title = obj && obj.title ? obj.title : '';
    this.description = obj && obj.description ? obj.description : '',
    this.date = obj && obj.date ? obj.date : undefined
  }

  public title: string;
  public description: string;
  public date: unknown;
}