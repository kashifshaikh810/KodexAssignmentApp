import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  breakLine: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#CBD2E1',
  },
  todayHeadingContainer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 50,
    maxHeight: 50,
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#F7F8FB',
  },
  directionRow: {
    flexDirection: 'row',
  },
  todayText: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#4F6C92',
    fontSize: 16,
  },
  shiftText: {
    paddingLeft: 17,
    paddingHorizontal: 5,
    color: '#CBD2E1',
    fontSize: 16,
  },
  hoursText: {
    color: '#CBD2E1',
    fontSize: 16,
  },
  buttonAndTextContainer: {
    flex: 1,
    minHeight: 75,
    maxHeight: 75,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  timeText: {
    color: '#4F6C92',
    fontSize: 16,
  },
  subTitleText: {
    color: '#CBD2E1',
    fontSize: 15,
  },
  cancelButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#CBD2E1',
    borderRadius: 20,
    // width: 90,
    flex: 1,
    minWidth: 90,
    maxWidth: 90,
    minHeight: 40,
    maxHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    textTransform: 'capitalize',
    color: '#CBD2E1',
    fontSize: 15,
  },
  tabsBreakLineContainer: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  tabsContainer: {
    maxHeight: 55,
    minHeight: 55,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F1F4F8',
  },
  shiftTabText: {
    fontSize: 15,
  },
  availableShiftHeadingContainer: {
    flex: 1,
    maxHeight: 70,
    minHeight: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  availableShiftHeadingText: {
    textTransform: 'capitalize',
    color: '#',
    fontSize: 16,
  },
  availableShiftsTextAndIconContainer: {
    flex: 1,
    minHeight: 60,
    maxHeight: 60,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  availableShiftsSubTitleTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 120,
  },
  availableShiftsSubTitleText: {
    color: '#A4B8D3',
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

export default styles;
