import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 'calc(100vw - 72px)',
    paddingTop: '15px',
    // height: '100%',
    // overflowY: 'auto',
    // overflowX: 'hidden',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  {
    title: '책 1권 후원하기',
    price: '15,000',
    description: [
      '청소년을 위한 1권의 책',
      '국군 장병을 위한 1권의 책',
      '어린이들을 위한 1권의 책',
      '지역사회 문화를 위한 1권의 책',
    ],
    buttonText: '지금 후원하기',
    buttonVariant: 'outlined',
  },
  {
    title: '책 2권 후원하기',
    price: '30,000',
    description: [
      '청소년을 위한 2권의 책',
      '국군 장병을 위한 2권의 책',
      '어린이들을 위한 2권의 책',
      '지역사회 문화를 위한 2권의 책',
    ],
    buttonText: '지금 후원하기',
    buttonVariant: 'outlined',
  },
  {
    title: '책 3권 후원하기',
    price: '50,000',
    subheader: '가장 많이 선택되는 후원방식입니다.',
    description: [
      '청소년을 위한 3권의 책',
      '국군 장병을 위한 3권의 책',
      '어린이들을 위한 3권의 책',
      '지역사회 문화를 위한 3권의 책',
    ],
    buttonText: '지금 후원하기',
    buttonVariant: 'contained',
  },
];

const DonationPresenter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          후원하기
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          후원금은 모두 독서문화 진흥을 위해 독서 소외계층에게 기증되는 도서
          구입비용과 교육 지원 등 법이니의 목적사업을 진행하기 위해
          사용되어집니다. 이 아래의 문장부터는 더 긴 설명글의 플랫폼 별 호환
          정도를 확인하기 위해 해당 카테고리에서 설명글이 가장 길게 적힐 수 있는
          가능성을 고려하여 아무 의미없이 적혀집니다. Quickly build an effective
          pricing table for your potential customers with this layout. It&apos;s
          built with default Material-UI components with little customization.
          delveloping donation system and pricing system Another way to make the
          right game We are working for a long term vision in education era some
          kind of contracts and notification will provided at subpages
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{align: 'center'}}
                  subheaderTypographyProps={{align: 'center'}}
                  action={
                    tier.title === '책 3권 후원하기' ? <StarIcon /> : null
                  }
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ₩{tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /월
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default DonationPresenter;
