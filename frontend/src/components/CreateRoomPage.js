import React, { Component } from 'react'
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from "@material-ui/core"
import { Link } from "react-router-dom"

export default class CreateRoomPage extends Component {
    defaultVotes = 2;

    constructor(props) {
        super(props);
        this.state = {
            guestCanPause: true,
            votesToSkip: this.defaultVotes,
        }
        this.handleCreateRoom = this.handleCreateRoom.bind(this)
        this.handleVotesChange = this.handleVotesChange.bind(this)
        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this)
    }

    handleVotesChange(e) {
        this.setState({
            votesToSkip: e.target.value,
        });
    }

    handleGuestCanPauseChange(e) {
        this.setState({
            guestCanPause: e.target.value === 'true' ? true : false,
        })
    }
    handleCreateRoom() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                votes_to_skip: this.state.votesToSkip,
                guests_can_pause: this.state.guestCanPause
            }),
        };
        fetch('/api/create-room', requestOptions).then((response) =>
            response.json()
        ).then((data) => this.props.history.push('/room/' + data.code))
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component='h4' variant='h4'>Create A Room</Typography>

                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <FormHelperText><div align="center">Guest Control of Playback Songs</div></FormHelperText>
                        <RadioGroup onChange={this.guestCanPauseChange} row defaultValue="true">
                            <FormControlLabel value="true" control={<Radio color="primary" />} label="Play/Pause" labelPlacement="bottom" />
                            <FormControlLabel value="false" control={<Radio color="secondary" />} label="No Control" labelPlacement="bottom" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center" >
                    <FormControl>
                        <TextField
                            onChange={this.handleVotesChange}
                            required="true"
                            type="number"
                            defaultValue={this.defaultVotes}
                            inputProps={{
                                min: 1,

                            }}
                        />
                        <FormHelperText>
                            <div align="center">
                                Votes Required To Skip
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button onClick={this.handleCreateRoom} color="primary" variant="contained" to="/" component={Link}>
                        Create a Room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained" to="/" component={Link}>
                        Back
                    </Button>
                </Grid>

            </Grid >
        )
    }
}
