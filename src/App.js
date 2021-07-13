import React, { Component } from 'react';

class App extends React.Component {
    state = {
        filmes: []
    };

    componentDidMount() {
        fetch('https://apimovies.pythonanywhere.com/movies')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    filmes: res
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Lista de filmes</h1>
                <ul>
                    {this.state.filmes.map(item => (
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