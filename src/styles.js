import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  subcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'black',
    flex: 1,
  },
  heading: {fontSize: 25, color: 'white'},
  subt: {
    height: 65,
    width: 65,
    backgroundColor: '#e0aa07',
    left: 153,
    top: 5,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ountview: {
    top: 0,
    right: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counttext: {
    padding: 5,
    backgroundColor: 'white',
    fontSize: 25,
    bottom: 45,
  },
  faceflip: {height: 250, width: 200, backgroundColor: 'black'},
  faceimage: {height: 193, width: 200, bottom: 19},
  viewback: {height: 250, width: 200, backgroundColor: 'black'},
  backimage: {height: 200, width: 200, top: 0},
  backtext: {color: 'white', left: 65},
  animate: {
    height: 50,
    width: 50,
    backgroundColor: '#e0aa07',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewcoin: {
    flex: 0.3,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  gold: {height: 351, width: 600, top: 100},
  head: {
    color: 'red',
    top: 301,
    left: 103,
  },
  clickview: {
    height: 50,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  clickbutton: {color: 'black', fontSize: 20, left: 9, top: 9},
  // Add more styles as needed...
});
