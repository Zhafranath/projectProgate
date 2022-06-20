const btn = document.getElementById("btn");
tampil();


async function fetchData(){
    const response = await fetch("https://feriirawan-api.herokuapp.com/list/symbols/province/200",{
        method: "GET"
    });

    const json = await response.json();
    console.log(json)
    return json;
}

async function tampil(){
    const data = await fetchData();
    let select = document.getElementById("provinsi");
    for (let i = 0; i<data.lambang.length;i++){
        // console.log(data.lambang[i].title);
        // console.log(data.lambang[i].url);
        let p = document.createElement("option");
        p.value = data.lambang[i].url;
        p.innerHTML = data.lambang[i].title;
        select.appendChild(p);
    }
}

function getSelectedValue(){
    let dipilih = document.getElementById("provinsi").value;
    console.log(dipilih);
    document.getElementById('img').src = dipilih;
}

