/*生成某个范围的随机数*/
function getRandomNum(min,max){
  'use strict';
	var range = 0;
	if(max > min){
		range = max-min;
	}
	var rand = Math.random();
	// console.log(rand);
	var randomNum = min + Math.round(rand * range);
	return randomNum;
}
function randomModifyImageUrl(){
  'use strict';
  var randomNum = getRandomNum(0,20);
  // console.log(randomNum);
  var thumbnails = getThumbnailsArray();
  // console.log(thumbnails[randomNum]);
  thumbnails[randomNum].setAttribute('data-image-url','images/random.jpg');
}
