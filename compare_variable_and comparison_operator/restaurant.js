const age = 40;
const price = 500;
if (age <= 12){
    console.log('you can eat for free');
}
else if ( age >=60){
   // 50% discounat 

   const discounat = price * 50 / 100;
   const payAmount = price - discounat;
   console.log(discounat);
   console.log(payAmount);
}
else if(age >= 50){
    //25% discount

    const discounat = price * 40 / 100;
    const payAmount = price - discounat;
    console.log(discounat);
    console.log(payAmount);
}
else if (age >= 40){
    //10% discount
     
   const discounat = price * 10 / 100;
   const payAmount = price - discounat;
   console.log(discounat);
   console.log(payAmount);
}
else{
    console.log(price);
}