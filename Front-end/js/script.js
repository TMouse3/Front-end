const PI = 3.14;

let areaCircle = () =>
{
    let eleResult = document.getElementById('bankinh');
    BK = eleResult.value;
    let area = PI * BK * BK;
    var elementResult = document.getElementById('result');
    elementResult.innerHTML = "Chu vi hình tròn có bán kính " + BK + " là: " + area;
}

function showAlert(rs)
{
    alert("Hello World!");
}

let add = () =>
{
    let ele1 = document.getElementById('soA');
    soA = Number(ele1.value);
    let ele2 = document.getElementById('soB');
    soB = Number(ele2.value);
    let add = soA + soB;
    var eleresult = document.getElementById('result');
    eleresult.innerHTML = soA + " + " + soB + " = " + add;
}
