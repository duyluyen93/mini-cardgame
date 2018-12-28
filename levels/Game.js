import React, { Component } from 'react'
import { ImageBackground } from 'react-native';
import MainData, { styles } from '../components/MainData';
import Notification from '../components/Notification'
import CountDown from '../components/Countdown';
import Control from '../components/Control';
import food_background from '../image/food_background.jpg';
import dulieu from '../components/List_Food';

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maindata: () => <MainData
        cardlist={dulieu}
        zoom={styles.card_big}
        column={3}
      />,
      notification: () => <Notification>
        <CountDown
          phut={0}
          giay={40}
          animate='flash'
        />
        {/* close = thời gian chạy + 2,5 giây */}
      </Notification>
    }
  }

  newGame() {
    this.setState({
      dulieu: dulieu.sort(
        function () {
          return 0.5 - Math.random()
        }),
      maindata: () => <MainData
        cardlist={dulieu}
        zoom={styles.card_big}
        column={3}
      />,
      notification: this.state.notification
    })
  }

  render() {
    const NewCard = this.state.maindata;
    const NewTime = this.state.notification;
    return (
      <ImageBackground source={food_background} style={styles.anh_nen}>
      
        <Control
          restart_click={this.newGame.bind(this)} 
        />

        <NewCard />

        <NewTime />

      </ImageBackground>
    )
  }
}