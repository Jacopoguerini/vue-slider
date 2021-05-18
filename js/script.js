var app = new Vue ({
    el: "#root",
    data: {
        images: {
            url: [
                "https://i.pinimg.com/originals/0d/af/73/0daf73d3471efc7ae0392b9255773ee9.jpg",
                "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88935/92996/Joker-Joaquin-Phoenix-Advance-Style-Poster-buy-original-movie-posters-at-starstills__08883.1559577196.jpg?c=2?imbypass=on"
            ]
        },
        imgIndex: 0
    },
    methods: {

        nextImage: function () {
          this.imgIndex++;
          if (this.imgIndex == this.images.url.length) {
            this.imgIndex = 0;
          }  
        },
        prevImage: function () {
            this.imgIndex--;
            if (this.imgIndex < 0) {
                this.imgIndex = this.images.url.length - 1;
            } 
        }
    }
});