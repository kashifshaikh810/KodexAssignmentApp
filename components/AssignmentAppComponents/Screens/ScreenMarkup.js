import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';

import styles from './styles';

const myShiftsTabSection = props => {
  if (props.showTab === 'my-shifts') {
    return (
      <>
        <View style={styles.todayHeadingContainer}>
          <View style={styles.directionRow}>
            <Text style={styles.todayText}>today</Text>

            <Text style={styles.shiftText}>2 shifts,</Text>

            <Text style={styles.hoursText}>4 h</Text>
          </View>
        </View>
        <View style={styles.breakLine} />

        <View style={[styles.directionRow, styles.buttonAndTextContainer]}>
          <View style={styles.directionRow}>
            <View>
              <Text style={styles.timeText}>14:00-16:00</Text>
              <Text style={styles.subTitleText}>Helsinki</Text>
            </View>
          </View>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={[styles.cancelText, {fontWeight: 'bold'}]}>
                cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.breakLine} />

        <View style={[styles.directionRow, styles.buttonAndTextContainer]}>
          <View style={styles.directionRow}>
            <View>
              <Text style={styles.timeText}>14:00-16:00</Text>
              <Text style={styles.subTitleText}>Helsinki</Text>
            </View>
          </View>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity
              style={[styles.cancelButton, {borderColor: '#E2006A'}]}>
              <Text style={[styles.cancelText, {color: '#E2006A'}]}>
                cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.breakLine} />

        <View style={styles.todayHeadingContainer}>
          <View style={styles.directionRow}>
            <Text style={styles.todayText}>tomorrow</Text>

            <Text style={styles.shiftText}>2 shifts,</Text>

            <Text style={styles.hoursText}>4 h</Text>
          </View>
        </View>
        <View style={styles.breakLine} />

        <View style={[styles.directionRow, styles.buttonAndTextContainer]}>
          <View style={styles.directionRow}>
            <View>
              <Text style={styles.timeText}>12:00-16:00</Text>
              <Text style={styles.subTitleText}>Tampere</Text>
            </View>
          </View>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity
              style={[styles.cancelButton, {borderColor: '#E2006A'}]}>
              <Text style={[styles.cancelText, {color: '#E2006A'}]}>
                cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.breakLine} />

        <View style={styles.todayHeadingContainer}>
          <View style={styles.directionRow}>
            <Text style={styles.todayText}>september 22</Text>

            <Text style={styles.shiftText}>2 shifts,</Text>

            <Text style={styles.hoursText}>4 h</Text>
          </View>
        </View>
        <View style={styles.breakLine} />

        <View style={[styles.directionRow, styles.buttonAndTextContainer]}>
          <View style={styles.directionRow}>
            <View>
              <Text style={styles.timeText}>9:00-11:00</Text>
              <Text style={styles.subTitleText}>Turku</Text>
            </View>
          </View>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity
              style={[styles.cancelButton, {borderColor: '#E2006A'}]}>
              <Text style={[styles.cancelText, {color: '#E2006A'}]}>
                cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.breakLine} />

        <View style={[styles.directionRow, styles.buttonAndTextContainer]}>
          <View style={styles.directionRow}>
            <View>
              <Text style={styles.timeText}>13:30-15:00</Text>
              <Text style={styles.subTitleText}>Turku</Text>
            </View>
          </View>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity
              style={[styles.cancelButton, {borderColor: '#E2006A'}]}>
              <Text style={[styles.cancelText, {color: '#E2006A'}]}>
                cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.breakLine} />
      </>
    );
  }
};

const availableShiftsTabSection = props => {
  if (props.showTab === 'available-shifts') {
    return (
      <View>
        <View
          style={[styles.directionRow, styles.availableShiftHeadingContainer]}>
          <Pressable onPress={() => props.setShowAreaTab('Helsinki')}>
            <Text
              style={[
                styles.availableShiftHeadingText,
                {
                  color:
                    props.showAreaTab === 'Helsinki' ? '#004FB4' : '#CBD2E1',
                },
              ]}>
              Helsinki ({props?.numOfHelsinki})
            </Text>
          </Pressable>
          <Pressable onPress={() => props.setShowAreaTab('Tampere')}>
            <Text
              style={[
                styles.availableShiftHeadingText,
                {
                  color:
                    props.showAreaTab === 'Tampere' ? '#004FB4' : '#CBD2E1',
                },
              ]}>
              Tampere ({props?.numOfTampere})
            </Text>
          </Pressable>

          <Pressable onPress={() => props.setShowAreaTab('Turku')}>
            <Text
              style={[
                styles.availableShiftHeadingText,
                {color: props.showAreaTab === 'Turku' ? '#004FB4' : '#CBD2E1'},
              ]}>
              Turku ({props?.numOfTurku})
            </Text>
          </Pressable>
        </View>

        <View style={styles.breakLine} />

        {/* Area tabs  */}
        {helsinkiTabSection({...props})}

        {tampereTabSection({...props})}

        {turkuTabSection({...props})}

        {/*  <View
          style={[
            styles.directionRow,
            styles.availableShiftsTextAndIconContainer,
          ]}>
          <View style={styles.directionRow}>
            <Text style={[styles.timeText, {color: '#A4B8D3'}]}>
              12:00-14:00
            </Text>
            <View style={styles.availableShiftsSubTitleTextContainer}>
              <Text style={styles.availableShiftsSubTitleText}>Booked</Text>
            </View>
          </View>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity style={[styles.cancelButton]}>
              <Text style={[styles.cancelText]}>book</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.breakLine} /> */}

        {/* <View
          style={[
            styles.directionRow,
            styles.availableShiftsTextAndIconContainer,
          ]}>
          <View style={styles.directionRow}>
            <Text style={[styles.timeText, {color: '#A4B8D3'}]}>
              13:00-15:00
            </Text>
            <View style={styles.availableShiftsSubTitleTextContainer}>
              <Text
                style={[
                  styles.availableShiftsSubTitleText,
                  {color: '#E2006A'},
                ]}>
                Overlapping
              </Text>
            </View>
          </View>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity style={[styles.cancelButton]}>
              <Text style={[styles.cancelText]}>book</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.breakLine} /> */}
        {/* 
        <View
          style={[
            styles.directionRow,
            styles.availableShiftsTextAndIconContainer,
          ]}>
          <View style={styles.directionRow}>
            <Text style={[styles.timeText, {color: '#A4B8D3'}]}>
              14:00-16:00
            </Text>
            <View style={styles.availableShiftsSubTitleTextContainer}>
              <Text style={[styles.availableShiftsSubTitleText]}>booked</Text>
            </View>
          </View>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity
              style={[styles.cancelButton, {borderColor: '#E2006A'}]}>
              <Text style={[styles.cancelText, {color: '#E2006A'}]}>
                cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* <View style={styles.breakLine} />
        <View
          style={[
            styles.directionRow,
            styles.availableShiftsTextAndIconContainer,
          ]}>
          <View style={styles.directionRow}>
            <Text style={[styles.timeText, {color: '#A4B8D3'}]}>
              14:00-16:00
            </Text> */}
        {/* <View style={styles.availableShiftsSubTitleTextContainer}>
              <Text style={[styles.availableShiftsSubTitleText]}>booked</Text>
            </View> */}
        {/* </View>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity
              style={[styles.cancelButton, {borderColor: '#16A64D'}]}>
              <Text style={[styles.cancelText, {color: '#16A64D'}]}>book</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.breakLine} />

        <View style={styles.todayHeadingContainer}>
          <Text style={styles.todayText}>september 21</Text>
        </View>
        <View style={styles.breakLine} /> */}

        {/* <View
          style={[
            styles.directionRow,
            styles.availableShiftsTextAndIconContainer,
          ]}>
          <View style={styles.directionRow}>
            <Text style={[styles.timeText, {color: '#A4B8D3'}]}>
              16:00-18:00
            </Text> */}
        {/* <View style={styles.availableShiftsSubTitleTextContainer}>
              <Text style={[styles.availableShiftsSubTitleText]}>booked</Text>
            </View> */}
        {/* </View>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity
              style={[styles.cancelButton, {borderColor: '#16A64D'}]}>
              <Text style={[styles.cancelText, {color: '#16A64D'}]}>load</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.breakLine} />

        <View style={styles.todayHeadingContainer}>
          <Text style={styles.todayText}>september 22</Text>
        </View>
        <View style={styles.breakLine} /> */}

        {/* <View
          style={[
            styles.directionRow,
            styles.availableShiftsTextAndIconContainer,
          ]}>
          <View style={styles.directionRow}>
            <Text style={[styles.timeText, {color: '#A4B8D3'}]}>
              17:00-18:30
            </Text>
            <View style={styles.availableShiftsSubTitleTextContainer}>
              <Text style={[styles.availableShiftsSubTitleText]}>booked</Text>
            </View>
          </View>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity
              style={[styles.cancelButton, {borderColor: '#16A64D'}]}>
              <Text style={[styles.cancelText, {color: '#16A64D'}]}>book</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.breakLine} /> */}
      </View>
    );
  }
};

// area tabs section
const helsinkiTabSection = props => {
  if (props.showAreaTab === 'Helsinki') {
    return (
      <View>
        <View style={styles.todayHeadingContainer}>
          <Text>Today</Text>
        </View>
        <View style={styles.breakLine} />
        <FlatList
          data={props?.todayData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View>
              {item.id ? (
                <>
                  <View
                    style={[
                      styles.directionRow,
                      styles.availableShiftsTextAndIconContainer,
                    ]}>
                    <View style={styles.directionRow}>
                      <Text style={[styles.timeText, {color: '#A4B8D3'}]}>
                        {item.area}
                      </Text>
                      <View style={styles.availableShiftsSubTitleTextContainer}>
                        <Text style={[styles.availableShiftsSubTitleText]}>
                          booked
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cancelButtonContainer}>
                      <TouchableOpacity
                        style={[styles.cancelButton, {borderColor: '#16A64D'}]}>
                        <Text style={[styles.cancelText, {color: '#16A64D'}]}>
                          book
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.breakLine} />
                </>
              ) : (
                <View />
              )}
            </View>
          )}
        />

        <FlatList
          data={props?.helsinkiData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View>
              <View style={styles.todayHeadingContainer}>
                <Text>{props.dateOfHelsinki[index]}</Text>
              </View>
              <View style={styles.breakLine} />
              <View
                style={[
                  styles.directionRow,
                  styles.availableShiftsTextAndIconContainer,
                ]}>
                <View style={styles.directionRow}>
                  <Text style={[styles.timeText, {color: '#A4B8D3'}]}>
                    {item.area}
                  </Text>
                  <View style={styles.availableShiftsSubTitleTextContainer}>
                    <Text style={[styles.availableShiftsSubTitleText]}>
                      booked
                    </Text>
                  </View>
                </View>
                <View style={styles.cancelButtonContainer}>
                  <TouchableOpacity
                    style={[styles.cancelButton, {borderColor: '#16A64D'}]}>
                    <Text style={[styles.cancelText, {color: '#16A64D'}]}>
                      book
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.breakLine} />
            </View>
          )}
        />
      </View>
    );
  }
};

const tampereTabSection = props => {
  if (props.showAreaTab === 'Tampere') {
    return (
      <View>
        <Text>tampereTabSection</Text>
      </View>
    );
  }
};

const turkuTabSection = props => {
  if (props.showAreaTab === 'Turku') {
    return (
      <View>
        <Text>turkuTabSection</Text>
      </View>
    );
  }
};

const ScreenMarkup = props => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {myShiftsTabSection({...props})}
        {availableShiftsTabSection({...props})}
      </ScrollView>

      <View style={styles.tabsBreakLineContainer}>
        <View style={styles.breakLine} />
      </View>
      <View style={[styles.directionRow, styles.tabsContainer]}>
        <Pressable onPress={() => props.setShowTab('my-shifts')}>
          <Text
            style={[
              styles.shiftTabText,
              {color: props.showTab === 'my-shifts' ? '#004FB4' : '#A4B8D3'},
            ]}>
            My shifts
          </Text>
        </Pressable>
        <Pressable onPress={() => props.setShowTab('available-shifts')}>
          <Text
            style={[
              styles.shiftTabText,
              {
                color:
                  props.showTab === 'available-shifts' ? '#004FB4' : '#A4B8D3',
              },
            ]}>
            Available shifts
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ScreenMarkup;
