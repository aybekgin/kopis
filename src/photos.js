var app=new Vue({el:'#app',data:{cursor:0,selectedAlbum:0,albums:alb,},methods:{changeSelectedAlbum:function(number){this.selectedAlbum=number},changeSelectedPhoto:function(number){this.albums[this.selectedAlbum].selectedPhoto=number},isSelectedAlbum:function(index){return(index===this.selectedAlbum)?'fc-blue':''},isSelectedPhoto:function(index){return(index===this.albums[this.selectedAlbum].selectedPhoto)?'selected':''},selectAlbum:function(index){this.selectedAlbum=index
this.cursor=0},selectPhoto:function(index){this.albums[this.selectedAlbum].selectedPhoto=index},getStyle:function(photo){return"background-image: url('"+photo+"');"}}})