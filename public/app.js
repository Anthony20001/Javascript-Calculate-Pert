
    var btn_submit = document.getElementById("btn_submit");
    var input_tiempo_o = document.getElementById("tiempo_optimista");
    var input_tiempo_m = document.getElementById("tiempo_medio");
    var input_tiempo_p = document.getElementById("tiempo_pesimista");
    var table = document.getElementById("tbody");
    var form_pert = document.getElementById("form_pert");

    btn_submit.addEventListener("click", (e) => {
        e.preventDefault();
        var tiempo_o = input_tiempo_o.value.split(' ');
        var tiempo_m = input_tiempo_m.value.split(' ');
        var tiempo_p = input_tiempo_p.value.split(' ');
        var th1 = document.createElement("th");
        var th2 = document.createElement("th");
        var tr = document.createElement("tr");
        table.appendChild(tr);
        tr.appendChild(th1);
        tr.appendChild(th2);
        var tiempo = (Number(tiempo_o) + 4*Number(tiempo_m) + Number(tiempo_p))/6;
        var varianza = Math.pow(((tiempo_p-tiempo_o)/6), 2);
        th1.innerHTML = tiempo;
        th2.innerHTML = varianza.toFixed(3);
        input_tiempo_o.innerHTML = "e";
        input_tiempo_m.innerHTML = "";
        input_tiempo_p.innerHTML = "";
        form_pert.reset();
    });


    
