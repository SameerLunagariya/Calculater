function Clear() {
    var AC = document.getElementById("t1");
    AC.value = "";
    document.getElementById("t2").value = "";
}

function Back() {
    var C = document.getElementById("t1");
    C.value = C.value.slice(0, -1);
}

function Solve(val) {
    var v = document.getElementById("t1");
    v.value += val;
}

function Result() {
    var n = document.getElementById("t1").value;
    var i = 0, temp = 0;
    while (n[i] != undefined) {
        if (n[i] == "%") {
            temp++;
        }
        i++;
    }
    if (temp == 1) {
        i = 0;
        var t = 0, a, b, j = 0;
        while (n[i] != undefined) {
            if (n[i] == "+") {
                a = t;
                t = 0;
                i++;
            }
            else if (n[i] == "-") {
                a = t;
                t = 0;
                i++;
                j++;
            }
            else if (n[i] == "%") {
                break;
            }
            t += n[i];
            i++;
        }
        b = t;
        if (j == 0) {
            var r = Number(a) + Number(a) * Number(b) / 100;
            document.getElementById("t2").value = "=" + r;
        }
        else {
            var r = 100 * Number(a) / (Number(b) + 100);
            document.getElementById("t2").value = "=" + r;
        }
    }
    else {
        document.getElementById("t2").value = "=" + eval(n);
    }
}