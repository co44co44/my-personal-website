const h2 = document.createEleent ("h2");
h2.textContent= "This content added by JavaScript";
document.querySelector ("body").appendChild(h2);

const input = document.getElementById('button');
function addingEventListener() {
input.addEventListener('click', function() {
 alert('I was clicked!');
});
}