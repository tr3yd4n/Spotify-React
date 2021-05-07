import React from 'react'
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap'

export default class SongCardGenerator extends React.Component {
    state = {
        query: '', //set state as an empty string
        results: [] //empty array to store searched cards after clicking submit button
    }

    handleSubmit = async e => { // must be a sync as API call generates a promise
        e.preventDefault()
        console.log("hello world")
        const APIURLSearch = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.query}`
        const response = await fetch(APIURLSearch)
        const results = await response.json()
        this.setState({ results: results })
    }

    render() {

        console.log(this.state) //logs each time value of searchfield is changed
        console.log(this.state.results)
        console.log(this.state.results.data)
        let dataRow;
        let searchedData = this.state.results.data
        if (searchedData) {
            dataRow = <Row>
                {searchedData.map((card) => {
                    return <Card id="card-img-container" style={{ width: '15rem' }}>
                        <Card.Img id="generated-card" variant="top" src={card.album.cover} />
                        <Card.Body>
                            {console.log("hello")}

                            <Card.Title>{card.title}</Card.Title>
                            <p>{card.artist.name}</p>

                        </Card.Body>
                    </Card>
                })}
            </Row>
        } else {
            dataRow = <Row>
                <p>Please enter a search</p>
            </Row>
        }


        return <Container>
            <Row>
                <Col>
                    <Container>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" id='search-input'
                                type="text"
                                placeholder="Search"
                                style={{ backgroundColor: "yellow", color: "#aaa" }}
                                value={this.state.query}
                                onChange={e => this.setState({ query: e.target.value })} />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleSubmit}>Button</button>
                            </div>
                        </div>
                    </Container>
                </Col>
            </Row>
            {dataRow}
        </Container>
    }
}