import React, { Component } from 'react'
import { Button, TextField, Typography, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class RoomJoinPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roomCode: "",
            error: ""

        }
        this.handleJoinRoom = this.handleJoinRoom.bind(this)
        this.roomButtonPressed = this.roomButtonPressed.bind(this)
    }
    handleJoinRoom(e) {
        this.setState({
            roomCode: e.target.value
        })
    }
    roomButtonPressed() {

        console.log(this.state.roomCode)


    }

    render() {
        return (
            <div>
                <Grid container spacing={1} align="center">
                    <Grid item xs={12} align="center">
                        <Typography variant="h4" component="h4">
                            Join a Room
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField error={this.state.error}
                            label="Code"
                            placeholder="Enter a Room Code"
                            value={this.state.roomCode}
                            helperText={this.state.error}
                            variant="outlined"
                            onChange={this.handleJoinRoom} />

                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={this.roomButtonPressed}>Join Room
                        </Button>

                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" to="/" component={Link}>Back
                        </Button>

                    </Grid>

                </Grid>
            </div >
        )
    }
}
