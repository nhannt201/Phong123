function selectCity() {
	var idcity = document.getElementById("thanhpho").value;
	switch (idcity) {
		case "0":
			document.getElementById("hochiminh").style.display = "block";
			document.getElementById("hanoi").style.display = "none";
		break;
		case "1":
			document.getElementById("hochiminh").style.display = "none";
			document.getElementById("hanoi").style.display = "block";
		break;
	}
}

function clickTimphong() {
	var getQuan = Number(document.getElementById("getQuan").value);
	var getGia = Number(document.getElementById("chonGT").value);
	var domain = "https://blog.phong123.com/quan";
	var tags = "";
	
	switch (getGia) {
		case 0:
			tags = "?tag=duoi-3-trieu";
		break;
		case 1:
			tags = "?tag=tu-3-den-5-trieu";
		break;
		case 2:
			tags = "?tag=tu-5-den-7-trieu";
		break;
		case 3:
			tags = "";
		break;
	}
		switch (getQuan) {
			case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12:
				window.open(domain + "/quan-"+getQuan+"/" + tags);
			break;
			case 13:
				window.open(domain + "/thu-duc/" + tags);
			break;
			case 14:
				window.open(domain + "/binh-thanh/" + tags);
			break;
			case 15:
				window.open(domain + "/go-vap/" + tags);
			break;
			case 16:
				window.open(domain + "/phu-nhuan/" + tags);
			break;
			case 17:
				window.open(domain + "/tan-phu/" + tags);
			break;
			case 18:
				window.open(domain + "/binh-tan/" + tags);
			break;
			case 19:
				window.open(domain + "/tan-binh/" + tags);
			break;
			case 20:
				window.open(domain + "/nha-be/" + tags);
			break;
			case 21:
				window.open(domain + "/binh-chanh/" + tags);
			break;
			case 22:
				window.open(domain + "/hoc-mon/" + tags);
			break;
			case 23:
				window.open(domain + "/cu-chi/" + tags);
			break;
			case 24:
				window.open(domain + "/can-gio/" + tags);
			break;
		}
}

