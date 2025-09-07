let grade_credit_list = document.getElementById("grade-credit-list");
let i=1
for(i;i<=5;i++){
    grade_credit_list.insertAdjacentHTML("beforeend", 
    `<div class="course" name="course${i}" id="course${i}">
                <select name="credit${i}" id="credit${i}">
                    <option value="">Credit</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="8">8</option>
                </select>
                <select name="grade${i}" id="grade${i}">
                    <option value="">Grade</option>
                    <option value="S">S</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="N">N</option>
                </select>
    </div>
    `);      
}

let creditpoints = {'S':10,'A':9,'B':8,'C':7,'D':6,'E':5,'F':0,'N':0};

function givecgpa(){
    event.preventDefault();
    let streq = document.forms["cgpaform"];
    let number_of_courses = document.getElementById('grade-credit-list').childElementCount;
    let count = 0;
    let totalgrdepoint = 0;
    let totalcredits = 0;
    for(let j = 1;j<=number_of_courses;j++){            
        let grade = streq[`grade${j}`].value;
        let credit = streq[`credit${j}`].value;
        if(grade!="" && credit!=0){
            count++
            gradepoint = creditpoints[grade];
            totalcredits+=parseInt(credit);
            totalgrdepoint += (gradepoint*credit);console.log(totalgrdepoint+" "+totalcredits);
        }
    }
    updatecgpa(totalgrdepoint/totalcredits);
    return false;
}

function addcourse(){
    grade_credit_list.insertAdjacentHTML("beforeend", 
    `<div class="course" name="course${i}" id="course${i}">
                <select name="credit${i}" id="credit${i}">
                    <option value="">Credit</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="8">8</option>
                </select>
                <select name="grade${i}" id="grade${i}">
                    <option value="">Grade</option>
                    <option value="S">S</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="N">N</option>
                </select>
    </div>
    `);   
    i++;
}

function updatecgpa(cgpa_calc){
    cgpadiv = document.getElementById("cgpa-div");
    cgpadiv.innerHTML = `<h1>${cgpa_calc.toFixed(2)}</h1>`;
    window.scrollTo({
        top: document.body.scrollHeight, 
        left: 0,  
        behavior: 'smooth' 
    });
}