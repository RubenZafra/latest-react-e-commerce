`#React` `#Javascript` `#JSON` `#API` `#TailWindCSS` `#ReactRouter` `#ReactToastify` `#ReactIcons` `#ReactLoaderSpinner`

# React e-commerce 

## Index 📖

- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Users](#users)

## Available Scripts

In the project directory, you can run:

#### `npm i`

Installs everything needed

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Description 💻

In this project I learnt how to implement different react Hooks, create Routes to navigate through pages with React Router Dom and use the Local Storage to be able to save each user cart. It adds a different "key" for each user (`cart-items-"user"`) and loads each cart depending on the user logged. <br><br>

I learnt how useful contexts are to communicate between components without the need of an infinite loop of prop drilling and how to use `useCallback` and `useMemo` to speed up and optimize the app as well to learn the importance of having a `useReducer` to set a lot of states with just one instruction instead of having infinite `useState`. <br>

I also learnt how to use the useParams hook to access the info of each product that you click, linking you to a new route where you can see in detail all the info about the product and also you can add to cart directly from there as well. <br><br>

When you click in the cart icon it appears a sidebar containing all the products in the cart where you can add or subtract items from the list as well as removing certain items from cart or clear the full cart. <br>

All of this shows you different toats with the beautiful `React-Toastify` library to indicate that everything went as expected or if there's any error. <br><br>

All design is made with Tailwind CSS with some overwritten features. 

## Users Available

Currently there are only 2 users available to show the different carts. And the credentials are these: <br>
<br>
User: `Ruben`
Pass: `1234`
<br>
<br>
User: `Antonio`
Pass: `1234`
<br>

## Technologies Used 👨‍💻

 `React` (`useState`, `useReducer`, `useEffect`, `useContext`, `useParams`...)
 `React Router v6`
 `Create React App`
 `Tailwind CSS`
 `React Toastify`
 `React Icons`
 `React Loader Spinner`
 `Local Storage`

## Features 

### Home 🏠

![SCR-20230313-ke6](https://user-images.githubusercontent.com/90968035/224719490-9da39100-b2dd-46cb-b88d-b8e1e8c8e271.jpeg)

### Login 🤫

![SCR-20230313-kh1](https://user-images.githubusercontent.com/90968035/224719899-0f871d24-af13-41fb-8aaa-8e2c9cc45ee0.jpeg)

### Cart/Sidebar 🛒

![SCR-20230313-khl](https://user-images.githubusercontent.com/90968035/224720071-0904297d-e2a3-4144-b5f8-df2622db901a.png)

### Filter Products ⚙️

![SCR-20230313-ki4](https://user-images.githubusercontent.com/90968035/224720278-97d3680a-8401-47da-9f6d-4035a3fe63ff.png)

### Add to Cart / Product Detail View 👀

![SCR-20230313-kiu](https://user-images.githubusercontent.com/90968035/224720860-67aa9359-7dec-46e2-aeda-90650bd1a84d.png)

![SCR-20230313-kke](https://user-images.githubusercontent.com/90968035/224720979-920b2939-2856-436d-b5cc-470f06605b3b.jpeg)






