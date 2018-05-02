var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-title="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl,titleText){
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.src = imageUrl;
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}
function imageFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}
function titleFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}
// var firstThumbnail = document.querySelector(THUMBNAIL_LINK_SELECTOR);
function setDetailsFromThumb(thumbnail){
  'use strict';
  setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));
}
// document.addEventListener('click',function(event){
//   // 'use strict';
//   console.log(event);
//   event.preventDefault();
//   alert('you clicked!');
// });
function addThumbClickHandler(thumb){
  'use strict';
  thumb.addEventListener('click',function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
  })
}
function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailsArray = [].slice.call(thumbnails);
  return thumbnailsArray;
}
function initialEvents(){
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}
initialEvents();
/*生成某个范围的随机数*/
function getRandomNum(min,max){
  'use strict';
	var range = 0;
	if(max > min){
		range = max-min;
	}
	var rand = Math.random();
	console.log(rand);
	var randomNum = min + Math.round(rand * range);
	return randomNum;
}
function randomModifyImageUrl(){
  'use strict';
  var randomNum = getRandomNum(0,20);
  console.log(randomNum);
  var thumbnails = getThumbnailsArray();
  console.log(thumbnails[randomNum]);
  thumbnails[randomNum].setAttribute('data-image-url','images/random.jpg');
}
function resetImageUrl(){
  'use strict';
  
}
