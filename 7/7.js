function discoverOriginalPrice(discountedPrice, salePercentage){
    let sP = (100 - salePercentage)/100;
    let dP = discountedPrice;
    let fP = dP/sP;
    return +parseFloat(fP).toFixed(2);
  }


  //This kata wants to take in the discounted price and percentage and figure out the full price, only showing decimals up to two if they exist.