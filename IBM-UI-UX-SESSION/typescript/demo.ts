console.log("hello ");

let myvar:number=100;
console.log(typeof(myvar));
console.log("value of myvar--->" +myvar);

let myvar1:String="hello beautiful";
console.log(typeof(myvar1));
console.log("value of myvar--->" +myvar1);

let test:any=10;
console.log(typeof(test));
console.log("value of myvar--->" +test);

// define methods in Typescript 

// Noraml Method 

function addValue(value1:number, value2:number):number{

    console.log('addition of the value of both param');
   
    return value1 + value2;
   
   }
   
   console.log(addValue(45,45));
   // method with optional param which is representing by the ? 


// with Default param 

function details(id:number,name:string,mail_id?:string){

    console.log("ID-->" +id);
    console.log("Name-->" +name);
  
    if(mail_id!=undefined){
  
      console.log("Email-Id-->" +mail_id);
          
      }
    }
  
  details(123,"amit");
  details(123,"vivek","trainig@yahoo.com");

  // default parameter in typescript 

// defual parameter in methods 

function discount(price:number,rate:number=0.50):number{


    let discount =price * rate;
    
    console.log("Discount AMount --->" +discount);
    
    return discount
    }
    
    console.log(discount(1000));
    console.log(discount(1000,0.30));

    enum myConstants {

        pi=3.14,
        e=2.73,
        log2=0.3,
        log3=0.7
     }
     
     console.log("finding the ENUM");
     console.log(2*myConstants.pi);
    
    

