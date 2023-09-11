export const productContext = {
    useProducts() {
      return [
        {
            id: 1,
            productImage: "https://i.ibb.co/qW0P8r7/product1.jpg",
            productName: "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
            price: {
                listPrice: 281300,
                bestPrice: 259900,
            },
            installments: {
                count: 10,
                totalValue: 259900
            },
        },
        {
            id: 2,
            productImage: "https://i.ibb.co/ypntjdX/product2.webp",
            productName: "Combo Samsung Smart TV 55\" QLED 4K Q65C + Soundbar Samsung HW-B555",
            price: {
                listPrice: 489900,
                bestPrice: 379900,
            },
            installments: {
                count: 12,
                totalValue: 379900
            },
        }
      ]
    },
  }