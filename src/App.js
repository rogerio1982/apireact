import React, { Component } from 'react';

class App extends React.Component {
    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch('https://apimovies.pythonanywhere.com/movies')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    linguagens: res
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Lista de filmes</h1>

                <ul>
                    {this.state.linguagens.map(item => (
                        <li key={item.id}>
                            <p><b>Nome:</b> {item.title}</p>
                            <p><b>Genero:</b> {item.genre}</p>
                            <p><b>Ano:</b> {item.year}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;