function calculateGrade() {
    // Get values from input fields
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);
    let subject4 = parseFloat(document.getElementById('subject4').value);
    let subject5 = parseFloat(document.getElementById('subject5').value);

    // Validate if inputs are valid numbers
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
        alert("Please enter valid marks for all subjects.");
        return;
    }

    // Calculate total marks and average
    let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    let average = totalMarks / 5;

    // Calculate grade based on average
    let grade = '';
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 75) {
        grade = 'B';
    } else if (average >= 50) {
        grade = 'C';
    } else {
        grade = 'D';
    }

    // Display the results
    document.getElementById('average').textContent = "Average: " + average.toFixed(2);
    document.getElementById('grade').textContent = "Grade: " + grade;
}
