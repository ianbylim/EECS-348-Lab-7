function paragraph_attributes(){
    var b_r = document.getElementById("border_r").value;
    var b_g = document.getElementById("border_g").value;
    var b_b = document.getElementById("border_b").value;

    var b_w = document.getElementById("border_w").value;

    var bg_r = document.getElementById("background_r").value;
    var bg_g = document.getElementById("background_g").value;
    var bg_b = document.getElementById("background_b").value;

    document.getElementById("paragraph").style.borderColor = "rgb(" + b_r + "," + b_g + "," + b_b + ")";
    document.getElementById("paragraph").style.borderWidth = b_w;
    document.getElementById("paragraph").style.backgroundColor = "rgb(" + bg_r + "," + bg_g + "," + bg_b + ")";
}