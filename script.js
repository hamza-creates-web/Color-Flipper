// firstly i have to iterate the fixed colors...
const colors = ['red','green','rgb(23, 168, 168)','#ff2'];
const buttonElement = document.querySelector('.btn');
const colorOption = document.querySelector('.spancode');
buttonElement.addEventListener('click',function()
{
  let randomNumber = getRandomNumber();
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber];
  colorOption.textContent = colors[randomNumber];
})

// now make a function to get the random numbers between 0-3 ...
function getRandomNumber()
{
  return Math.floor(Math.random()*colors.length);
}