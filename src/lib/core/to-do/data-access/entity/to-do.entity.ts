export class ToDo {
  // try to implement prisma entity scheme here
  id: string;
  title: string;
  ownerName: string;
  isChecked: boolean;

  constructor(
    id: string,
    title: string,
    ownerName: string,
    isChecked: boolean,
  ) {
    this.id = id;
    this.title = title;
    this.ownerName = ownerName;
    this.isChecked = isChecked;
  }

  markAsChecked() {
    this.isChecked = true;
  }
}
