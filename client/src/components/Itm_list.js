import React from 'react'
import Type_list from './Type_list'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useAppContext } from '../context/Itmcontext';

export default function Itm_list() {

    const { products } = useAppContext();
    // console.log(products);
    // console.log(featureProducts);

    return (
        <>
            <div className="dennis-head">
                <div className="row justify-content-center menu_sty_text">
                    <div className="col-md-7 text-center heading-section ftco-animate pop-outinf">
                        <span className="subheading">Our</span>
                        <h2 className="mb-4">Menu</h2>
                    </div>
                </div>
            </div>
            <div className='contentcenter'>
                {products.map((itms) => (
                    <div className="dennis-maindish" key={itms.itm}>
                        {/* <div key={itms.itm} > */}
                        <div className='dennis-mainhead'>
                            <h2 className='dennis-maindishhead'>{itms.itm}</h2>
                        </div>
                        <center>
                            <hr />
                            {/* <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p> */}
                        </center>
                        {/* {console.log(itms.subitms)} */}
                        <Scrollbars style={{ width: 620, height: 400 }} className='sc_bar'>
                            <Type_list types={itms.subitms} />
                        </Scrollbars>
                        {/* </div> */}
                    </div>
                ))}
            </div >
        </>
    )
}


// const menu = [{
//     itm: 'Maggi',
//     types: [{
//         name: 'Masala Maggi',
//         price: 40,
//         ingredient: 'Maggi Noodles, Maggi Masala, Onion, Tomato, Capsicum',
//         stock: 20,
//         rating: 4.5,
//         review: 25
//     },
//     {
//         name: 'Butter Maggi',
//         price: 50,
//         ingredient: 'Maggi Noodles, Butter',
//         stock: 15,
//         rating: 4.0,
//         review: 18
//     },
//     {
//         name: 'Cheese Maggi',
//         price: 60,
//         ingredient: 'Maggi Noodles, Cheese',
//         stock: 25,
//         rating: 4.8,
//         review: 59
//     },
//     {
//         name: 'Veggie Maggi',
//         price: 45,
//         ingredient: 'Maggi Noodles, Mixed Vegetables',
//         stock: 18,
//         rating: 4.2,
//         review: 42
//     },
//     {
//         name: 'Spicy Maggi',
//         price: 55,
//         ingredient: 'Maggi Noodles, Spices',
//         stock: 14,
//         rating: 4.3,
//         review: 23
//     },
//     {
//         name: 'Egg Maggi',
//         price: 65,
//         ingredient: 'Maggi Noodles, Egg',
//         stock: 12,
//         rating: 4.6,
//         review: 12
//     },
//     {
//         name: 'Mushroom Maggi',
//         price: 70,
//         ingredient: 'Maggi Noodles, Mushrooms',
//         stock: 20,
//         rating: 4.4,
//         review: 25
//     },
//     {
//         name: 'Schezwan Maggi',
//         price: 60,
//         ingredient: 'Maggi Noodles, Schezwan Sauce',
//         stock: 22,
//         rating: 4.5,
//         review: 24
//     },
//     {
//         name: 'Spinach Maggi',
//         price: 55,
//         ingredient: 'Maggi Noodles, Spinach',
//         stock: 16,
//         rating: 4.1,
//         review: 32
//     },
//     {
//         name: 'Corn and Cheese Maggi',
//         price: 70,
//         ingredient: 'Maggi Noodles, Corn, Cheese',
//         stock: 24,
//         rating: 4.7,
//         review: 21
//     }]
// },
// {
//     itm: 'Garlic Toast',
//     types: [{
//         name: 'Cheese Chilly Garlic Toast',
//         price: 90,
//         ingredient: 'Bread, Cheese, Chilly, Garlic',
//         stock: 18,
//         rating: 4.2,
//         review: 10
//     },
//     {
//         name: 'Paneer Toast',
//         price: 100,
//         ingredient: 'Bread, Paneer',
//         stock: 12,
//         rating: 4.6,
//         review: 9
//     },
//     {
//         name: 'Beans Toast',
//         price: 80,
//         ingredient: 'Bread, Beans',
//         stock: 22,
//         rating: 4.0,
//         review: 8
//     },
//     {
//         name: 'Garlic Butter Toast',
//         price: 85,
//         ingredient: 'Bread, Garlic Butter',
//         stock: 20,
//         rating: 4.4,
//         review: 9
//     },
//     {
//         name: 'Pesto Garlic Toast',
//         price: 95,
//         ingredient: 'Bread, Pesto Sauce, Garlic',
//         stock: 15,
//         rating: 4.7,
//         review: 11
//     },
//     {
//         name: 'Avocado Toast',
//         price: 110,
//         ingredient: 'Bread, Avocado, Tomatoes',
//         stock: 10,
//         rating: 4.8,
//         review: 12
//     },
//     {
//         name: 'Nutella Banana Toast',
//         price: 120,
//         ingredient: 'Bread, Nutella, Banana',
//         stock: 12,
//         rating: 4.5,
//         review: 5
//     },
//     {
//         name: 'Cinnamon Sugar Toast',
//         price: 80,
//         ingredient: 'Bread, Cinnamon, Sugar',
//         stock: 25,
//         rating: 4.3,
//         review: 23
//     },
//     {
//         name: 'Mushroom Garlic Toast',
//         price: 105,
//         ingredient: 'Bread, Mushrooms, Garlic',
//         stock: 18,
//         rating: 4.6,
//         review: 15
//     },
//     {
//         name: 'Honey Almond Toast',
//         price: 100,
//         ingredient: 'Bread, Honey, Almonds',
//         stock: 14,
//         rating: 4.2,
//         review: 8
//     }]
// },
// {
//     itm: 'Bread',
//     types: [{
//         name: 'Garlic Herb Bread',
//         price: 85,
//         ingredient: 'Bread, Garlic, Herbs',
//         stock: 11,
//         rating: 4.2,
//         review: 7
//     },
//     {
//         name: 'Rye Bread',
//         price: 70,
//         ingredient: 'Rye Bread',
//         stock: 14,
//         rating: 4.0,
//         review: 6
//     },
//     {
//         name: 'Cinnamon Raisin Bread',
//         price: 90,
//         ingredient: 'Bread, Cinnamon, Raisins',
//         stock: 9,
//         rating: 4.3,
//         review: 8
//     },
//     {
//         name: 'Sourdough Bread',
//         price: 80,
//         ingredient: 'Sourdough Bread',
//         stock: 12,
//         rating: 4.1,
//         review: 7
//     },
//     {
//         name: 'Oatmeal Bread',
//         price: 75,
//         ingredient: 'Oatmeal Bread',
//         stock: 16,
//         rating: 4.4,
//         review: 8
//     },
//     {
//         name: 'Baguette',
//         price: 95,
//         ingredient: 'Baguette',
//         stock: 10,
//         rating: 4.5,
//         review: 7
//     },
//     {
//         name: 'Pumpernickel Bread',
//         price: 70,
//         ingredient: 'Pumpernickel Bread',
//         stock: 13,
//         rating: 4.0,
//         review: 6
//     },
//     {
//         name: 'Cranberry Sourdough',
//         price: 85,
//         ingredient: 'Bread, Cranberries, Sourdough',
//         stock: 11,
//         rating: 4.3,
//         review: 7
//     },
//     {
//         name: 'Challah Bread',
//         price: 100,
//         ingredient: 'Challah Bread',
//         stock: 8,
//         rating: 4.6,
//         review: 9
//     },
//     {
//         name: 'Whole Wheat Bread',
//         price: 75,
//         ingredient: 'Whole Wheat Bread',
//         stock: 15,
//         rating: 4.2,
//         review: 7
//     }]
// },
// {
//     itm: 'Sandwhich',
//     types: [{
//         name: 'BBQ Pulled Pork Sandwich',
//         price: 95,
//         ingredient: 'Bread, Pulled Pork, BBQ Sauce',
//         stock: 12,
//         rating: 4.5,
//         review: 8
//     },
//     {
//         name: 'BLT Sandwich',
//         price: 85,
//         ingredient: 'Bread, Bacon, Lettuce, Tomato',
//         stock: 14,
//         rating: 4.2,
//         review: 7
//     },
//     {
//         name: 'Chicken Caesar Wrap',
//         price: 90,
//         ingredient: 'Tortilla, Chicken, Caesar Dressing',
//         stock: 10,
//         rating: 4.4,
//         review: 9
//     },
//     {
//         name: 'Tuna Salad Sandwich',
//         price: 80,
//         ingredient: 'Bread, Tuna Salad, Lettuce',
//         stock: 15,
//         rating: 4.1,
//         review: 7
//     },
//     {
//         name: 'Egg Salad Sandwich',
//         price: 75,
//         ingredient: 'Bread, Egg Salad, Pickles',
//         stock: 16,
//         rating: 4.0,
//         review: 6
//     },
//     {
//         name: 'California Turkey Club',
//         price: 100,
//         ingredient: 'Bread, Turkey, Avocado, Bacon',
//         stock: 9,
//         rating: 4.6,
//         review: 8
//     },
//     {
//         name: 'Reuben Sandwich',
//         price: 95,
//         ingredient: 'Bread, Corned Beef, Sauerkraut',
//         stock: 11,
//         rating: 4.3,
//         review: 7
//     },
//     {
//         name: 'Vegetable Panini',
//         price: 85,
//         ingredient: 'Ciabatta, Mixed Vegetables, Pesto',
//         stock: 13,
//         rating: 4.2,
//         review: 7
//     },
//     {
//         name: 'Turkey and Cranberry Wrap',
//         price: 90,
//         ingredient: 'Tortilla, Turkey, Cranberry Sauce',
//         stock: 8,
//         rating: 4.7,
//         review: 9
//     },
//     {
//         name: 'Club Wrap',
//         price: 85,
//         ingredient: 'Tortilla, Turkey, Ham, Bacon',
//         stock: 12,
//         rating: 4.4,
//         review: 8
//     }]
// },
// {
//     itm: 'Beverages',
//     types: [{ name: 'Cold Coffeed', price: 50, ingredient: 'Coffee,Milk,Ice Cream' }, { name: 'Bournvita', price: 50, ingredient: 'Milk,Bournvita' }, { name: 'Espresso Coffee', price: 50, ingredient: 'Coffee' }, { name: 'Hot Bournvita', price: 50, ingredient: 'Milk,Bournvita' }]
// }
// ]