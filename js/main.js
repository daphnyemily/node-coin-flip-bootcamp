//Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game

//what I'm gathering is: making a basic HTML file with the scripts to main.js, put a fetch function into the main.js and using the server.js example and just implementing a flip function into the api else if section.



document.getElementById('heads').addEventListener('click',flip)
 
document.getElementById('tails').addEventListener('click',flip)
 
     function flip(e){
    	console.log(e)
		const flipValue = e.target.value

		fetch (`/api?coinflip=${flipValue}`)
			.then(res => res.json())
			.then(result => {
			    showResult(result)
				console.log(result)
				document.querySelector('h3').innerText = `You picked ${flipValue}`

				function showResult(result){
					if(result === 'Winner'){
						document.getElementById('finalGameStatus').innerHTML = "You WIN!"
			
					}else{
						document.getElementById('finalGameStatus').innerHTML = "Sorry you lose"
					}
				}
			})

			.catch(err =>{
			console.log(`error ${err}`)
			})

	}



	

    