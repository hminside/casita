window.addEventListener("load", () => {
    const labels = document.querySelectorAll(
        "#room-selector label"
    );
    const form = document.querySelector("#form");

    for (var element of labels) {
        element.addEventListener("click", handleSelectorClick);
    }

    form.addEventListener("submit", handleFormSubmit);
});

const handleSelectorClick = (e) => {
    for (var siblings of e.target.parentElement.children) {
        siblings.classList.remove("grow-selector");
    }

    e.target.classList.add("grow-selector");
}

const handleFormSubmit = (e) => {
    e.preventDefault();

    const fields = [];

    fields.push(document.querySelector("#name"));
    fields.push(document.querySelector("#email"));
    fields.push(document.querySelector("#check-in"));

    // if at least one of the fiels == "empty" - error
    let error = fields.some(f => f.value.trim() === "");

    if (error) {
        Toastify({
            text: "빈칸의 모든 정보를 입력해주세요",
            duration: 3000,
            style: {
                background: "#D99694"
            }
        }).showToast();
    } else {
        Toastify({
            text: " 예약완료! 자세한 내용은 이메일을 확인하세요.",
            duration: 3000,
            style: {
                background: "#7FA98E"
            }
        }).showToast();
        clearForm();
    }
}

function autoHypenPhone(str){
    str = str.replace(/[^0-9]/g, '');
    var tmp = '';
    if( str.length < 4){
        return str;
    }else if(str.length < 7){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    }else if(str.length < 11){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    }else{              
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
    }
    return str;
}

var cellPhone = document.getElementById('cellPhone');
cellPhone.onkeyup = function(event){
event = event || window.event;
var _val = this.value.trim();
this.value = autoHypenPhone(_val) ;
}