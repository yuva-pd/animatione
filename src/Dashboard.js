import React, {useEffect, useState} from 'react';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import * as Animatable from 'react-native-animatable';

import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
  Image,
} from 'react-native';
import dings from './assets/sounds/sound.mp3';
import FlipCard from 'react-native-flip-card';
import {styles} from './styles';
//music sound
var Sound = require('react-native-sound');
Sound.setCategory('Playback');

//main screen
const Dashboard = () => {
  //state variables
  const [count, setCount] = useState(0);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const [animationCount, setAnimationCount] = useState(-10);
  const [bshimmering, setbShimmering] = useState(true);

  // Animated values initialization
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [flip, setFlip] = useState(false);
  const [main, setMain] = useState(false);
  const initPosition = {
    x: parseInt(windowWidth / 2) - 50,
    y: parseInt(windowHeight / 2) - 50,
  };

  const [translations] = useState(() => {
    const initialTranslations = Array.from({length: 10}, (_, i) => {
      const animatedValueX = new Animated.Value(initPosition.x);
      const animatedValueY = new Animated.Value(initPosition.y);
      const opacity = new Animated.Value(1);
      return {
        animatedValueX,
        animatedValueY,
        opacity,
      };
    });
    return initialTranslations;
  });
  // Sound initialization
  var ding = new Sound(dings, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });
  // Effect hook
  useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    };
  }, []);
  // Sound play function
  const playPause = () => {
    ding.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };
  // Animation function
  const handleAnimation = () => {
    setMain(true);
    translations.forEach((translation, index) => {
      const delay = 100 * index;

      soundPlayed && playPause();
      setSoundPlayed(true);
      Animated.sequence([
        Animated.delay(delay),

        Animated.parallel([
          Animated.timing(translation.opacity, {
            toValue: 10,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(translation.animatedValueX, {
            toValue: -100,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(translation.animatedValueY, {
            toValue: initPosition.y * 2 - 10 - 50 * index,
            duration: 400,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(translation.animatedValueX, {
            toValue: 153,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(translation.animatedValueY, {
            toValue: initPosition.y / 12 - 50 * index - 123,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(translation.opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(translation.animatedValueX, {
            toValue: -150,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(translation.animatedValueY, {
            toValue: initPosition.y * 2 - 10 - 50 * index,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(translation.opacity, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        setCount(count + 10);
        setAnimationCount(prevCount => prevCount + 1);
      });
    });
  };

  return (
    <View style={styles.container}>
      {true ? (
        <View style={styles.subcontainer}>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.heading}>Total Gold Coins</Text>
            <Animatable.View
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite">
              <ShimmerPlaceholder
                style={styles.subt}
                shimmerColors={['#e0aa07', '#DDDDDD', '#E2E2E2']} // Adjust the shimmer effect colors
                duration={1500}
                shimmering={bshimmering}>
                <Text
                  style={{
                    color: 'transparent',
                    textAlign: 'center',
                    lineHeight: 50,
                  }}>
                  Press Me
                </Text>
              </ShimmerPlaceholder>
            </Animatable.View>
            {animationCount >= 0 ? (
              <View style={styles.ountview}>
                <Text style={styles.counttext}>{animationCount}</Text>
              </View>
            ) : null}
            <FlipCard
              style={{top: 45}}
              friction={6}
              perspective={1000}
              flipHorizontal={true}
              flipVertical={false}
              flip={false}
              clickable={true}
              onFlipEnd={isFlipEnd => {
                setFlip(isFlipEnd);
                console.log('isFlipEnd', isFlipEnd);
              }}>
              {/* Face Side */}
              <View style={styles.faceflip}>
                <Text style={{color: 'white'}}>The Face</Text>
                <Image
                  style={styles.faceimage}
                  source={{
                    uri: 'https://pics.craiyon.com/2023-11-10/R3LWzoOeTfWML6WTDCc61A.webp',
                  }}
                />
              </View>
              {/* Back Side */}
              <View style={styles.viewback}>
                <Image
                  style={styles.backimage}
                  source={{
                    uri: 'https://img.freepik.com/vetores-premium/voce-ganha-brilhante-banner-retro-com-moedas-voadoras-modelo-de-banner-de-design-de-jogo-espaco-do-cassino_32996-1499.jpg?w=1060',
                  }}
                />

                <Text style={styles.backtext}>You WON</Text>
              </View>
            </FlipCard>
            {count === 0 ? null : (
              <View>
                {translations.map((translation, index) => (
                  <Animated.View
                    key={index}
                    style={[
                      {
                        opacity: count == 1 ? 0 : translation.opacity,
                        transform: [
                          {translateX: translation.animatedValueX},
                          {translateY: translation.animatedValueY},
                        ],
                      },
                      styles.animate,
                    ]}>
                    <Text>{index + 1}</Text>
                  </Animated.View>
                ))}
              </View>
            )}
          </View>
          <View style={styles.viewcoin}>
            <Image
              source={{
                uri: 'https://www.google.com/url?=&url=https%3A%2F%2Fwww.amazon.in%2FFeyarl-Treasure-Rectangle-Metallic-Finished%2Fdp%2FB07F69PLSK&psig=AOvVaw1fEBl7ppPrZ9ts1PmqII4h&ust=1704733888506000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCM3eTiy4MDFQAAAAAdAAAAABAD',
              }}
              style={{width: 200, height: 200}}
              // resizeMode="cover"
            />
            <TouchableOpacity
              onPress={handleAnimation}
              style={[
                {
                  width: !flip ? 200 : 250,
                  bottom: !flip ? 270 : -100,
                },
                styles.clickview,
              ]}>
              {flip ? (
                <Text style={styles.clickbutton}>
                  click on me to collect coins
                </Text>
              ) : (
                <Text style={styles.clickbutton}>
                  click on above card to see suprise
                </Text>
              )}
            </TouchableOpacity>
          </View>
          {flip ? (
            <Image
              style={styles.gold}
              source={{
                uri: 'https://img.freepik.com/premium-photo/gold-coin-treasure-old-pot-black-background_185126-1665.jpg?w=900',
              }}
            />
          ) : (
            ''
          )}
        </View>
      ) : (
        <TouchableOpacity onPress={() => handleAnimation()}>
          <Text style={styles.head}>click on me LETS START THE GAME !!!</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Dashboard;
