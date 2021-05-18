var app = new Vue ({
    el: "#root",
    data: {
        images: {
            url: [
                "https://i.pinimg.com/originals/0d/af/73/0daf73d3471efc7ae0392b9255773ee9.jpg",
                "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/88995/93191/The-Shawshank-Redemption-10th-Anniversary-FInal-Style-Poster-buy-original-movie-posters-at-starstills__13946.1563964643.jpg?c=2",
                "https://cdn.shopify.com/s/files/1/0969/9128/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_08339151-d79a-4b7b-8bc7-dcad04881c2c.jpg?v=1573629460",
                "https://images-na.ssl-images-amazon.com/images/I/814Cbv8EftL._AC_SL1200_.jpg",
                "https://mypostercollection.com/wp-content/uploads/2018/07/Fight-Club-MyPosterCollection.com-1.jpg"
            ]
        }
    },
    methods: {
        nextImage: function () {
            this.img.url++
        }
    }
});