import React, {Component }from 'react';
import CarElements from './CarElements.js'

const styles = {
    text: {
      padding: 20,
    }
  }


export default class List extends Component {
    mapElement = (object) => {
        return <CarElements key={object.id} text={object.model}/>
    }

    render() {
        return (
            <div>
                <ul style={styles.text}>
                    {this.props.arr.map(({ id, model }) => <CarElements key={id} text={model}/>)}
                </ul>
            </div>
        )
    }       
}