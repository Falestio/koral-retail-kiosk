const KiosK = {
    data() {
        return {
            // * Menu page
            showMakanan: true,
            showMinuman: false,
            showEsKrim: false,
            // * PaymentPage
            pageOne: true,
            pageTwo: false,
            pageThree: false,
            makanan: [
                {
                    name: 'Nasi goreng',
                    picture: 'nasigoreng.jpg',
                    price: 15000,
                    qty: 0,
                },
                {
                    name: 'Pecel',
                    picture: 'pecel.jpeg',
                    price: 10000,
                    qty: 0,
                },
                {
                    name: 'Rendang',
                    picture: 'rendang.jpg',
                    price: 20000,
                    qty: 0,
                },
                {
                    name: 'Sate',
                    picture: 'sate.jpg',
                    price: 10000,
                    qty: 0,
                },
                {
                    name: 'Ayam Bakar',
                    picture: 'ayambakar.jpg',
                    price: 26000,
                    qty: 0,
                },
                {
                    name: 'Ayam Geprek',
                    picture: 'ayamgeprek.jpg',
                    price: 25000,
                    qty: 0,
                },
            ],
            minuman: [
                {
                    name: 'Es Jeruk',
                    picture: 'esjeruk.jpg',
                    price: 10000,
                    qty: 0,
                },
                {
                    name: 'Es Teh',
                    picture: 'esteh.jpeg',
                    price: 10000,
                    qty: 0,
                },
                {
                    name: 'Lemonade',
                    picture: 'lemonade.jpg',
                    price: 15000,
                    qty: 0,
                },
            ],
            esKrim: [
                {
                    name: 'Es Krim Stroberi',
                    picture: 'eskrimstroberi.jpg',
                    price: 5000,
                    qty: 0,
                },
                {
                    name: 'Es Krim Coklat',
                    picture: 'eskrimcoklat.jfif',
                    price: 5000,
                    qty: 0,
                },
                {
                    name: 'Mochi Ice Cream',
                    picture: 'mochiicecream.jpg',
                    price: 5000,
                    qty: 0,
                },
            ],
            cart: [],
            total: 0,
            paymentMethods: [
                {
                    id: 'dana',
                    img: 'assets/dana.png'
                },
                {
                    id: 'gopay',
                    img: 'assets/gopay.png'
                },
                {
                    id: 'ovo',
                    img: 'assets/ovo.png'
                },
                {
                    id: 'cashier',
                    img: 'assets/cashier.png'
                },
            ]
        }
    },
    
    methods: {
        // addItemToCart(menu){
        //     this.cart.push(menu)
        // },

        removeItemFromCart(item){
            this.cart.splice(this.cart.indexOf(item), 1)
        },

        substractQty(menu){
            if (menu.qty > 0) menu.qty--
        },

        addQty(menu){
            menu.qty++
            if (this.cart.includes(menu)){
                this.cart.menu.qty++
            } else {
                this.cart.push(menu)
            }
        },

        // * Menu Routing
        toMakanan(){
            this.showMakanan = true
            this.showMinuman = false
            this.showEsKrim = false
        },
        toMinuman(){
            this.showMakanan = false
            this.showMinuman = true
            this.showEsKrim = false
        },
        toEsKrim(){
            this.showMakanan = false
            this.showMinuman = false
            this.showEsKrim = true
        },

        // * Payment Routing
        toPageOne(){
            this.pageOne = true
            this.pageTwo = false
            this.pageThree = false
        },
        toPageTwo(){
            this.pageOne = false
            this.pageTwo = true
            this.pageThree = false
        },
        toPageThree(){
            this.pageOne = false
            this.pageTwo = false
            this.pageThree = true
        },

    },

    computed: {
        kalkulasiTotal(){
            let total = 0
            this.cart.forEach((item, i) => {
                total += item.price * item.qty;
            });
            return total
        },

        checkIfCartIsEmpty(){
            if (this.cart.length == 0) {return ""}
            else { return "checkout-modal"} 
        },
    }
}


const app = Vue.createApp(KiosK)

app.mount('#kiosk')

