import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Text from '@material-ui/core/Typography'
import Router from 'next/router';
import Dynamic from 'next/dynamic';
import BottomButton from '../BottomButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import marked from 'marked'

const High = Dynamic(import('react-highlight'));

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

const content = `
# hello
*** 모듈 로딩 ***

HighLight 모듈이 로딩되었습니다.
코드를 그리는 모듈입니다.

~~~js
export default () => (
<div>
<p>Next.js is great!</p>
</div>
)
~~~
~~~bash
npm i -g now # one time command
now
~~~
`
marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
})
class Component extends React.Component {

  render() {
    const { classes, selected, img } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={`/static/${img}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
             {selected}
            </Typography>
            {
              selected === 'Space 1' ?
                <High innerHTML>
                  {marked(content)}
                </High> :
                <Typography component="p">
                {`선택: ${selected}`}
                </Typography>
            }
          </CardContent>
          <CardActions>
            <Button size="small" color="secondary" variant="raised" onClick={() => (
            Router.push({
              pathname: '/',
            })
          )}>
              뒤로가기
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(Component);
