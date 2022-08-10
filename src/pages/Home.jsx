import { useSelector } from 'react-redux';
import HomeHeader from '../components/home/HomeHeader';
import HomeList from '../components/home/HomeList';
import { useEffect, useState } from 'react';
import axios from 'axios'

const Home = () => {
  const postList = useSelector((state) => state.comment.commentList);
  
  const [_post, _setPost] = useState([]);

  const fetchPost = async () => {
    const { data } = await axios.get('http://localhost:3001/postList');
    _setPost(data);
  };
  // const fetchPost = () => {
  //   axios.get('http://localhost:3001/postList')
  //   .then( response => {
  //     console.log(response)
  //     _setPost(response.data)
  //   })
  //   .catch(err =>{
  //     console.log(err.response)
  //   })
  // };

  useEffect(() => {
    fetchPost()
  }, []);

  console.log(_post)

  return (
    <div>
      <HomeHeader />
      <div>
        {_post.map((item, index) => {
          if (postList.length > 0) {
            return <HomeList key={`${item.id}_${item.userName}`} post={item} />;
          } else {
            alert('입력!');
          }
        })}
      </div>
    </div>
  );
};

export default Home;
