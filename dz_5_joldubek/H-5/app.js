const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");

const convert = (elem, target1, target2) => {
  elem.addEventListener("input", () => {
    const req = new XMLHttpRequest();
    req.open("GET", "data.json");
    req.setRequestHeader("Content-type", "application/json");
    req.send();

    req.addEventListener("load", () => {
      const response = JSON.parse(req.response);
      if(elem===som){
        target1.value = (elem.value / response.usd).toFixed(2);
        target2.value = (elem.value / response.euro).toFixed(2);
      }else if(elem === usd){
        target1.value = (elem.value * response.usd).toFixed(2);
        target2.value = (elem.value*(1+(response.euro-response.usd)*0.01)).toFixed(2);
      }else if(elem === euro){
        target1.value = (elem.value * response.euro).toFixed(2);
        target2.value = (elem.value * (response.usd/response.euro)).toFixed(2);
      }
      elem.value === "" && (target1.value = ""  , target2.value = "");
      
    });
    
  });

};

convert(som, usd, euro);
convert(usd, som, euro);
convert(euro,som, usd);





