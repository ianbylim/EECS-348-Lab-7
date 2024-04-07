function check(){
    var p1 = document.getElementById("password_1").value;
    var p2 = document.getElementById("password_2").value;

    if(p1.length < 8){
        document.getElementById("alert_box").textContent="Password is under 8 characters";
    }else if (p2.length <8){
        document.getElementById("alert_box").textContent="Password is under 8 characters";
    }else if (p1 != p2){
        document.getElementById("alert_box").textContent="Passwords do not match";
    }else{
        document.getElementById("alert_box").textContent="Passwords are valid and match";
    }
}