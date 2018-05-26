import React, {Component} from 'react'

class BlackHole extends Component {
    state = {
        blackhole: []
    }

    componentDidMount = () => {
        fetch('https://images-api.nasa.gov/search?q=blackhole&media_type=image')
        .then(res => res.json())
        .then(data => 
            this.setState({blackhole: data.collection.items}))
        }
    

    render(){
        console.log('Black Holes', this.state.blackhole)
        let blackHoleResult = this.state.blackhole.map(item => {
            return <div key = {item.data[0].nasa_id}>
                <h3> {item.data[0].title} </h3>
                <img src={item.links[0].href} alt="NASA Star" width="620" />
                <p> {item.data[0].description} </p>
            </div>
        })
        return(
            <div>
                {blackHoleResult}
            </div>
        )
    }
//DT        
}

export default BlackHole;