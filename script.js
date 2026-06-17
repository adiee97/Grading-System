function calculateGrade(marks) {
    if (marks >= 85) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 65) {
        return "C";
    } else if (marks >= 55) {
        return "D";
    } else {
        return "F";
    }
}

function showGrade() {

    // Getting the value from the user
    let marks = document.getElementById("marks").value;

    // Check for empty input
    if (marks.trim() === "") {
        document.getElementById("result").innerHTML =
            "Please enter your marks.";
        return;
    }

    // Convert to number
    marks = Number(marks);

    // Validate range
    if (marks < 0 || marks > 100) {
        document.getElementById("result").innerHTML =
            "Marks must be between 0 and 100.";
        return;
    }

    // Calculate grade
    let grade = calculateGrade(marks);

    // Display result
    document.getElementById("result").innerHTML =
        "Your Grade is: " + grade;
}