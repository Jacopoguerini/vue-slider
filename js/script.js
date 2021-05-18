var app = new Vue ({
    el: "#root",
    data: {
        images: {
            url: [
                "https://www.movienco.co.uk/carteles/8200/8233/001.jpg",
                "https://cdn.shopify.com/s/files/1/1416/8662/products/seven_samurai_1954_R67_japanese_b2_original_film_art_1200x.jpg?v=1593993082",
                "https://images-na.ssl-images-amazon.com/images/I/61GgzQ7Iq7L._AC_SL1000_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/91BT34MLA5L._AC_SL1500_.jpg"
            ],
            title: [
                "Samurai I - Miyamoto Musashi",
                "I Sette Samurai",
                "Harakiri",
                "Rashomon"
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