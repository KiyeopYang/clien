import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      view: 'select',
    };
  }
  handleBlockSelect = (o) => {
    const { selected } = this.state;
    if (selected.indexOf(o) > -1) {
      this.setState({
        selected: selected.filter(oo => oo !== o),
      });
    } else {
      this.setState({
        selected: selected.concat(o),
      });
    }
  }
  render() {
    const { selected } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/1.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
             Space 1
            </Typography>
            <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu euismod ipsum, ut luctus sem. Quisque quis fermentum lectus, non malesuada odio. Phasellus commodo interdum eros eu sodales. Sed vulputate velit turpis, sit amet pellentesque nulla semper vel. Nulla tristique nunc nec metus consectetur ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas cursus ipsum sed pharetra tempor.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => (
            Router.push({
              pathname: '/space',
              query: { selected: "Space 1", img: "1.jpg" }
            })
          )}>
              보기
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/2.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
             Space 2
            </Typography>
            <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu euismod ipsum, ut luctus sem. Quisque quis fermentum lectus, non malesuada odio. Phasellus commodo interdum eros eu sodales. Sed vulputate velit turpis, sit amet pellentesque nulla semper vel. Nulla tristique nunc nec metus consectetur ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas cursus ipsum sed pharetra tempor.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => (
            Router.push({
              pathname: '/space',
              query: { selected: "Space 2", img: "2.jpg" }
            })
          )}>
              보기
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/3.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
             Space 3
            </Typography>
            <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu euismod ipsum, ut luctus sem. Quisque quis fermentum lectus, non malesuada odio. Phasellus commodo interdum eros eu sodales. Sed vulputate velit turpis, sit amet pellentesque nulla semper vel. Nulla tristique nunc nec metus consectetur ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas cursus ipsum sed pharetra tempor.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => (
            Router.push({
              pathname: '/space',
              query: { selected: "Space 3", img: "3.jpg" }
            })
          )}>
              보기
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(Component);
