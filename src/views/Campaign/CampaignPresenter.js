import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from '../../components/Markdown';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 'calc(100vw - 280px)',
    paddingTop: '15px',
    // height: '100%',
    // overflowY: 'auto',
  },
  main: {
    marginTop: theme.spacing(3),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

const CampaignPresenter = ({posts}) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          걸어온 길
        </Typography>
        <Divider />
        {posts.map((post) => (
          <Markdown className={classes.markdown} key={post.substring(0, 40)}>
            {post}
          </Markdown>
        ))}
      </Grid>
    </Container>
  );
};

export default CampaignPresenter;
