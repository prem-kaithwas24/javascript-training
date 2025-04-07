console.log('Running Bee');
const heading = document.getElementById('heading')
const revertBtn = document.getElementById('revert-btn');
const info = document.getElementById('info');

setTimeout(()=>{
  heading.style.color="#E0115F";
  heading.innerText="Welcome to index";
  revertBtn.hidden=false;
  info.hidden=true;
}, 3000);

revertBtn.addEventListener('click', (e)=>{
  heading.style.color="#000";
  heading.innerText="Hello World!";
  e.target.hidden=true;
});