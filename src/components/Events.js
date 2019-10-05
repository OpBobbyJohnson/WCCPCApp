import React from 'react';
import Announcement from './Announcement';
import Event from './Event';
import "../css/EventsView.css";

export default class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {
                    type: "event",
                    name: "Example1",
                    attendies: ["bob", "marg", "dylan"],
                    description: "lets do somthing!!!! WOOOOHOOOOOOOOO!!!"
                },{
                    type:"annoucement",
                    name:"sermon",
                    description:"Join us at 9:30"
                }
            ]
        }
    }

    renderEvents(){
        let events = []
        let index = 0;
        for(let item of this.state.data){
            if(item.type === 'event'){
                events.push(<Event key={index} id={index} name={item.name} attendies={item.attendies} description={item.description} />)
            }
            else if (item.type === 'annoucement'){
                events.push(<Announcement key={index} id={index} name={item.name} description={item.description} />)
            }
            else{
                console.log("Aww crap invalid object :(");
            }
            index++
        }
        return events;
    }

    render() {
        console.log(JSON.stringify(this.state.data,null,2));
        return (
            <div>
                this is the events page
                <div className="eventsView">
                    {this.renderEvents()}
                </div>
            </div>
        );
    }
}