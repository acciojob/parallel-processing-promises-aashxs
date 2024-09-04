//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
var i=0;
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
function img(){
	let image=document.createElement("img")
	image.src=images[i].url
	output.appendChild(image);
	i++;
}

function download(){
	const promise1=()=>new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(img())
		},1000)
	})
	const promise2=()=>new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(img())
		},2000)
	})
	const promise3=()=>new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(img())
		},3000)
	})

	Promise.all([promise1(),promise2(),promise3()]).then((data)=>{
		
	}).catch((err)=>{
		console.log(`Failed to load image's URL: ${image.url}`)
	})
}
