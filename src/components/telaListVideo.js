import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import styles from "./styles";
import { View, TouchableHighlight, ScrollView } from 'react-native';
import axios from 'axios';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/FontAwesome';



import {
    Container,
    Content,
    Text,
    Thumbnail,
} from "native-base";


class listVideo extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', videos: [] };
    }


    _changeText(imputText) {
        this.setState({ text: imputText })
    }

    _getVideos = (key) => {

        let url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=' + key + '&maxresults=20&key=AIzaSyB2qPOWZw7J7GJ5rRjpL_tkfi4shZckQaE';

        return dispatch => {
            axios.get(url)
                .then(resp => dispatch({ type: 'LOGIN_SUCCESS', payload: resp.data }, this.setState({ videos: resp.data.items })))
                .catch(error => dispatch({ type: 'LOGIN_FAILURE', payload: error }, Toast.show({ text: 'Usuário ou Senha Inválidos', buttonText: "Ok", position: 'bottom', type: 'danger', duration: 3000 })))
        }
    }
    _playVideo(id_video){
        console.log(id_video)
        Actions.TelaPlayVideo({ props: this.props, id_play_video: id_video });
    }

    _renderVideo(key){
        console.log(key)
    }
    render() {
        return (

            <Container style={styles.container}>
                <Content style={styles.contents}>
                    <View style={styles.body}>
                        <View style={styles.SectionStyle}>
                            <View style={styles.input} >
                                <TextField
                                    onChangeText={(text) => this._changeText(text)}
                                    value={this.props.key}
                                    enablesReturnKeyAutomatically={true}
                                    autoCapitalize='none'
                                    onSubmitEditing={this.onSubmitFirstName}
                                    returnKeyType='next'
                                    label='Digite a chave da pesquisa'

                                />
                            </View>
                            <View>
                                <TouchableHighlight underlayColor={'whrite'} onPress={this._getVideos(this.state.text)}>
                                    <Icon style={styles.ImageStyle} name="search" size={30} color="#429ef5" />

                                </TouchableHighlight>

                            </View>
                        </View >
                    </View>
                    {this.state.videos.map((item) => (
                        <ScrollView>
                            <View style={styles.listVideo}>
                                {console.log(item)}
                                    <View style={styles.Thumbnail}>
                                    <TouchableHighlight underlayColor={'whrite'} onPress={()=>this._playVideo(item.id.videoId)}>
                                        <Thumbnail source={{ uri: item.snippet.thumbnails.default.url }} />
                                    </TouchableHighlight>
                                    </View>
                                    <View style={styles.TextNote}>
                                        <Text>{item.snippet.title}</Text>
                                        <Text note>{item.snippet.description}</Text>
                                    </View>
                            </View>


                        </ScrollView>
                    ))}


                </Content>

            </Container>

        );
    }
}
export default listVideo


