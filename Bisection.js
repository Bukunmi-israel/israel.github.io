let val1 = document.getElementById('val1').value;
let val2 = document.getElementById('val2').value;
let val3 = document.getElementById('val3').value;
let val4 = document.getElementById('val4').value;
let val5 = document.getElementById('val5').value;
let val6 = document.getElementById('val6').value;
equation = (z) => {document.write(val1*(z**3) + val2*(z**2) + val3*z + val4*1)
};

const x = equation(val5);
const y = equation(val6);


/*let x = 1
let y = 2
let i = 0
let error = 5
function trial(j){
    return(j**3)-j-1
}

while(i < 500){
    i++
    let m = (x + y)/2
    let fm = trial(m)
    document.write(m)
    document.write(fm)
    if(fm < 0){
            x = m
    }else{ y = m}};