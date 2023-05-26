const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  const quotient = dividend / divider;

  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try Again.";   
  } else if (dividend <= 0 || divider <= 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    throw new Error("Invalid number provided. Try again");
  } else if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    throw new Error('Something critical went wrong. Please reload the page');
  } else {
    if (quotient % 1 > 0) {
      result.innerText = Math.floor(quotient);
    } else {
      result.innerText = quotient;
    }
  }
});


/* Alternative error and call stack tracing:
console.error('Something critical went wrong. Please reload the page');
    console.trace();
*/
