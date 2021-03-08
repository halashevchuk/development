// async function main() {


// let response = await fetch('http://jsonplaceholder.typicode.com/photos');

// let json = await response.json()




//     json.forEach((item, index) => { 
//     if (index<100){
//     let img = document.createElement('img');
//     //img.style = 'position:fixed;top:10px;left:10px;width:100px';
//     document.body.append(img);
//     img.src = item.url
//     }
// })


// }
var rating = document.querySelector('.rating')
var ratingItem = document.querySelectorAll('.rating .rating-item');
var activeItems = document.querySelectorAll('.rating .rating-item.active').length;



var cStars = function (nowPos) {

    for (var i = 0; ratingItem.length > i; i++) {
        ratingItem[i].classList.remove('active');
    }
    for (var i = 0; nowPos + 1 > i; i++) {
        ratingItem[i].classList.toggle('active');
    }
}


rating.addEventListener('mouseover', function (e) {
    var myTarget = e.target;
    var i = ratingItem.length;
    while (i--) {
        if (ratingItem[i] == myTarget) {
            var currentIndex = i;
            break;
        }
    }
    cStars(currentIndex);
});



rating.addEventListener('click', function(e) {
	var myTarget = e.target;
  var i = ratingItem.length;
  while(i--) {
    if(ratingItem[i] == myTarget) {
      var currentIndex = i;
      break;
    }
  }
    cStars(currentIndex);
    activeItems = document.querySelectorAll('.rating .rating-item.active').length;
});


rating.addEventListener('mouseleave', function (e) {
    cStars(activeItems - 1);
});



