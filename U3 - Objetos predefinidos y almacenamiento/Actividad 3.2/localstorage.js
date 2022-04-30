// 15/04/2022

/* 
 2. DOM querySelector() to match the container using JavaScript:
 use document.querySelector() to match the HTML element 
 with the class “website-counter” and assign it to a variable for
 future DOM manipulation operations. 
*/
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");


/*  
 3. Retrieve visitor count using LocalStorage.getItem()
 Now we retrieve the previous value of website visitor
 count from localStorage by using the localStorage.getItem()
 method by passing key “page_view” as a parameter. The value is
 stored in localStorage of the web browser and persists the data
 beyond a single session.
*/
var visitCount = localStorage.getItem("page_view");


// Check if page_view entry is present
if (visitCount) {
    // the retrieved String value is converted to a number datatype using Number()
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 0;
    localStorage.setItem("page_view", 0);
}


/* 
 6. Display visitor count on page using element.innerHTML
 Once the correct value of visitCount is determined, it needs to be
 rendered on the screen. This is accomplished by assigning the visitCount 
 variable to element.innerHTML. The .innerHTML property on selected DOM 
 element allows HTML code to be added inside selected DOM element.
 As a result, the HTML code of the webpage will be updated to display the
 website visitor count.
*/
counterContainer.innerHTML = visitCount;


/*
 7. Implement Reset functionality triggered by button click
 Now that visitor count is implemented, we need to add a reset button to
 allow users to reset the counter back to 1. The first step is to include the
 HTML code for the reset button and match the button using DOM querySelector() 
 similar to “website-counter”.
*/

// Adding onClick event listener
resetButton.addEventListener("click", () => {
    visitCount = 0;
    localStorage.setItem("page_view", 0);
    counterContainer.innerHTML = visitCount;
});