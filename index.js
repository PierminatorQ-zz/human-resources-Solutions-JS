

/* FIBONACCI VISITOR YEAR 22  */


array=[19,7];

let a;
let b;
let c;

for (i=0; i<array.length; i++){

a=0
b=1
   for (n=0; n==array[i+1]; n++)
console.log(c=a+b);

}





/* NONONOONONONONONONONONONONONONONONONONO */
/* ZERO TERMINATED SUM YEAR 21 */

/* array=[8,4,0,1,7,0,0,2,4,0];

let a ;
let b=[] ;
let c;
 */




/* 
  switch (true) { 
    case (a ==0 && array[i+1] == 0):
    console.log(0);
    i++
    break;
    case ( i==array.length-1):  
    break;
    case (a !=0):
    b.push(a);
    break;
    case (a ==0):

     const suma = b.reduce(function(acumulador,valorActual){
      return acumulador + valorActual
    })
    console.log(suma); 
    console.log("stop");
    b=[];
    break;

    
    } */

/* NONONOONONONONONONONONONONONONONONONONO */

   




/* 
for (let i = 0; i < array.length; i++) {
   a=array[i];


        if (a != 0) {
    b.push(a);
      

  } else { 
     const suma = b.reduce(function(acumulador,valorActual){
      return acumulador + valorActual
    })
    console.log(suma); 
    
    console.log("stop");
    b=[];


    continue;
   }} */

   
  
  
  


/*--------------------------------------------------*/

/*MULTIPLICATION WORKSHOP YEAR 20

array = [5, 7, 6, 9, 11, 8, 0, 4, 1, 4];

let a;
let b;
let c;

for (i=0;i<array.length;i+=2){
  a=array[i];
  
  b= a;
  c=array[i+1] ;

  console.log(b*c);


  
}
 
*/



/*--------------------------------------------------*/

/* COUNTDOWN YEAR 19 




 array = [3, -8, 10, -4, 2];

let a;

for(i=0; i<=array.length;i++){
  
  a=array[i];




   if (a <0)
    {
      
      for (n=a ; n<=0; ++n){
   console.log(n)
 }
    }  else {
       
        for (b=a; b>=0; --b){
   console.log(b)
 }  
    }



  
}
 

*/


/*--------------------------------------------------*/

 /* EXCLUSIVE LOUNGE YEAR 17 


array = [3, -3, 3, 9, -6, -4, 1,-8];

let a;
let b;
let c;

for (i=0; i<array.length; i+=2){

a=Math.sign(array[i]);
b=Math.sign(array[i+1]);

if (a == b){
  console.log("0");
} else {
  console.log("1");
}};


*/
/*--------------------------------------------------*/



/* ABSOLUTE POSITIVITY YEAR 16 

 array = [3, -3, 3, 0, -6, -4, 1];


for (i=0; i<array.length; i++){

if (Math.sign(array[i]) === -1){
  console.log(array[i]*-1);
} else {
  console.log(array[i]);
}

}

*/




/*--------------------------------------------------*/

/* MAXIMIZATION ROOM YEAR 14

array = [5, 6, -9, -3, 4, 4, -6, 3];

let a;
let b;

for (i=0; i<array.length; i+=2){
  a= array[i];
  b=array[i+1];


  if (a == b ){
    console.log(a);
  } else if (a>b){
    console.log(a);
  } else{
    console.log(b);
  }

}

*/


/*--------------------------------------------------*/




/* EQUALIZATION ROOM YEAR 13 

array = [7, 2, 1, 1, 8, -5, -4, -4];

let a;
let b;

for (i=0; i<array.length; i++){
  a= array[i];
  b=array[i+1];
  if (a == b ){
    console.log(a);
  }

}

*/


/*--------------------------------------------------*/
/* SUB HALLWAY YEAR 11 

array = [2, 9, 9, 3, -1, -1, 6, -4];

let a;
let b;
let c;
let d;

for (i=0; i<array.length; i+=2){
  a= array[i];
  b= array[i+1];
  c = a-b;
  d= b-a;
  console.log(c);
  console.log(d);

}
*/



/*--------------------------------------------------*/

/*ZERO PRESERVATION INICIATIVE YEAR 9 
array = [5, 7, 0, 9, 11, 0, 0, 4, 1, 0];
 

for (i=0; i<array.length; i++){

   if (array[i] == 0){
     console.log(array[i]);
  }  
}


*/

/*--------------------------------------------------*/

/* TETRACONTIPLIER YEAR 12 
array = [8, 7, -5, 3, 11, 2, -8, 4];

for ( i=0; i<array.length; i++){
  console.log(array[i] * 40);
}

*/



/*--------------------------------------------------*/



/* OCTOPLIER SUITE YEAR 10
array = [8, 7, -5, 3, 11, 2, -8, 4];

for ( i=0; i<array.length; i++){
  console.log(array[i] * 8);
}

*/




/*--------------------------------------------------*/


/* TRIPLER ROOM YEAR 8 
array = [8, 7, -5, 3, 11, 2, -8, 4];

for ( i=0; i<array.length; i++){
  console.log(array[i] * 3);
}

*/




/*--------------------------------------------------*/


/*ZERO EXTERMINATOR YEAR 7 
array = [5, 7, 0, 9, 11, 0, 0, 4, 1, 0];
 respuesta es 5,7,9,11,4,1 

for (i=0; i<array.length; i++){

   if (array[i] !== 0){
     console.log(array[i]);
  }  
}


*/




/*--------------------------------------------------*/



/*RAINY SUMMER YEAR 6 

 array = [5, 7, 5, 9, 11, 7, 2, 4, 1, 3];

let a;
let b;


for (i=0; i<array.length; i+=2){
  a = array[i];
  b = array[i + 1];
  c = a + b;
  console.log(c);
}

*/



/*--------------------------------------------------*/

/*SCRAMBLER HANDLER  || YEAR 4 

 array = [8, 7, 5, 3, 11, 2, 8, 4];

let a;
let b ;


for (i=0; i<array.length; i+2){
a = array.shift(i);
b = array.shift(i+1);
console.log(`${b}${a}`);
}

*/ 





/*--------------------------------------------------*/


/* COPY FLOOR YEAR 3 

array = ["r", "f", "u", "t", "b", "h", "g"];

let a ;
let b ;
let c ;

for (i=0; i<array.length; i++) {
  
  if (array[i] == "b")  {
    console.log("b se encuentra en el indice " + i);
    a = array[i];  
    }  else if (array[i] == "u"){
       console.log("u se encuentra en el indice " + i);
    b = array[i];
    }
     else if (array[i] == "g"){
       console.log("g se encuentra en el indice " + i);
    c = array[i];
    }

}
 console.log( `la palabra encontrada es ${a}${b}${c}` );
*/



/*--------------------------------------------------*/


/*--------------------------------------------------*/
/* 

RESTAS DE DOS DIGITOS

array = [8, 7, 5, 3, 11, 8, 8, 4];

 let a;
 let b;
 let c;

 let i=0;

 
  while (i < array.length)
  {
      a=array[i];
      
      b=array[i+1];
      c=a-b;
      console.log("resultado es " + c);

      i = i + 2;
  } */