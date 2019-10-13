const functions = {
    
    assertEqual: (in1,in2) => {
    
       
            const message ="*** the two values are not same:" + "\n";
            let combine;
            if (in1 === in2){
             return  "true";
        }
        else {
            combine = "p1-->" + in1  + "\n" + "p2-->" + in2;
             console.log( message + combine);
             return "false";
        }
        
    },
    


   makeEmailArr: (name) =>{
       let first= name[0].toLowerCase();
       let last = name[1].toLowerCase();
   
    return `${first}.${last}@evolveu.ca`;
   }

 };
 
 export default functions;