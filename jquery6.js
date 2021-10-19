let param = {
    "Options": {
        "r1": 34800,
        "r2": 6000,
        "r3": 5
    },
    "checkbox": {
        "check-1": 1
    },
    "Type":
        [17900, 230000, 3000000]
};
console.log(param);
let pr = 0;
let pch = 0;
window.addEventListener("DOMContentLoaded", function (event) {
    let p1 = document.getElementsByName("pole");
    let r = document.getElementById("Stoimost");
    let s = document.getElementsByName("Type");
    s[0].addEventListener("change", function (event) {
        let select = event.target;
        console.log(select.value);
        let re = /^\s*\d+\s*$/;
        if (re.exec(p1[0].value)) {
            if (select.value == "1") { r.innerHTML = param.Type[0] * p1[0].value; }
            if (select.value == "2") {
                r.innerHTML = (param.Type[1] + pr) * p1[0].value;
                let rad = document.querySelectorAll(".opt input[type=radio]");
                rad.forEach(function (radio) {
                    radio.addEventListener("change", function (event) {
                        rad = event.target;
                        console.log(rad.value);
                        if (re.exec(p1[0].value)) {
                            if (document.getElementById("r1").checked) {
                                r.innerHTML = (param.Type[1] +
                                    param.Options.r1) * p1[0].value;
                                pr = param.Options.r1;
                            }
                            if (document.getElementById("r2").checked) {
                                r.innerHTML = (param.Type[1] +
                                    param.Options.r2) * p1[0].value;
                                pr = param.Options.r2;
                            }
                            if (document.getElementById("r3").checked) {
                                r.innerHTML = (param.Type[1] +
                                    param.Options.r3) * p1[0].value;
                                pr = param.Options.r3;
                            }
                        }
                        else { alert("Некорректный ввод"); }
                    });
                });
            }
            if (select.value == "3") {
                r.innerHTML = (param.Type[2] + pch) * p1[0].value;
                let ch = document.querySelectorAll(".checkbox input[type=checkbox]");
                ch.forEach(function (checkbox) {
                    checkbox.addEventListener("change", function (event) {
                        ch = event.target;
                        console.log(ch.value);
                        if (re.exec(p1[0].value)) {
                            if (document.getElementById("box").checked) {
                                r.innerHTML = (param.Type[2] +
                                    param.checkbox["check-1"]) * p1[0].value;
                                pch = param.checkbox["check-1"];
                            }
                            else {
                                r.innerHTML = (param.Type[2]) * p1[0].value;
                                pch = 0;
                            }
                        }
                        else alert("Некорректный ввод");
                    });
                });
            }
        }
        else { alert("Некорректный ввод"); }
    });
    return false;
});
window.addEventListener("DOMContentLoaded", function (event) {
    let s = document.getElementsByName("Type");
    s[0].addEventListener("change", function (event) {
        let select = event.target;
        let radios = document.getElementById("opt");
        console.log(select.value);
        radios.style.display = (select.value == "2" ? "block" : "none");
    });
    let r = document.querySelectorAll(".opt input[type=radio]");
    r.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
            let r = event.target;
            console.log(r.value);
        });
    });
});
window.addEventListener("DOMContentLoaded", function (event) {
    let s = document.getElementsByName("Type");
    s[0].addEventListener("change", function (event) {
        let select = event.target;
        let checkboxes = document.getElementById("checkbox");
        console.log(select.value);
        checkboxes.style.display = (select.value == "3" ? "block" : "none");
    });
    let r = document.querySelectorAll(".checkbox input[type=checkbox]");
    c.forEach(function (checkbox) {
        checkbox.addEventListener("change", function (event) {
            let c = event.target;
            console.log(r.value);
        });
    });
});