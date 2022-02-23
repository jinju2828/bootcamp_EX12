// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue
//
//
// function partyPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
//   document.querySelector('body').style.color = 'white'
// }
//
// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
//   document.querySelector('body').style.color = 'white'
// }
//
// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'white'
// }

// document.querySelector('#purple').addEventListener('click', changeColor('purple'));
// document.querySelector('#green').addEventListener('click', changeColor('green'));

document.getElementById('rebeccapurple').onclick = changeColor;
document.getElementById('green').onclick = changeColor;
document.getElementById('blue').onclick = changeColor;
document.getElementById('hotpink').onclick = changeColor;
document.getElementById('yellow').onclick = changeColor;
document.getElementById('darkorange').onclick = changeColor;
document.getElementById('skyblue').onclick = changeColor;
document.getElementById('gray').onclick = changeColor;


function changeColor(newColor) {
    console.log("color", newColor.path[0].id);
    let color = newColor.path[0].id;
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('body').style.color = 'white'
};



const reset = () => {
  console.log("hi");
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
};

document.querySelector('#reset').addEventListener('click', reset);

// function changeColor() {
//   document.querySelector('body').style.backgroundColor = 'purple';
//   document.querySelector('body').style.color = 'white';
//
// }


// let nodes = document.querySelectorAll('#rebeccapurple, #green, #blue');
// console.log('nodes', nodes);

// nodes.NodeList[0].id.addEventListener('mouseover', (e) => {
//   e.target.style.color = 'black';
// });

// document.querySelectorAll('#rebeccapurple, #green').addEventListener('mouseover', (e) => {
//   {
//     e.target.style.color = 'black';
//   }
// });

// document.querySelector('#rebeccapurple').addEventListener('mouseleave', (e) => {
//   {
//     e.target.style.color = '';
//   }
// });
//
// document.querySelector('#green').addEventListener('mouseover', (e) => {
//   {
//     e.target.style.color = 'white';
//   }
// });
//
// document.querySelector('#green').addEventListener('mouseleave', (e) => {
//   {
//     e.target.style.color = '';
//   }
// });
//
// document.querySelector('#blue').addEventListener('mouseover', (e) => {
//   {
//     e.target.style.color = 'white';
//   }
// });
//
// document.querySelector('#blue').addEventListener('mouseleave', (e) => {
//   {
//     e.target.style.color = '';
//   }
// });
//
// document.querySelector('#hotpink').addEventListener('mouseover', (e) => {
//   {
//     e.target.style.color = 'white';
//   }
// });
//
// document.querySelector('#hotpink').addEventListener('mouseleave', (e) => {
//   {
//     e.target.style.color = '';
//   }
// });
//
// document.querySelector('#yellow').addEventListener('mouseover', (e) => {
//   {
//     e.target.style.color = 'white';
//   }
// });
//
// document.querySelector('#yellow').addEventListener('mouseleave', (e) => {
//   {
//     e.target.style.color = '';
//   }
// });
//
// document.querySelector('#darkorange').addEventListener('mouseover', (e) => {
//   {
//     e.target.style.color = 'white';
//   }
// });
//
// document.querySelector('#darkorange').addEventListener('mouseleave', (e) => {
//   {
//     e.target.style.color = '';
//   }
// });
//
// document.querySelector('#skyblue').addEventListener('mouseover', (e) => {
//   {
//     e.target.style.color = 'white';
//   }
// });
//
// document.querySelector('#skyblue').addEventListener('mouseleave', (e) => {
//   {
//     e.target.style.color = '';
//   }
// });
//
// document.querySelector('#gray').addEventListener('mouseover', (e) => {
//   {
//     e.target.style.color = 'white';
//   }
// });
//
// document.querySelector('#gray').addEventListener('mouseleave', (e) => {
//   {
//     e.target.style.color = '';
//   }
// });
