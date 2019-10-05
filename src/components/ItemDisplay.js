import React from 'react';
import '../css/ItemDisplay.css';

export default class ItemDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='itemContainer'>
                <div className='item'>
                    <div className='itemImageDiv'>
                        <img className='itemImage' src={this.props.image} />
                    </div>
                    <div className='itemNameDiv'>
                        <h5 className='itemName'>
                            {this.props.name}
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}