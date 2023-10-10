var tablo = document.querySelector("#tabloicerik");




if(localStorage.getItem("sonid") ==null) 
{
	localStorage.setItem("sonid",0);
}

function getir()
{
    let text = "";
    tablo.innerHTML = "";
    var veri = JSON.parse(localStorage.getItem("veri"));
    if(veri != null || veri !=  "")
    {
        console.log("if çalıştı ")
        var tablotext = "";
        for(let i = 0; i<veri.length;i++)
        {
            console.log("for çalıştı "+ veri[i].icerik)
            if(veri[i].tamam)
            {
                tablotext = `<tr style="background-color: rgb(165, 211, 87);"><td>${veri[i].id}</td><td>${veri[i].icerik}</td><td><button onclick="sil(${veri[i].id})">Delete</button></td></tr>`;
            }else
            {
                tablotext = `<tr><td>${veri[i].id}</td><td>${veri[i].icerik}</td><td><button onclick="sil(${veri[i].id})">Delete</button><button onclick="tamamla(${veri[i].id})">Done</button></td></tr>`;
            }
            text = text+tablotext;
        }

        tablo.innerHTML = text;
    }
}



function ekle()
{
	const input = document.querySelector("#icerikinput");
    var veri = new Array();
	let veriuzunluk;
	
	if(localStorage.getItem("sonid") !=null) 
	{
		veriuzunluk = localStorage.getItem("sonid");
		veriuzunluk = parseInt(veriuzunluk)+1;
	}else
	{
		veriuzunluk = 0;
	}

    if(localStorage.getItem("veri") ==  "" || localStorage.getItem("veri") ==  null)
    {
        veri = [];
		

    }else
	{
		veri = localStorage.getItem("veri");
        veri = JSON.parse(veri);

	}
	
    veri.push({
        "id": veriuzunluk,
        "icerik": input.value,
        "tamam": false
    });

    veri = JSON.stringify(veri);

    localStorage.setItem("veri",veri);
	localStorage.setItem("sonid", ""+veriuzunluk);
}

function sil(id)
{
	var veri = JSON.parse(localStorage.getItem("veri"));
	
	for(let i = 0; i<veri.length; i++)
	{
		if(veri[i].id == id)
		{
			veri.splice(i,1);
			break;
		}
	}
	
	veri = JSON.stringify(veri);

    localStorage.setItem("veri",veri);
	
	getir();
}

function tamamla(id)
{
    var veri = JSON.parse(localStorage.getItem("veri"));
	
	for(let i = 0; i<veri.length; i++)
	{
		if(veri[i].id == id)
		{
			veri[i].tamam = true;
			break;
		}
	}
	
	veri = JSON.stringify(veri);

    localStorage.setItem("veri",veri);
	
	getir();
	
}






