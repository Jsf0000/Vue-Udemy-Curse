const app = Vue.createApp({
    // data and functions
    // template: '<h2> I am the template</h2>'
    data () {
        return {
            url: 'https://www.youtube.com/@fromtheair3479',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav:true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav:false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav:true}
            ]
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 45,
            // x: 0,
            // y: 0
        }
    },
    methods: {
        // changeTitle(title) {
        //     // this.title = 'Words of Radiance'
        //     this.title = title
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        // event methods with mouse
        // handleEvent(event, data) {
        //     console.log(event, event.type)
        //     if (data) {
        //         console.log(data)
        //     }
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }
        changeClass(book){
            book.isFav = !book.isFav
        }
    },
    // define data computed operations
    computed: {
        filterBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')