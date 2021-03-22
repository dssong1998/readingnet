import {makeStyles} from '@material-ui/core/styles';
import React, {useCallback} from 'react';
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from '../../components/Parallax';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import styles from '../../assets/jss/material-kit-react/views/components.js';
import Hidden from '@material-ui/core/Hidden';
import Anime from 'animejs';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import PostSwiper from '../../components/Swiper';
// import Post from '../../components/Post';

const useStyles = makeStyles(styles);

const HomePresenter = ({mainFeaturedPost, featuredPosts}) => {
  const classes = useStyles();
  const textWrapper = useCallback((node) => {
    if (node !== null) {
      node.innerHTML = node.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
      Anime.timeline().add({
        targets: '.moving-title .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: (el, i) => 150 * (i + 1),
      });
    }
  }, []);

  return (
    // <Container
    //   style={{
    //     minWidth: 'calc(100vw - 280px)',
    //     paddingTop: '15px',
    //     // height: '100%',
    //     // overflowY: 'auto',
    //   }}
    // >
    //   <PostSwiper post={mainFeaturedPost} />
    //   <Grid container spacing={6}>
    //     {featuredPosts.map((post) => (
    //       <Post key={post.title} post={post} />
    //     ))}
    //   </Grid>
    //  </Container>
    <div style={{width: '100%', height: '100%'}}>
      <Header
        brand="사단법인 국민독서문화진흥회"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
      />
      <Parallax image={require('assets/img/bg11.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem style={{height: '140px'}} />
            <GridItem>
              <Hidden smDown>
                <h1 className={classes.brand}>
                  책 읽는 나라가 지속가능한 가치를 만듭니다.
                </h1>
                <h3 className={classes.brand}>
                  사단법인 국민독서문화진흥회는
                  <br />전 국민의 건전한 독서문화와 올바른 가치관 형성을 돕는
                  비영리단체입니다.
                  <br />
                  다양한 독서운동과 나눔으로 독서생태계를 조성하여
                  독서교육강국으로 만들겠습니다.
                </h3>
              </Hidden>
              <Hidden mdUp>
                <h3
                  ref={textWrapper}
                  className={classes.brand + ' moving-title'}
                  style={{fontWeight: '900', fontSize: '18px'}}
                >
                  책 읽는 나라가 지속가능한 가치를 만듭니다.
                </h3>
                <div style={{borderTop: '1px solid white'}} />
                <h5 className={classes.brand}>
                  사단법인 국민독서문화진흥회는
                  <br />전 국민의 건전한 독서문화와 올바른 가치관 형성을 돕는
                  비영리단체입니다.
                  <br />
                  다양한 독서운동과 나눔으로 독서생태계를 조성하여
                  독서교육강국으로 만들겠습니다.
                </h5>
              </Hidden>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
};

export default HomePresenter;
