import React, { Component } from 'react';

export default class Mesa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartasJuez: [],
            cartasUser: []
        }

        this.pedirCarta = this.pedirCarta.bind(this);
    }

    componentDidMount(){
        this.jugar()
    }

    jugar(){
        fetch('http://localhost:3001/server/crear')
        .then(res => res.json())
        .then(data => {
            fetch('http://localhost:3001/server/mezclar')
            .then(res => res.json())
            .then(data => {
                this.setState({cartasJuez: data});
            })
        })
    }

    pedirCarta(){
        fetch(`http://localhost:3001/server/pedir`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'aplication/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({cartasJuez: data[1]})
            this.setState({cartasUser: data[0]})
        });
    }

    render() {
        return (
            <div class="w-2/3 mx-auto -400">

                <div class="bg-white  shadow-md rounded my-6">
                    <div class="bg-white" >
                        <div>
                            <h2>Cartas</h2>
                        </div>
                    </div>
                    <div class="bg-white" >
                        {
                            this.state.cartasUser.map(item => {return(
                                <div class="bg-black">
                                    <h2 class="white">{`${item.rotula}${item.palo}`}</h2>
                                </div>
                            )})
                        }
                    </div>
                <button class="uppercase bg-grey-lightest font-bold uppercase text-sm" onClick={this.pedirCarta}>
                Jugar
                </button>
            </div>
        </div>

        )
    }
}