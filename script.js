const ham = document.querySelector(".hamburger");
const links = document.querySelector(".mobile-links");
ham.addEventListener("click", function() {
    links.classList.toggle("show-links")
})





const testimony = [
    {
        id: 1,
        name: "tolulope ilesanmi",
        job: "software engineer",
        img: "images/testimonials-01.jpg",
        text: "When a random word or a random sentence isn’t quite enough, the next logical step is to discover a random paragraph"
    },
    {
        id: 2,
        name: "opeyemi ilesanmi",
        job: "digital marketer",
        img: "images/testimonials-01.jpg",
        text: "The random paragraph generator is the ultimate tool used in various ways by different people to generate creative thoughts."
    },
    {
        id: 3,
        name: "philip ilesanmi",
        job: "product manager",
        img: "images/testimonials-01.jpg",
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate arandom paragraph."
    },
    {
        id: 4,
        name: "ire oluwaseun",
        job: "ui/ux designer",
        img: "images/testimonials-01.jpg",
        text: "This can be leveraged in a few different ways to force the writer to use creativity. For example, the random paragraph can be used anywhere"
    },
];

// selecting my elements
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// selecting my buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


// setting the first item to be displayed
let currentItem = 0;

// creating a function for showing the person based on their index number
function showNext() {
    const item = testimony[currentItem];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


// loading the first item
window.addEventListener("DOMContentLoaded", function(){
    showNext()
});

// showing the next person
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > testimony.length - 1){
        currentItem = 0;
    }
    showNext(currentItem);
});
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = testimony.length - 1;
    }
    showNext(currentItem);
});

