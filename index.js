const APIKEY = "98079a74e84fdc822847460a7247a1fc";



async function getBackDrop() {
	const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=98079a74e84fdc822847460a7247a1fc&language=en-EN&page=1");

	var data = await response.json();

	renderBackDrop(data);
}

function renderBackDrop(data){
    const header=document.querySelector(".headerImage");

    let image=data;

    // header.src=`https://image.tmdb.org/t/p/original/${image}`;

    for(let i=0;i<5;i++){

    image=data.results[i].backdrop_path;
    const slider=document.querySelector(".slider");

    const headerElement=document.createElement("div");
    headerElement.classList="header";

    const imageElement=document.createElement("img");
    imageElement.classList="headerImage";

    const overView=document.createElement("div");
    overView.classList="overView";

    const title=document.createElement("div");
    title.classList="title";
    title.innerHTML=data.results[i].title;
    
    const descrb=document.createElement("div");
    descrb.classList="descrb";
    descrb.innerHTML=data.results[i].overview;
    
    const date=document.createElement("div");
    date.classList="date";
    date.innerHTML=data.results[i].release_date;
    

    slider.appendChild(headerElement);
    headerElement.appendChild(imageElement);
    headerElement.appendChild(overView);
    overView.appendChild(title);
    overView.appendChild(descrb);
    overView.appendChild(date);
    imageElement.src=`https://image.tmdb.org/t/p/original/${image}`;
}
}

   
    function changeSlide(){
        let x=00;
        
    
        setInterval(()=>{
            x+=100;
           const slide=document.querySelector(".slider");
            slide.style.transform=`translate(-${x}%)`;
            if(x>=400){

             x=0;
            };
            
        },6000)
    }



function render(){
    getBackDrop();
    changeSlide();
}

render();