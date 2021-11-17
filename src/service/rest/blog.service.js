import http from 'helper/http';

class BlogService {
  getAllData() {
    return http.get('/blogs');
  }
}

export default new BlogService();
