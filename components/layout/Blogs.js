import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const callApi = async () => {
      const result = await axios({
        url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@inatnun',
      });
      // console.log('result', result);
      setBlogs(result?.data?.items);
    };
    callApi();
  }, []);
  return (
    <Grid container spacing={2}>
      {blogs &&
        blogs.map((blog) => {
          return (
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='140'
                  image={blog?.thumbnail}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {blog?.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {blog?.description?.split('<p>')[1].split('<')[0]}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href={blog?.link} size='small'>
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Blogs;
