class element{
  constructor(name,buildYear){
    this.name = name;
    this.buildYear = buildYear;
  }
  calAge(){
    return new Date().getFullYear() - buildYear;
  }
}


class Park extends element{

    constructor(name,buildYear,noOfTrees,area){
      super(name,buildYear);
      this.noOfTrees = noOfTrees;
      this.area = area;
    }

    calTreeDensity(){
      let des = (this.noOfTrees/this.area);
      console.log(`${this.name} park has an tree density of ${des} per sq. Km`);
    }

}


class Street extends element{

      constructor(name,buildYear,length = 3){
        super(name,buildYear);
        this.length = length;
      }


      classifyStreet(){
        let classification = new Map()
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`${this.name} street build in ${this.buildYear} is ${classification.get(this.length)} `);
      }


}


let allParks = [new Park('shivaJi Park',1995,215,0.2),new Park('mahavir Park',2010,500,0.5),new Park('Mansarover Park',1990,1050,1)];
let allStreets = [new Street('gali no. 4',1950,1),new Street('raghuNath mandir wali gali',1885,2),new Street('WG road',1660),new Street('DLF road',2005,4)];



function cal(arr){

  const sum = arr.reduce((pre, cur,index) => pre + cur,0);
  return [sum,sum/arr.length];

}


function parkReport(parks){

  console.log(`------- Parks Report-------`);

  // Density of each Park
    parks.forEach(cur => cur.calTreeDensity());

  // Average Age
  const ages = parks.map((el)=> new Date().getFullYear() - el.buildYear)
  const [sum,average] = cal(ages);
  console.log(`the average age of all the trees is ${average}`);

  // Which Park has the more than 1000 Trees

  const i = parks.map( (el) => el.noOfTrees)
  const tree = i.findIndex(el=>el>1000);
  console.log(`${parks[tree].name} has an density of ${parks[tree].noOfTrees} no. of trees`);

}

function streetsReport(streets){

  console.log(`-------Streets Report ------`);

  // total Length and average length
    const sizes = streets.map((cur)=> cur.length)
    const [length,average] = cal(sizes);
    console.log(`the total length of all the streets in our town is ${length} with an average length of ${average}`);

  // StreetName, BuildYear, Classification

  streets.forEach((current,index,array)=> current.classifyStreet())


}


parkReport(allParks);
streetsReport(allStreets);
