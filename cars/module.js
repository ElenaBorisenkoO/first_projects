
var items = document.getElementsByClassName("item");

var part = document.getElementById("part");

var tariff_part = document.getElementById("tariff-part");

var part_items = document.getElementsByClassName("list-item");

var car_img = document.getElementById("car-img");

var class_medium = document.getElementById("medium");
var class_premium = document.getElementById("premium");
var class_mini = document.getElementById("mini");

var arrow_cit = document.getElementById("arrow-cit");
var arrow_maz = document.getElementById("arrow-maz");
var arrow_merc = document.getElementById("arrow-merc");

part.addEventListener("click", function(){

tariff_part.style.display = "block";

});

//medium

class_medium.addEventListener("click", function(){
arrow_maz.style.display = "block";
arrow_cit.style.display = "none";
arrow_merc.style.display = "none";
car_img.src ="mazda/standart++.jpg"; 

for(var i=0; i<items.length; i++){

		items[i].addEventListener("mouseover", function(){
             
             if(this.id == "min"){
             car_img.src ="mazda/min.jpg";	
             }else if(this.id == "standart"){
             	car_img.src ="mazda/standart.jpg";
             }else if(this.id == "standart+"){
             	car_img.src ="mazda/standart+.jpg";
              }else if(this.id == "standart++"){
             	car_img.src ="mazda/standart++.jpg";
              }else if(this.id == "standart+++"){
             	car_img.src ="mazda/standart+++.jpg";
              }else if(this.id == "full"){
             	car_img.src ="mazda/full.jpg";
              }
		})
	};

for(var i=0; i<part_items.length; i++){

		part_items[i].addEventListener("mouseover", function(){
             
             if(this.id == "optics"){
             car_img.src ="mazda/optics.jpg";	
             }else if(this.id == "inner-rocker"){
             	car_img.src ="mazda/inner_rocker.jpg";
             }else if(this.id == "outer-rocker"){
             	car_img.src ="mazda/outer_rocker.jpg";
              }else if(this.id == "doors"){
             	car_img.src ="mazda/doors.jpg";
              }else if(this.id == "rear-fenders"){
             	car_img.src ="mazda/rear_fenders.jpg";
              }else if(this.id == "hood"){
             	car_img.src ="mazda/hood.jpg";
              }else if(this.id == "front-bumper"){
             	car_img.src ="mazda/front_bumper.jpg";
              }else if(this.id == "rear-bumper"){
             	car_img.src ="mazda/rear_bumper.jpg";
              }
		})
	};

});

//премиум

class_premium.addEventListener("click", function(){

arrow_maz.style.display = "none";
arrow_cit.style.display = "none";
arrow_merc.style.display = "block";

car_img.src ="mercedes/standart++.jpg"; 

for(var i=0; i<items.length; i++){

		items[i].addEventListener("mouseover", function(){
             
             if(this.id == "min"){
             car_img.src ="mercedes/min.jpg";	
             }else if(this.id == "standart"){
             	car_img.src ="mercedes/standart.jpg";
             }else if(this.id == "standart+"){
             	car_img.src ="mercedes/standart+.jpg";
              }else if(this.id == "standart++"){
             	car_img.src ="mercedes/standart++.jpg";
              }else if(this.id == "standart+++"){
             	car_img.src ="mercedes/standart+++.jpg";
              }else if(this.id == "full"){
             	car_img.src ="mercedes/full.jpg";
              }
		})
	};

for(var i=0; i<part_items.length; i++){

		part_items[i].addEventListener("mouseover", function(){
             
             if(this.id == "optics"){
             car_img.src ="mercedes/optics.jpg";	
             }else if(this.id == "inner-rocker"){
             	car_img.src ="mercedes/inner_rocker.jpg";
             }else if(this.id == "outer-rocker"){
             	car_img.src ="mercedes/outer_rocker.jpg";
              }else if(this.id == "doors"){
             	car_img.src ="mercedes/doors.jpg";
              }else if(this.id == "rear-fenders"){
             	car_img.src ="mercedes/rear_fenders.jpg";
              }else if(this.id == "hood"){
             	car_img.src ="mercedes/hood.jpg";
              }else if(this.id == "front-bumper"){
             	car_img.src ="mercedes/front_bumper.jpg";
              }else if(this.id == "rear-bumper"){
             	car_img.src ="mercedes/rear_bumper.jpg";
              }
		})
	};

});

//mini


class_mini.addEventListener("click", function(){

arrow_maz.style.display = "none";
arrow_cit.style.display = "block";
arrow_merc.style.display = "none";

car_img.src ="citroen/standart++.jpg";

for(var i=0; i<items.length; i++){

		items[i].addEventListener("mouseover", function(){
             
             if(this.id == "min"){
             car_img.src ="citroen/min.jpg";	
             }else if(this.id == "standart"){
             	car_img.src ="citroen/standart.jpg";
             }else if(this.id == "standart+"){
             	car_img.src ="citroen/standart+.jpg";
              }else if(this.id == "standart++"){
             	car_img.src ="citroen/standart++.jpg";
              }else if(this.id == "standart+++"){
             	car_img.src ="citroen/standart+++.jpg";
              }else if(this.id == "full"){
             	car_img.src ="citroen/full.jpg";
              }
		})
	};


for(var i=0; i<part_items.length; i++){

		part_items[i].addEventListener("mouseover", function(){
             
             if(this.id == "optics"){
             car_img.src ="citroen/optics.jpg";	
             }else if(this.id == "inner-rocker"){
             	car_img.src ="citroen/inner_rocker.jpg";
             }else if(this.id == "outer-rocker"){
             	car_img.src ="citroen/outer_rocker.jpg";
              }else if(this.id == "doors"){
             	car_img.src ="citroen/doors.jpg";
              }else if(this.id == "rear-fenders"){
             	car_img.src ="citroen/rear_fenders.jpg";
              }else if(this.id == "hood"){
             	car_img.src ="citroen/hood.jpg";
              }else if(this.id == "front-bumper"){
             	car_img.src ="citroen/front_bumper.jpg";
              }else if(this.id == "rear-bumper"){
             	car_img.src ="citroen/rear_bumper.jpg";
              }
		})
	};
});

