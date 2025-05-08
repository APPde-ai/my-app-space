function showGPAForm() {
    document.getElementById('gpa-form').style.display = 'block';
    document.getElementById('level-form').style.display = 'none';
}

function showLevelForm() {
    document.getElementById('level-form').style.display = 'block';
    document.getElementById('gpa-form').style.display = 'none';
}

function calculateGPA() {
    const previousGPA = parseFloat(document.getElementById('previousGPA').value);
    const previousCredits = parseInt(document.getElementById('previousCredits').value);
    const currentGrade = parseInt(document.getElementById('currentGrade').value);
    const currentCredits = parseInt(document.getElementById('currentCredits').value);

    const gradePoint = convertGradeToGPA(currentGrade);

    const totalCredits = previousCredits + currentCredits;
    const totalPoints = (previousGPA * previousCredits) + (gradePoint * currentCredits);
    const gpa = totalPoints / totalCredits;

    document.getElementById('gpa-output').textContent = gpa.toFixed(2);

    let grade;
    if (gpa >= 3.75) grade = 'شرف';
    else if (gpa >= 3.25) grade = 'امتياز';
    else if (gpa >= 2.75) grade = 'جيد جداً';
    else if (gpa >= 2.25) grade = 'جيد';
    else grade = 'مقبول';

    document.getElementById('grade-output').textContent = grade;
    document.getElementById('credits-output').textContent = totalCredits;
}

function convertGradeToGPA(grade) {
    if (grade >= 98) return 4.00;
    if (grade >= 95) return 3.75;
    if (grade >= 90) return 3.50;
    if (grade >= 85) return 3.25;
    if (grade >= 80) return 3.00;
    if (grade >= 75) return 2.75;
    if (grade >= 70) return 2.50;
    if (grade >= 65) return 2.25;
    if (grade >= 60) return 2.00;
    if (grade >= 55) return 1.75;
    if (grade >= 50) return 1.50;
    return 0.00;
}

function addCourse() {
    const courseInput = document.createElement('div');
    courseInput.innerHTML = `
        <input type="number" placeholder="علامة المادة من 100" />
        <input type="number" placeholder="عدد ساعات المادة" />
    `;
    document.getElementById('gpa-form').insertBefore(courseInput, document.querySelector('button'));
}

function calculateLevel() {
    const completedCredits = parseInt(document.getElementById('completedCredits').value);

    let level;
    let remainingCredits;

    if (completedCredits < 28) {
        level = "المستوى الأول";
        remainingCredits = 28 - completedCredits;
    } else if (completedCredits < 64) {
        level = "المستوى الثاني";
        remainingCredits = 64 - completedCredits;
    } else if (completedCredits < 100) {
        level = "المستوى الثالث";
        remainingCredits = 100 - completedCredits;
    } else if (completedCredits < 136) {
        level = "المستوى الرابع";
        remainingCredits = 136 - completedCredits;
    } else if (completedCredits < 180) {
        level = "المستوى الخامس";
        remainingCredits = 180 - completedCredits;
    } else {
        level = "خريج (مُبارك لك)";
        remainingCredits = 0;
    }

    document.getElementById('level-result').textContent = "مستوى الطالب: " + level;
    document.getElementById('remaining-credits').textContent = "عدد الساعات المتبقية للمستوى التالي: " + remainingCredits;
}
