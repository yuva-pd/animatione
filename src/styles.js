import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  button: {
    padding: 10,
    backgroundColor: 'gold',
    borderRadius: 10,
    elevation: 4, // Adding elevation for Android shadow effect
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
  },
  passingViiew: {
    position: 'absolute',
    height: 200,
    width: 13,
    backgroundColor: 'white', // Gray color for passing view
    top: 0,
    left: 0,
  },
  passingView: {
    position: 'absolute',
    height: 200,
    width: 13,
    backgroundColor: 'lightgray', // Gray color for passing view
    top: 0,
    left: 0,
  },
  subcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'black',
    flex: 1,
  },
  buttonContainer: {
    position: 'relative',
    overflow: 'hidden', // Clip the overflow of the passing view outside the button
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
    fontSize: 25,
    color: 'gold',
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
    color: 'gold',
    top: 301,
    left: 123,
    fontSize: 25,
    marginBottom: 25,
  },
  heade: {
    color: 'gold',
    top: 301,
    left: 55,
    fontSize: 25,
  },
  clickview: {
    padding: 10,
    backgroundColor: 'gold',
    borderRadius: 10,
    elevation: 4,
  },
  clickbutton: {color: 'black', fontSize: 20, left: 9, top: 9},
  // Add more styles as needed...
});
