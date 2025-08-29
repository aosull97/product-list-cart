# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).

## Table of contents

- [Frontend Mentor - Product list with cart solution](#frontend-mentor---product-list-with-cart-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge
The challenge was to build a product list page that includes a functional cart and get it looking as close to the design as possible. 

### Screenshot

![](/images/page-screenshot.png)

### Links

- Live Site URL: [https://aosull97.github.io/product-list-cart/]

## My process
I first looked over the provided design brief to see what the finished product should look like. Then I added the basic structure with HTML, including any images that needed displaying. I then added styling with Tailwind CSS until it looked as close to the design as possible.

### Built with

- Next.js
- Tailwind CSS
- HTML5
- TypeScript

### What I learned

I learnt how to use the reduce() method to perform a function on items in an array.  

```tsx
const totalCartAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)
```

### Useful resources

- [Reduce basics video](https://www.youtube.com/watch?reload=9&app=desktop&v=Wl98eZpkp-c) - This video helped me to understand how to use the reduce() method.
- [Google Fonts](https://fonts.google.com/) - I could find the font requested in the design brief here.
- [Tailwind documentation](https://tailwindcss.com/docs/installation/using-vite) - I referred to this documentation when applying styling with Tailwind CSS. 

## Author

- Frontend Mentor - [@aosull97](https://www.frontendmentor.io/profile/aosull97)
- LinkedIn - [aliceosullivan97](www.linkedin.com/in/aliceosullivan97)