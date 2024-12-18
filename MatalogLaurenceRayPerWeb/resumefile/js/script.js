function sum_func(){
    let slot1 = document.getElementById("slot1").value;
    let slot2 = document.getElementById("slot2").value;
    document.getElementById("total").innerHTML=parseInt(slot1) + parseInt(slot2)
}

function subtract_func(){
    let slot1 = document.getElementById("slot1").value;
    let slot2 = document.getElementById("slot2").value;
    document.getElementById("total").innerHTML=parseInt(slot1) - parseInt(slot2)
}

function product_func(){
    let slot1 = document.getElementById("slot1").value;
    let slot2 = document.getElementById("slot2").value;
    document.getElementById("total").innerHTML=parseInt(slot1) * parseInt(slot2)
}

function divident_func(){
    let slot1 = document.getElementById("slot1").value;
    let slot2 = document.getElementById("slot2").value;
    document.getElementById("total").innerHTML=parseInt(slot1) / parseInt(slot2)
}

/*Calendar*/
    function Datefunc() {
        var thefirst = document.getElementById('base').value;
        const makeme = new Date(thefirst); 
        const today = makeme.getDay();
    
        var setme = ""
        switch (today) {
        case 0 :
            setme = "Sunday"
            break;
        case 1 :
            setme = "Monday"
            break;
        case 2 :
            setme = "Tuesday"
            break;
        case 3 :
            setme = "Wednesday"
            break;
        case 4 :
            setme = "Thursday"
            break;
        case 5 :
            setme = "Friday"
            break;
        case 6 :
            setme = "Saturday"
            break;
        default:
        setme = "Not Yet Created"
        }
    
        document.getElementById('result').innerHTML = setme;
        }	

