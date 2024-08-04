function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    if (isNaN(birthdate.getTime())) {
        document.getElementById('age').textContent = "Please enter a valid date.";
        return;
    }
    if(birthdate.getTime()>today){
        document.getElementById('age').textContent = "Please enter a passed date.   ";
        return;
    }
    

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('age').textContent = age;
}
