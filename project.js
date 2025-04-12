function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}<>?/";

    let characters = lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        password += randomChar;
    }

    document.getElementById("result").value = password;
}

function copyPassword() {
    const result = document.getElementById("result");
    result.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}


function toggleVisibility() {
    const result = document.getElementById("result");
    const toggle = document.getElementById("toggleVisibility");
    if (result.type === "password") {
        result.type = "text";
        toggle.textContent = "🔒";
    } else {
        result.type = "password";
        toggle.textContent = "🔓️";
    }
}

function copyPassword() {
    const result = document.getElementById("result");
    result.select();
    result.setSelectionRange(0, 99999); // for mobile
    document.execCommand("copy");

    const msg = document.getElementById("copyMessage");
    msg.style.opacity = 1;
    setTimeout(() => {
        msg.style.opacity = 0;
    }, 1500);
}
