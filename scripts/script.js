// When user submits comment form
// Retrieve name from input field with id of "#Name"
// Retrieve comment from input field with id of "#Comment"
// Retrieve current date with JS
// get element by class name <div> with class of ".user-comment-content"
// Add current date and name to <p> element with class of ".comment-date" to <div> with class of ".user-comment-content"
// Add comment to <div> with class of ".user-comment-content"
// Make <div> with class of ".user-comment" visible




// credit to spYk3HH on StackOverflow for this code to get and format the date https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript 
var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear();
    
var today = dayOfWeek + " " + curMonth + " " + dayOfMonth + ", " + curYear;
console.log(today)

// Select form
const form = document.querySelector("form");

// add listener to submit on form
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("submitted!!")
    
    const userName = document.querySelector('input[name="Name"]').value
    const userComment = document.querySelector('textarea[name="comment"]').value

    // if user wrote in comment
    if (userComment){
        // Create <p> with class "comment-date" for Date & Name
        const commentDate = document.createElement('p');
        commentDate.classList.add("comment-date");
        commentDate.appendChild(document.createTextNode(`${today} by ${userName}`));

        // Add comment-date <p> to div
        const commentParent = document.querySelector(".user-comment-content");
        commentParent.appendChild(commentDate)

        // Create <p> for comment
        const commentText = document.createElement('p');
        commentText.appendChild(document.createTextNode(userComment));

        // Add commentText <p> to div
        commentParent.appendChild(commentText);

        // Make comment parent div visible
        const divParent = document.querySelector(".user-comment")
        divParent.style.display = "flex";
    }
    // disable button once it is clicked once
    this.querySelector('button[type="submit"]').setAttribute('disabled', 'disabled');
});