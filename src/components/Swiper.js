import SwiperCore, {Navigation, Pagination, A11y, Autoplay} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: 'calc(100vw - 180px)',
    minHeight: '540px',
    borderRadius: '10px',
  },
  overlay: {
    borderRadius: '10px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const PostSwiper = (props) => {
  const classes = useStyles();
  const {post} = props;
  return (
    <Swiper
      autoplay={{delay: 3000}}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{clickable: true}}
      //   style={{width: 'calc(100vw - 180px)'}}
      loop={true}
    >
      {post.map((sPost) => {
        return (
          <SwiperSlide
            style={{
              backgroundImage: `url(http://readingnet.org/files/attach/images/89/${sPost.image})`,
            }}
            className={classes.mainFeaturedPost}
          >
            {
              <img
                style={{display: 'none'}}
                src={sPost.image}
                alt={sPost.imageText}
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography
                    component="h3"
                    variant="h5"
                    color="inherit"
                    gutterBottom
                  >
                    {sPost.title.length > 30
                      ? `${sPost.title.substring(0, 30)}...`
                      : sPost.title}
                  </Typography>
                  <Typography variant="p" color="inherit" paragraph>
                    {sPost.description.length > 80
                      ? `${sPost.description.substring(0, 80)}...`
                      : sPost.description}
                  </Typography>
                  {/* <Link variant="subtitle1" href="#">
                    {sPost.linkText}
                  </Link> */}
                </div>
              </Grid>
            </Grid>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PostSwiper;

PostSwiper.propTypes = {
  post: PropTypes.object,
};
