class Person{

    // class defination level declaration here 

    public personId:number;
    private orderId:number;
    protected refId:number;

    constructor(a:number){
        this.personId=a;
        this.orderId=201;
        this.refId=301;
        console.log('person object is init-->');
        console.log('person id is--->' +this.personId);
    }


    // create the public method here 

    public createperson():string{

          console.log('person ID with Order ID is -->' +this.orderId);

        return "person is created by person id -->" + "" +this.personId + "order created with id--->" +this.orderId;
    }



 // craete private here 

  private testPrivateMethod():string{

    return 'this is my private one-->';
  }

  // access private using previledged here 

  public testPreviledged():string{

    console.log('access private using previledged here -->');
    return this.testPrivateMethod();
  }



  // static impl 

  static testStatic():string{

     console.log('call static impl-->');

    return 'i am the static Impll';
  }


}

// create the another Class Student 

class Student extends Person{


  public testChildren():string{

     console.log('refid-->' +this.refId);

    return 'student is created by the rwef id --> ' + "" +this.refId;
  }


}


//let p=new Person(101);

let s=new Student(101);

console.log('call the public method here -->' +s.createperson());

console.log('Access private outside the scope of class-->' +s.testPreviledged());

console.log('call static with Class name -->' +Person.testStatic()); 

console.log('call the Student method here -->' +s.testChildren());