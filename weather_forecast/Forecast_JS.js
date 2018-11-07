$(document).ready(function(){

	$.getJSON("city.list.json", function(data){

		$(".main__select").on("click", function(){

                for(var key in data){

				     if(data[key].country=="UA"){

			$(".main__select").append($(`<option value="${data[key].id}">${data[key].name}</option>`));

                   }
               }


			$(".main__select").on("change", function(e){

                $.get(

                    "https://api.openweathermap.org/data/2.5/weather",

                    {"id":e.target.value,
                        "appid":"c3efdc553539f8b96ddcbdaa9ccd1a38"
                    },

					function(data){

						let out = " ";

						out +="Weather:<b>"+" "+data.weather[0].main+"</b><br>";
				
						out +="Temperature:<b>"+" "+Math.round(data.main.temp-273)+"&#176;C</b><br>";

						out +="Humidity:<b>"+" "+data.main.humidity+"%</b><br>";

						out +="Pressure:<b>"+" "+Math.round(data.main.pressure*0.00750063755419211*100)+" мм.рт.ст</b><br>";

						out +="Visibility:<b>"+" "+Math.round(data.visibility/1000)+"км</b><br>";

					$("#weather").html(out);
					}
				);
			});
		})
	});
});
