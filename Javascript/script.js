/* name validation*/
function fnamevld() {
    fname = document.forms["myform"]["fname"];
    var fnameValue = fname.value;
    var output;
    fnameValue = fnameValue.replace(/[^a-zA-Z]/g, '');
    var firstname = fnameValue.substr(0, 4);
    var lastname = fnameValue.substr(4, 4);

    if (firstname.length < 4) {
        output = firstname;
    } else if (firstname.length == 4 && lastname.length <= 4) {
        output = firstname + " " + lastname;

    }
    fname.value = output;
    document.getElementById('name1').innerHTML = firstname;

}

/*generate OTP on submit button*/
function generateOTP() {

    var digits = '0123456789';

    var otpLength = 4;

    var otp = '';

    for (let i = 1; i <= otpLength; i++)

    {

        var index = Math.floor(Math.random() * (digits.length));

        otp = otp + digits[index];

    }

    document.getElementById('otpbox').value = otp;
    var y = document.getElementById('msgbox');
    var x = document.forms["myform"];
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";

    }


}
/* redirect page on validate button*/
function rdipage() {
    var otp = document.getElementById('otpbox').value;
    if (otp.length == 0) { alert(" Enter OTP number"); } else { location.replace("http://pixel6.co") }

}
/* phone no validation*/
function phonevald() {
    var B = ["456", "657", "467", "935", "525", "685", "254", "964", "542", "642", "546", "452", "964", "454", "345", "645", "631", "842", "752", "942", "243", "668", "121", "315", "229", "334",
        "648", "316", "677", "991", "406", "934", "045", "602", "001", "308"
    ]; /* array for state*/
    var A = ["Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"
    ];
    var phoneField = document.forms["myform"]["phoneno"];
    var phoneValue = phoneField.value;
    var output;
    phoneValue = phoneValue.replace(/[^0-9]/g, '');
    var area = phoneValue.substr(0, 3);
    var pre = phoneValue.substr(3, 3);
    var tel = phoneValue.substr(6, 4);
    var sim = parseInt(area);
    /* conditions for mobile provider*/
    if (area.length < 3) {
        output = "(" + area;
    } else if (area.length == 3 && pre.length < 3) {
        output = "(" + area + ")" + "-" + pre;
        if (621 <= sim && sim <= 799) {
            document.getElementById('company').innerText = "jio";
        } else if (801 <= sim && sim <= 920) {
            document.getElementById('company').innerText = "idea";
        } else if (921 <= sim && sim <= 999) {
            document.getElementById('company').innerText = "vodafone";
        } else {
            document.getElementById('company').innerText = "invalid no";
        }
    } else if (area.length == 3 && pre.length == 3) {
        output = "(" + area + ")" + "-" + pre + " - " + tel;
        /* condition for state */
        if (B.includes(pre))
            document.getElementById('state').innerHTML = A[B.indexOf(pre)];
        else
            document.getElementById('state').innerHTML = "invalid";
    }
    phoneField.value = output;
    document.getElementById('phone1').innerHTML = output;

}
