import { makeStyles } from '@material-ui/core';
import { flexColumn } from './stylesUtils';

const styles = makeStyles({
  root: {
    margin: '0 auto',
    padding: '0 40px',

    ...flexColumn(),
    maxWidth: '1280px',
  },

  title: {
    marginBottom: '3rem',
    padding: '1rem 0',

    fontSize: '2rem',
    borderBottom: '2px solid black',
  },
});

export default styles;
