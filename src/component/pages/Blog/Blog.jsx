import { Divider, Grid } from '@mui/material';
import BlogComponent from 'component/layout/blog/blog.component';
import BlogTemplateListComponent from 'component/layout/blog/list/blog-template-list.component';
import ProfileComponent from 'component/layout/profile/profile.component';

export default function Blog() {
  const blogPageStyle = {
    paddingBottom: '72px',
  };
  const mapped = [
    1, 2, 3, 4, 6, 7,
  ];
  return (
    <div style={blogPageStyle}>
      <ProfileComponent />
      <BlogComponent />
      <div className="container">
        <div className="md:px-5 dark:text-white">
          <h4>All Articles</h4>
          <p>See All My Articles Below</p>
        </div>
        <br />
        <Divider />
        <br />
        <Grid container>
          {mapped.map(() => (
            <Grid item md={4} sm={12}>
              <BlogTemplateListComponent />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
