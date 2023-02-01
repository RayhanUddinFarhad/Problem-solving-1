function temperatureConverter(valNum) {


    const forenthite = (valNum-32)/1.8;
  
    return forenthite.toFixed(0);
  
  }
  
  
  const value = temperatureConverter(50);
  console.log(value);