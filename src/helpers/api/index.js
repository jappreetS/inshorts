import axios from 'axios';

export const fetchNewsListData = () => axios.get('http://demo6245239.mockable.io/news');