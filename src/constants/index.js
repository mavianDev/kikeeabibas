import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '2K +', label: 'Brands' },
    { value: '1M +', label: 'Shops' },
    { value: '500K +', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Kikee Bottom-01",
        price: "$581.20",
    },
    {
        imgURL: shoe5,
        name: "Kikee Bottom Dang-10",
        price: "$656.40",
    },
    {
        imgURL: shoe6,
        name: "Kikee Bottom Dirt-100",
        price: "$561.30",
    },
    {
        imgURL: shoe7,
        name: "Kikee Bottom Water-001",
        price: "$924.50",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Down Force 1", link: "/" },
            { name: "Down Max 1", link: "/" },
            { name: "Down Jordan 1", link: "/" },
            { name: "Down Force 2", link: "/" },
            { name: "Kikee Waffle Racer", link: "/" },
            { name: "Kikee Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works?", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@kikee.com", link: "mailto:customer@kikee.com" },
            { name: "+123456789", link: "tel:+123456789" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "Facebook Logo" },
    { src: twitter, alt: "Twitter Logo" },
    { src: instagram, alt: "Instagram Logo" },
];