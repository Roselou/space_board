import React, {Component} from 'react'

class Galaxy extends Component {
    state = {
       nasa: [],

    }

    componentDidMount = () => {
        fetch('https://images-api.nasa.gov/search?q=galaxies&media_type=video')

        .then(res => res.json())
        .then(data => {
            this.setState({nasa: data.collection.items})
        })
    }


    render(){
        console.log(this.state.nasa)
        let nasaResult = this.state.nasa.map(item => {
            return <div key = {item.data[0].nasa_id}>
            <h3> {item.data[0].title} </h3>
            <video controls src={item.href[0]} alt="NASA Galaxy" width="620"> </video>
            <p> {item.data[0].description} </p>
            </div>
        })
        return (
            <div> 
             {nasaResult}
                </div>


        )
    }

//DT    
}

export default Galaxy;