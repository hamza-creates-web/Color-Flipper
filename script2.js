// firstly create hexa codes in a separate array...
const HexaColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const first = document.querySelector('.btn');
const second = document.querySelector('.spancode');
first.addEventListener('click',function()
{
  let code = '#';
  for(let i = 0;i<6;i++)
  {
    code += HexaColor[randomNumber()]
  }
  document.body.style.backgroundColor = code;
  second.textContent = code;
})

// now lets make a random function ....
function randomNumber()
{
  return Math.floor(Math.random()*HexaColor.length);
}

