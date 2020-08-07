// As a user, I should see the timer increment every second once the page has loaded. CHECK
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let counter = document.getElementById("counter");
let comments = document.getElementById("list");
let interval;

function count() {
    counter.innerText = parseInt(counter.innerText) + 1;
};

function countUp() {
  interval = setInterval(count, 1000)
}

countUp() // Prime the count

// As a user, I can manually increment and decrement the counter using the plus and minus buttons. CHECK
minus.addEventListener("click", decrement);

function decrement(){
  let count = parseInt(counter.innerHTML)
  counter.innerHTML = count - 1
}

plus.addEventListener("click", increment);

function increment(){
  let count = parseInt(counter.innerHTML)
  counter.innerHTML = count + 1
}

// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
heart.addEventListener("click", like);

let tally = 0

function like(){
  let currentCount = parseInt(counter.innerHTML)
  let ul = document.getElementsByTagName('ul')[0]
  tally = tally + 1
  let element = document.createElement('li')
  element.innerText = `Count ${currentCount} has ${tally} likes!`
  ul.appendChild(element)
}

// As a user, I can pause the counter, which should: pause the counter, disable all buttons except pause, change pause button text to resume when paused.
pause.addEventListener("click", () => {
    if (pause.innerText === "pause") {
        clearInterval(interval);
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
        pause.innerText = "resume";
    } else {
        countUp();
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
        pause.innerText = "pause";
    }
});

// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
document.addEventListener("submit", function(e) {
    e.preventDefault()
    let newComment = document.getElementById("comment-input");
    let li = document.createElement("li");
    li.innerText = newComment.value;
    comments.appendChild(li);
    e.target.reset();
});
