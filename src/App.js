import React, { Component } from 'react';
import CarList from './CarList.js'

export default class App extends Component {
    state = {
        count: 4,
        title: 'car-list',
        array: [
            {
                id: 0,
                model: "Mazda",
                color: 'red',
            },
            {
                id: 1,  
                model: "Toyota",
                color: 'red',
            },
            {
                id: 2,
                model: "WV",
                color: 'blue',
            },
            {
                id: 3,
                model: "Mercedes",
                color: 'red',
            },    
        ]
    }
        addCar(){
            const { state: {array} } =  this
            // const lastElement = array[array.length -1]
            this.setState({
                array: [
                    ...this.state.array,
                    {
                    color: 'blue',
                    model: 'New Car'
                    }
                ]
            })
        }

        removeCar(){
            const {array,title,count} = this.state
            this.setState({
                array: array.slice(1)           
            })
        }

        filterCar(){    
            const{ state: {array}}=this
            const sort = this.state.color
            const sortParam = this.state.color = 'blue'
                this.setState({                                                         
                    array: array.filter(sort => {
                        return sortParam
                    })
                })
        }
        
        
        render(){
            return(
                <div>
                    <CarList arr={this.state.array}/> 
                        <button style={{ padding: 20 }} onClick={this.addCar.bind(this)}>
                        ADD ME
                        </button>
                        <button style={{ padding: 20 }} onClick={this.removeCar.bind(this)}>
                            REMOVE ME
                        </button>
                        <button style={{ padding: 20 }} onClick={this.filterCar.bind(this)}>
                           FILTER
                        </button>
                    </div>  
            )       
         }
}


  