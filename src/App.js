import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Routes from './Router';
import Footer from './components/Footer';
import SwiperCore, {Autoplay, Navigation, Pagination, A11y} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageSection: {
    backgroundColor: '#cfe8fc',
  },
}));
function App() {
  const classes = useStyles();
  SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.main}>
        <Routes />
      </div>
      <Footer
        title="국민독서문화진흥회"
        description="등록번호: 000-00-000000 | 회장: 김을호 | 주소: 서울시 성북구 동소문로 269 601호(길음동, 태창빌딩) | 대표전화: 02-913-9582 | 팩스: 02-913-9584"
      />
    </div>
  );
}

export default App;
