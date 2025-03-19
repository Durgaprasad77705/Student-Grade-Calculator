document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from inputs
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);
    let subject4 = parseFloat(document.getElementById('subject4').value);
    let subject5 = parseFloat(document.getElementById('subject5').value);

    // Check if any input field is empty or invalid
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
        alert("Please enter valid marks for all subjects.");
        return;
    }

    // Calculate total and percentage
    let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    let percentage = (totalMarks / 500) * 100;

    // Determine grade based on percentage
    let grade = '';
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 75) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C';
    } else {
        grade = 'D';
    }

    // Show result
    document.getElementById('percentage').textContent = "Percentage: " + percentage.toFixed(2) + "%";
    document.getElementById('grade').textContent = "Grade: " + grade;
});
