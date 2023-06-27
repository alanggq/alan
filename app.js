let modulo = document.querySelector("#madulo");
let ingles = document.querySelector("#Ingles");
let ecologia = document.querySelector("#ecologia");
let fisica = document.querySelector("#fisica");
let calculo = document.querySelector("#calculo");
let res=document.querySelector("#promedio")

modulo.oninput=()=>{calcular();}
ingles.oninput=()=>{calcular();}
ecologia.oninput=()=>{calcular();}
fisica.oninput=()=>{calcular();}
calculo.oninput=()=>{calcular();}

calcular=()=>{
  document.querySelector("#cf").innerHTML=fisica.value;
  document.querySelector("#cI").innerHTML=ingles.value;
  document.querySelector("#cc").innerHTML=calculo.value;
  document.querySelector("#ce").innerHTML=ecología.value;
  document.querySelector("#cm").innerHTML=modulo.value;
}
  let i=parseFloat(ingles.value)
  let c=parseFloat(calculo.value)
  let e=parseFloat(ecología.value)
  let m=parseFloat(modulo.value)
  let f=parseFloat(fisica.value)
  let promedio=(I+c+e+m+f)/5;
  res.innerHTML=promedio.toFixed(1);
  if (promedio>5&&promedio<7) {
    res.className="bg-danger text.white";
  } else if(promedio>7&&promedio<9) {
    res.className="bg-warning text.white";
  } else{
    res.className="bg-success text.white";
  }
