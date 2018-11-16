export class Fund {
  
  constructor(
    id: number,
    name: string,
    legalName: string,
    umbrella: string,
    creationDate: string){
      this.id = id;
      this.name = name;
      this.legalName = legalName;
      this.umbrella = umbrella;
      this.creationDate = creationDate;
  }

  id: number;
  name: string;
  legalName: string;
  umbrella: string;
  creationDate: string;
}
