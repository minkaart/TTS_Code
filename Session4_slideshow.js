var slideshow = {
	photoList: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"], 
	currentPhotoIndex: 0,
	nextPhoto: function(){
		if(this.currentPhotoIndex < this.photoList.length-1){
			this.currentPhotoIndex++; 
			console.log(this.photoList[this.currentPhotoIndex]);
		}else{
			console.log("End of Slideshow");
		}
	},  
	prevPhoto: function(){
		if(this.currentPhotoIndex > 0){
			this.currentPhotoIndex--; 
			console.log(this.photoList[this.currentPhotoIndex]);
		}else{
			console.log("Beginning of Slideshow");
		}
	},
	getCurrentPhoto: function(){
		console.log(this.photoList[this.currentPhotoIndex]);
	}
}

/**var object = {
	key: value, 
	key2: value2, 
	key3: function(){
		//la la la function code stuff
		//do stuff
	}, 
	key4: function(){
		//do stuff
	}, 
	key5: [], 
	key6: {
		key: "something", 

	}

}**/


slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto(); 
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.getCurrentPhoto(); 