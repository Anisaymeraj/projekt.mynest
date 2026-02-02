console.log("hello")
let infos =[{
    title: "title 1",
    image: "image/foto1.jpg",
    description : "new description "

},
{
    title: "title 2",
    image: "image/foto1.jpg",
    description : "description "

},
]
 let vendiInformacioneve = document.getElementById("infos")
 for(let i=0;i<infos.length;i++){
  vendiInformacioneve.innerHTML = vendiInformacioneve.innerHTML+
  `<div class="col">
      <div class="card">
  <img src="${infos[i].image}" class="card-img-top" alt="${infos[i].title}">
  <div class="card-body">
    <h5 class="card-title">${infos[i].title}</h5>
    <p class="card-text">${infos[i].description}</p>
  </div>
</div>
    </div>`
 }