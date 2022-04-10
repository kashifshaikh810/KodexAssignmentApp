import React, {useState, useEffect} from 'react';
import ScreenMarkup from './ScreenMarkup';

const Screen = props => {
  const [showTab, setShowTab] = useState('my-shifts');
  const [showAreaTab, setShowAreaTab] = useState('Helsinki');
  //   const [allShiftsData, setAllShiftsData] = useState([]);
  const [numOfTurku, setNumOfTurku] = useState('');
  const [numOfHelsinki, setNumOfHelsinki] = useState('');
  const [numOfTampere, setNumOfTampere] = useState('');
  const [helsinkiData, setHelsinkiData] = useState([]);
  const [TampereData, setTampereData] = useState([]);
  const [TurkuData, setTurkuData] = useState([]);
  const [dateOfHelsinki, setDateOfHelsinki] = useState([]);
  const [testing, setTesting] = useState([]);
  const [todayData, setTodayData] = useState([]);

  const data = async () => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    try {
      const response = await fetch('http://192.168.0.106:8080/shifts');
      const json = await response.json();
      //   setAllShiftsData(json);
      let arr = [...json];
      let totalTurku = arr.filter((item, index) => {
        return item.area === 'Turku';
      });
      setNumOfTurku(totalTurku?.length);
      setTurkuData(totalTurku);

      let totalHelsinki = arr.filter((item, index) => {
        return item.area === 'Helsinki';
      });

      let totalTampere = arr.filter((item, index) => {
        return item.area === 'Tampere';
      });

      setNumOfTampere(totalTampere?.length);
      setNumOfHelsinki(totalHelsinki?.length);
      setHelsinkiData(totalHelsinki);
      setTampereData(totalTampere);

      let fullDateOfHelsinki = totalHelsinki.map((item, index) => {
        let date = new Date(item.startTime);
        let testDate = new Date(item.startTime).getDate();
        let todayDate = new Date().getDate();
        let monthRes = `${
          testDate === todayDate
            ? 'Today'
            : monthNames[date.getMonth()] + ' ' + date.getDate()
        }`;
        return monthRes;
      });
      setDateOfHelsinki(fullDateOfHelsinki);

      let dataOfTodayHelsinki = totalHelsinki.map((item, index) => {
        let testDate = new Date(item.startTime).getDate();
        let todayDate = new Date().getDate();
        let res = testDate === todayDate && item;
        return res;
      });
      setTodayData(dataOfTodayHelsinki);

      let checkDateOfHelsinki = totalHelsinki.map((item, index) => {
        let testDate = new Date(item.startTime).getDate();
        let todayDate = new Date().getDate();
        let res = testDate === todayDate;
        return res;
      });
      setTesting(checkDateOfHelsinki);

      console.log(checkDateOfHelsinki, 'date');
    } catch (err) {
      console.log(err, 'err');
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <ScreenMarkup
      {...props}
      showTab={showTab}
      setShowTab={setShowTab}
      numOfTurku={numOfTurku}
      numOfHelsinki={numOfHelsinki}
      numOfTampere={numOfTampere}
      helsinkiData={helsinkiData}
      TampereData={TampereData}
      TurkuData={TurkuData}
      showAreaTab={showAreaTab}
      setShowAreaTab={setShowAreaTab}
      dateOfHelsinki={dateOfHelsinki}
      testing={testing}
      todayData={todayData}
    />
  );
};

export default Screen;
