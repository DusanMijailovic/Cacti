





/*--------------------DINAMIC DESTINATIONS---------------------------*/



var cacti = [
{
  name: "Bunny ears",
    price: 6,
  picture: {
    src: "cacti1.jpg",
    alt:"bunny ears"
  }
},

{
  name: "Golden barrel",
    price: 5,
  picture: {
    src: "cacti2.jpg",
    alt: "golden barrel"
  }
},

{
  name: "Pincushion",
    price:3,
  picture: {
    src: "cacti3.jpg",
    alt:"Pincushion Cactus"
  }
},
{
  name: "Chin",
    price: 5,
  picture: {
   src: "cacti4.jpg",
   alt:"Chin Cactus"
 }
},
{
  name: "Old Lady",
    price: 7,
  picture: {
    src: "cacti5.jpg",
    alt:"Old Lady Cactus"
  }
},
{
  name: "Prickly Pear",
  price: 6,
  picture: {
   src: "cacti6.jpg",
   alt: "Prickly Pear Cactus"
 }
}
];

  var cac = "";
for(var i = 0; i < cacti.length; i++)  {
  cac += "<div class='col span-1-of-3 cacti-garden'>";
  cac +="<div class='organisation-box'>" ;
  cac += "<div>";
  cac+= "<h3 class='title'>" + cacti[i].name + "</h3>";
  cac += "<img src='resources/images/" + cacti[i].picture.src + "' alt='" + cacti[i].picture.alt + "'>";
  cac +="</div>";
  cac += "<div><ul><li>Price: <span class='price'>" + cacti[i].price + "</span>EUR</li></ul></div>"; 
  cac += "<div><a href='contact.html' class='btn btn-full fade'>Buy</a></div>";
  cac +="</div></div>";
}

document.querySelector('.new').innerHTML = cac;









function sortCacti() {

  //sortiranje a-z
  $('.sort-name').click(function(e){
    e.preventDefault();
    var garden = $('.cacti-garden');
    garden.sort(function(a,b){
    var a = $(a).find('.title').text();
    var b = $(b).find('.title').text();
     if(a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else { 
      return 0;
    }
   });
    $('.new').append(garden);
  });



$('.sort-price').click(function(e){
  e.preventDefault();
  var garden= $('.cacti-garden');
  garden.sort(function(a,b){
   var a = parseInt($(a).find('.price').text());
   var b = parseInt($(b).find('.price').text());
    if (a > b) { 
      return -1; 
    } else if (a < b) { 
      return 1;
    } else { 
      return 0;
    }
  });
  $('.new').append(garden);
});


//sortiranje-rastuca cena
$('.sort-price2').click(function(e){
  e.preventDefault();
  var garden=$('.cacti-garden');
  garden.sort(function(a,b){
   var a = parseInt($(a).find('.price').text());
   var b = parseInt($(b).find('.price').text());
   if(a > b){
    return 1;
  } else if(a < b) {
    return -1;
  } else {
    return 0;
  }
 });
  $('.new').append(garden);
});


}
sortCacti();
