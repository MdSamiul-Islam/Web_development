//---------------Multi_LEVEL CONDITION-----------

const price = 4000;

if(price >=5000){
    //10% discount

    const discount = price * 10 / 100;

    console.log(discount);
    // pay amount
    const pay_amount= price -discount;

    console.log(pay_amount);

}
else if(price> 2500){
    //2% discount

    const discount = price * 2/100;
    const pay_amount=price-discount;
    console.log(pay_amount);
    console.log(discount);
}
else{
    console.log(price);
}