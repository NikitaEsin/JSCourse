//Какие недостатки вы видите в стиле написания кода этого примера?
/*
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
} */

function calculatePower(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

const x = parseFloat(prompt("Введите основание (x):", ''));
const n = parseInt(prompt("Введите степень (n):", ''));

if (isNaN(x) || isNaN(n)) {
  alert("Пожалуйста, введите числовые значения.");
} else if (n <= 0) {
  alert("Степень должна быть целым числом больше 0.");
} else {
  alert(calculatePower(x, n));
}
