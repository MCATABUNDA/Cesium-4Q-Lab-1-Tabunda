function validateForm(){
    let student = document.forms["order-form"]["student"].value;

    document.forms["order-form"]["student"].value = student.trim();

    if(student.trim() === "")
    {
        alert("Name is required.");
        return false;
    }
    return true;
}
