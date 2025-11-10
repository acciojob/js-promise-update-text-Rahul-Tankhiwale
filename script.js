//your JS code here. If required.

let outputDiv = document.getElementById("output");
function createPromise(name){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(`${name}`)
		},1000)
	})

.then((result)=>{
	outputDiv.textContent = result;
})
.catch((err)=>{
	outputDiv.textContent = "Catch Error"
})