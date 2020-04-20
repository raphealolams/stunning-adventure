export const data = [
  {
    id: 123456,
    name: "Disposable Face Mask (Pack Of 50)",
    brand: "",
    image: "https://via.placeholder.com/200x200.png",
    price: 12000,
    promo_price: 11900,
    url: "/product/disposable-face-mask-123456",
    categories: [
      {
        id: 1,
        name: "Essentials",
        url: "/essentials",
      },
      {
        id: 2,
        name: "Masks",
        url: "/masks",
      },
    ],
    seller: {
      name: "Olive",
      url: "/olive",
    },
  },
  {
    id: 234567,
    name: "850 - 4GB RAM - Android 8.0 - 20MP",
    brand: "Nokia",
    image: "https://via.placeholder.com/200x200.png",
    price: 25999,
    promo_price: 22999,
    url: "/product/nokia-one",
    categories: [
      {
        id: 3,
        name: "Phones",
        url: "/phone",
      },
      {
        id: 4,
        name: "Nokia",
        url: "/nokia",
      },
    ],
    seller: {
      name: "Puretouch",
      url: "/puretouch",
    },
  },
  {
    id: 345678,
    name: "Washing Machine- 7kg- Pv-wd7k",
    brand: "Polystar",
    image: "https://via.placeholder.com/200x200.png",
    price: 46000,
    promo_price: 45000,
    url: "/product/washing-machine",
    categories: [
      {
        id: 5,
        name: "Household Items",
        url: "/household-items",
      },
      {
        id: 6,
        name: "Washing Machines",
        url: "/washing-machines",
      },
    ],
    seller: {
      name: "Puretouch",
      url: "/puretouch",
    },
  },
];

export const currencyFormatter = (amount) =>
  new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(amount);
