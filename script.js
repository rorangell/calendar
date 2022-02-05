const container = document.getElementById("container");
// array
let store=localStorage.getItem("save")

let list = [
    {
        hour: "1am",
        text: "",
        time: 1
    },
    {
        hour: "2am",
        text: "",
        time: 2
    },
    {
        hour: "3am",
        text: "",
        time: 3
    },
    {
        hour: "4am",
        text: "",
        time: 4
    },
    {
        hour: "5am",
        text: "",
        time: 5
    },
    {
        hour: "6am",
        text: "",
        time: 6
    },
    {
        hour: "7am",
        text: "",
        time: 7
    },
    {
        hour: "8am",
        text: "",
        time: 8
    },
    {
        hour: "9am",
        text: "",
        time: 9
    },
    {
        hour: "10am",
        text: "",
        time: 10
    },
    {
        hour: "11am",
        text: "",
        time: 11
    },
    {
        hour: "12pm",
        text: "",
        time: 12
    },
    {
        hour: "1pm",
        text: "",
        time: 13
    },
    {
        hour: "2pm",
        text: "",
        time: 14
    },
    {
        hour: "3pm",
        text: "",
        time: 15
    },
    {
        hour: "4pm",
        text: "",
        time: 16
    },
    {
        hour: "5pm",
        text: "",
        time: 17
    },
    {
        hour: "6pm",
        text: "",
        time: 18
    },
    {
        hour: "7pm",
        text: "",
        time: 19
    },
    {
        hour: "8pm",
        text: "",
        time: 20
    },
    {
        hour: "9pm",
        text: "",
        time: 21
    },
    {
        hour: "10pm",
        text: "",
        time: 22
    },
    {
        hour: "11pm",
        text: "",
        time: 23
    },
    {
        hour: "0am",
        text: "",
        time: 24
    },
];
if (store) {
    list=JSON.parse(store)
}

function render() {
    container.innerHTML = ""
    let className=""
    let actual=new Date().getHours()
    
    list.forEach(function (item, index) { //passar por cada elemento do array e executa
        if (item.time<actual) {
            className="past"
        }
        if (item.time>actual) {
            className="future"
        }
        if (item.time==actual) {
            className="present"
        }

        container.innerHTML += `<div class="row ${className}">
        <div class="hour">${item.hour}</div>
        <textarea name="" id="${index}" class="description">${item.text}</textarea>
        <button class="saveBtn" onclick="save(${index})">save</button>
        </div>`
    });
}
function save(index){
    list[index].text=document.getElementById(index).value
    render()
    localStorage.setItem("save",JSON.stringify(list))    
}
// passar pela array e gerar um elemento HTML pra cada item da array - iteration

render()