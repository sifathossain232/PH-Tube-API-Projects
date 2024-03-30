document.getElementById('blog').addEventListener('click', function(){
    // document.body.style.backgroundColor = 'yellow';
    const appendDiv = document.getElementById('test')
if(appendDiv){
    appendDiv.classList.add('block')
}else{
    appendDiv.classList.add('hidden')   
}
    const newDiv = document.createElement('div');
   
    appendDiv.innerHTML = `<div class = 'flex flex-col gap-3'>
    <p>
    <span class='font-medium text-xl'> Number-1 : </span> 
    The scope of variables in JavaScript, whether declared with var,
    let, or const, determines where in the code those variables are
    accessible.
  </p>
  <p>
  <span class='font-medium text-xl'> Number-2 : </span> 
    In summary, null is used to represent an intentional absence of value,
    while undefined is used to indicate an uninitialized or non-existent <br>
    value. Understanding when and how to use each of them is crucial for
    writing clear and robust JavaScript code.
  </p>
  <p>
  <span class='font-medium text-xl'> Number-3 : </span> 
    REST stands for Representational State Transfer. A RESTful API
    (Application Programming Interface) is an architectural style for <br>
    designing networked applications. It is based on a set of principles
    that define how web standards, such as HTTP and URLs, are used.
  </p>
    </div>`
    appendDiv.appendChild(newDiv) 
})