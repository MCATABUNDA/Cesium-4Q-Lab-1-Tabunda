function validateForm(){
    let studentName = document.forms["order-form"]["student"].value;

    document.forms["order-form"]["student"].value = studentName.trim();

    if(student.trim() === "")
    {
        alert("Name is required.");
        return false;
    }
    return true;
}