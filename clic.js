
let id= (id)=> document.getElementById(id)

// using variables

var on=id("on")
var off=id("off")
var num=0;
 var op=id("op")
 var val=" "
 op.innerText=val

// on off calculator property

on.style.boxShadow="0px 0px 5px 2px"
function start(turn){
   
    if(turn=="start"){
      op.innerText= " "
      val=" "
      on.style.boxShadow="0px 0px 5px 2px"
      off.style.boxShadow="none"
      op.style.opacity=1;  
      op.style.color="black";    
    }
   }

    //  off the calculator

    function stop(turn){

    if(turn=="stop"){
      op.innerText= " "
      val=" "
      off.style.boxShadow="0px 0px 5px 2px"
      on.style.boxShadow="none"
      op.style.color="white";
      op.style.textColor="none"
      op.innerText=" "
    }

    else{     
    }
}

// values asign 

function asign(value){ 
    val +=value
    op.innerText=val
}

// Mathamatics calculation

function operators(a){
   
    switch (a){

      // added value

      case '+' :

      if(val[ val.length-1]!="." && val[ val.length-1]!="+" && val[ val.length-1]!="-"){    
    
        val +=a
    op.innerText=val
  }

  else if(val[ val.length-1]=="-"){
  
    console.log(123)
    val= val.slice(0,-1)
    val+=a
    console.log(val)
    op.innerText=val
  }
  else{
 }
      break; 
      // sub the value

      case "-" :
        if(val[ val.length-1]!="." && val[ val.length-1]!="+" && val[ val.length-1]!="-" ){

        val +=a
    op.innerText=val
  }
  else if(val[ val.length-1]=="+"){
   
    val= val.slice(0,-1)
   val+="-"
    op.innerText=val
  }
  else{
  }
      break;

    // Multiplication the value

      case "*" :
        if(val[ val.length-1]!="." && val[ val.length-1]!="+" && val[ val.length-1]!="-" && val[ val.length-1]!="*" && val[ val.length-1]!="/" && val[ val.length-1]!="%" && val[ val.length-1]!=" "){
        
        val +=a
    op.innerText=val
  }
  
  else if(val[ val.length-2]!="." && val[ val.length-2]!="+" && val[ val.length-2]!="-" && val[ val.length-2]!="*" && val[ val.length-2]!="/" && val[ val.length-2]!="%" && val[ val.length-2]!=" " && (val[ val.length-1]=="." || val[ val.length-1]=="+" || val[ val.length-1]=="-" || val[ val.length-1]=="/" || val[ val.length-1]=="%")){
   
    if(val[ val.length-1]!="."){
    
      val= val.slice(0,-1)
      val+="*"
      op.innerText=val
}
  }
else{
}
      break; 
      
      // Devision the value

      case "/" :
        if(val[ val.length-1]!="." && val[ val.length-1]!="+" && val[ val.length-1]!="-" && val[ val.length-1]!="*" && val[ val.length-1]!="/" && val[ val.length-1]!="%" && val[ val.length-1]!=" "){
         
        val +=a
        op.innerText=val
  }
  else if(val[ val.length-2]!="." && val[ val.length-2]!="+" && val[ val.length-2]!="-" && val[ val.length-2]!="*" && val[ val.length-2]!="/" && val[ val.length-2]!="%" && val[ val.length-2]!=" " && (val[ val.length-1]=="." || val[ val.length-1]=="+" || val[ val.length-1]=="-" || val[ val.length-1]=="*" || val[ val.length-1]=="%")){
    if(val[ val.length-1]!="."){
    val= val.slice(0,-1)
    val+=a
    op.innerText=val
  }
}
else{
}
      break;  

      // Modulus the value

      case "%" :
        if(val[ val.length-1]!="." && val[ val.length-1]!="+" && val[ val.length-1]!="-" && val[ val.length-1]!="*" && val[ val.length-1]!="/" && val[ val.length-1]!="%" && val[ val.length-1]!=" "){
         
        val +=a
        op.innerText=val
  }

  else if(val[ val.length-2]!="." && val[ val.length-2]!="+" && val[ val.length-2]!="-" && val[ val.length-2]!="*" && val[ val.length-2]!="/" && val[ val.length-2]!="%" && val[ val.length-2]!=" " && ( val[ val.length-1]=="+" || val[ val.length-1]=="-" || val[ val.length-1]=="/" || val[ val.length-1]=="*")){
   
   if(val[ val.length-1]!="."){

      val= val.slice(0,-1)
      val+="%"
      op.innerText=val
  }
}

else{
}
     break;
       
        //  plus or minus the value

        case "symbol" :
          c=0
          arr=[]
          
       for(i=0;i<val.length;i++){
       arr[i]=val[i]
       }
       
          for(i=arr.length-1;i>=0;i--){
    
             c=val[i]
 
            if(c=="+"){
              console.log(c)
              arr[i]="-"  
               break;           
            }

            else if (c=="-"){
              console.log(c)
              arr[i]="+"          
               break;             
            }

            else if(c==" "){            
              if(num%2==1){             
              arr.slice(1,2);
               num++;
            }

            else{
              arr.splice(1,0,"-")
              num++;
            }
            }
       
            else{
               
            }
          
          }
          val=""
          for(i=0;i<arr.length;i++){
           val+=arr[i]
       }

       op.innerText=val

        break;
        // clear the output

        case "clear" :
            val=""
            val+=" "
            op.innerText=val
            break;
      
            // Cancel the last index value
            case "⌫" :
            
            val=op.innerText.slice(0,op.innerText.length-1)
            op.innerText=val

            break;
             
            // Equals the values
        case "=" :
        if(val==" "){
          not="Check The input"
          op.innerText=not   
        }

        else{
        op.innerText=eval(op.innerText)
        val=op.innerText
        op.innerText=val
      }
    }
}
// dot  function useing the input

temp=""
function dot(dot){
   let dottValue=""
   for(i=val.length-1;i>=0;i--){

    let c=val[i]

    dottValue+=c

   if(c=="+" ||c=="-" ||c=="*" ||c=="%" ||c=="/" ||c==" "){

     break;
   }  
  }

  for(i of dottValue){
    if(i=="."){
       temp="."
    }
  }

    if(val[ val.length-1]!="." && val[ val.length-1]!="+" && val[ val.length-1]!="-" && val[ val.length-1]!="*" && val[ val.length-1]!="/" && val[ val.length-1]!="%" && val[ val.length-1]!=" " && temp!="."){

      console.log(val.length-1)
    val +="."
op.innerText=val
}
}

                      /*                    This is My own project              */