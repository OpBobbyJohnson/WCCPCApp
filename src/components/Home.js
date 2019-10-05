import React from 'react';
import '../css/Home.css';
import ItemDisplay from './ItemDisplay';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[
                {
                    name: "Speakers",
                    image: "/img/speaker4.jpg",
                },
                {
                    name: "Headphones",
                    image: "/img/speaker3.jpg",
                },
                {
                    name: "Watches",
                    image: "/img/watch1.jpg",
                }
            ]
        }
        this.renderProducts = this.renderProducts.bind(this);
    }
    
    renderProducts(){
        let items = [];
        this.state.products.forEach((item, index) =>{
            console.log(item);
            items.push(<ItemDisplay image={item.image} name={item.name} />)
        });
        console.log(items)
        return items;
    }

    render() {
        return(
            <div className='homeContainer'>
                <div className='sloganContainer'>
                    <h1 className='sloganText'>
                        Welcome to White Clay Creek Presbyterian Church
                    </h1>
                </div>
                {/* <div className='itemsContainer'>
                    {this.renderProducts()}
                </div> */}
            </div>
        );
    }
}