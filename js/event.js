//option 1 : directly set on the HTML element

//<button onclick="console.log(65)">another button</button>

//option or type 2 : add onclick function on the HTML element

//Important: we will use this
//<button onclick="makeRed()">Make Red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option or type 3 :
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// option or type 3(another) [majhe majhe use korbo eto beshi use korbo na]:

const purpleButton = document.getElementById('make-purple');
      purpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor = 'purple';
      }


//option or type 4 :

const pinkButton = document.getElementById('make-pink');
        pinkButton.addEventListener('click', makePink)

        function makePink(){
          document.body.style.backgroundColor = 'pink'
        }

//option or type 4 (another):
 const makeGreenButton = document.getElementById("make-green");
        makeGreenButton.addEventListener('click',function makeGreen(){
          document.body.style.backgroundColor = 'green';
        });

//option 4 final (we will use most):
//Important we will this use this most of the time
document.getElementById('make-goldenrod').addEventListener('click',function(){
        document.body.style.backgroundColor = 'goldenrod'
       })