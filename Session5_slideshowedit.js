var slideshow = {
	photoList: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"], 
	currentPhotoIndex: 0,
	nextPhoto: function(){
		if(this.currentPhotoIndex < this.photoList.length-1){
			this.currentPhotoIndex++; 
			console.log(this.photoList[this.currentPhotoIndex]);
		}else{
			console.log("End of Slideshow");
			this.pause(); 
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
	},
	playInterval: null, 
	play: function(){
		var self = this; 
		this.playInterval = setInterval(function(){
			self.nextPhoto(); 
		}, 2000); 
	},
	pause: function(){
		clearInterval(this.playInterval); 
	}
}

slideshow.play(); 