



                          // Problem KiloMeter TO Meter




function kilometerToMeter(kilometer){
      
   var meter = kilometer * 1000;
    
    if(kilometer < 0){
        var notCounted ="Not Avilable";
        return notCounted;
    }
    return meter;
}
var result = kilometerToMeter(3)
console.log(result);




                        //Problem BUDGET CAlCULATOR






function budgetCalculator(watch, moblile, laptop){

    const watchPrice = 50;

    const mobilePrice = 100;

    const laptopPrice = 500;

    var totalPrice = watchPrice * watch + mobilePrice * moblile + laptopPrice * laptop ;

    return totalPrice;

}

var result2 = budgetCalculator(2, 2, 2);

console.log(result2);




               //Problem Hotel cost management




function hotelCost(daySpent){
 

    if( daySpent <= 10){
        
     var totalCost = 0;
     totalCost= daySpent * 100;
    
    }
   else if (daySpent <= 20){

        var first10Days   = 10 * 100;
        var remainingDays = daySpent -10;
        var second10Days    = remainingDays * 80;
        totalCost         = first10Days + second10Days;

    }
   else{

       var first10Days   = 10 * 100;
       var second10Days    = 10 * 80;
       var remainingDays = daySpent - 20;
       var thiredDays    = remainingDays * 50;

       totalCost         = first10Days + second10Days + thiredDays;

   }
   return totalCost;
    
}

var totalBill = hotelCost(21)
console.log(totalBill);




         //Problem Find the longest friend Name




var friendName = ["Abu", "Nabbu","kabbbu","Babu","Dabbbu"];

function megaFriend(arr){
    var max = arr[0];
  for (i=0; i<arr.length; i++){
      if (arr[i].length > max.length){
        max = arr[i];
      }
      

  }
  return max;
}

console.log(megaFriend(friendName));

















