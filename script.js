function calculateGrade(marks) {

    if (marks >= 85) {
        return "A";
    }
    else if (marks >= 75) {
        return "B";
    }
    else if (marks >= 65) {
        return "C";
    }
    else if (marks >= 55) {
        return "D";
    }
    else {
        return "F";
    }

}


function showGrade() {

    // Getting the value from the user 
    let marks = document.getElementById("marks").value;


    marks = Number(marks);


    // Call function
    let grade = calculateGrade(marks);


    // Displaying the  result
    document.getElementById("result").innerHTML =
        "Your Grade is: " + grade;

}