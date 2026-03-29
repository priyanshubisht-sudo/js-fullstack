# Projects related to DOM

## Project Link
[Click Here](
    https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
)
# Solution Code

## Project 1

```Javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button) {
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  
  });
});

```

## Project 2

```Javascript

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)

  const results = document.querySelector('#results')
  const range = document.querySelector('#range')

  let bmi;

  if(isNaN(height) || height <= 0){
    results.innerHTML = `Please give a valid height!`
    range.innerHTML = ''
  }
  else if(isNaN(weight) || weight <= 0){
    results.innerHTML = `Please give a valid weight!`
    range.innerHTML = ''
  }
  else{
    bmi = (weight / ((height*height)/10000)).toFixed(2)
    bmi = parseFloat(bmi)

    results.innerHTML = `<span>${bmi}</span>`

    if(bmi < 18.6){
      range.innerHTML = `You are Underweight!`
    }
    else if(bmi < 24.9){
      range.innerHTML = `You are Fit and Fine!`
    }
    else{
      range.innerHTML = `You are Overweight!`
    }
  }
}) 

```