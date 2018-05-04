var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-title="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role = "frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_CODE = 27;

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
    showDetails();
  })
}
function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailsArray = [].slice.call(thumbnails);
  return thumbnailsArray;
}
function hiddenDetails(){
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}
function showDetails(){
  'use strict';
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function(){
   frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}
function addkeyPressHandler(){
  'use strict';
  document.body.addEventListener('keyup',function(event){
    event.preventDefault();
    console.log(event.keyCode);
    if(event.keyCode === ESC_CODE){
      hiddenDetails();
    }
  });
}

function initialEvents(){
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addkeyPressHandler();
}
initialEvents();
