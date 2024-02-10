const birthdateInput = document.getElementById("birthdate");
const resultElement = document.getElementById("result");
const birthdateError = document.getElementById("birthdate-error");

function calculateAge() {
    // Get user's birthdate
    const birthdate = new Date(birthdateInput.value);

    // Check if birthdate is valid
    if (isNaN(birthdate.getTime())) {
        birthdateError.textContent = "Please enter a valid date.";
        return;
    } else {
        birthdateError.textContent = "";
    }

    // Get current date
    const currentDate = new Date();

    // Calculate age in years, months, and days
    let ageYears = currentDate.getFullYear() - birthdate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthdate.getMonth();
    let ageDays = currentDate.getDate() - birthdate.getDate();

    // Adjust for negative months and days
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        ageMonths--;
        ageDays += daysInMonth(birthdate.getMonth(), birthdate.getFullYear());
    }

    // Display result
    resultElement.textContent = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}

// Function to calculate days in a month
function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}
