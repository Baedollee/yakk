import { useDispatch, useSelector } from 'react-redux';
import HomeHeader from '../components/home/HomeHeader';
import HomeList from '../components/home/HomeList';
import axios from 'axios';
import { setComment } from '../redux/reducer/baeReducer';
import { colorBlack, colorWhite } from '../components/color/ColorPalette';
import styled from 'styled-components';
import { asyncGetAllPost } from '../redux/reducer/baeReducer';
import { useEffect, useState } from 'react';

const Home = () => {
  // const url = process.env.REACT_APP_URL;

  const postList = useSelector((state) => state.comment.commentList);
  const dispatch = useDispatch();
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
    axios
      .get('http://localhost:3001/postList')
      .then((response) => {
        // 성공 핸들링
        console.log('으아아아아아아아아ㅏ');
        console.log(response.data);
        dispatch(setComment(response.data));
      })
      .catch((error) => {
        // 에러 핸들링
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/replyList?postId={postId}`)
      .then((res) => {})
      .catch((err) => console.log(err));
		dispatch(asyncGetAllPost());
    return () => {};
  }, [JSON.stringify(postList)]);

  console.log(_post)

  console.log(postList);

  return (
    <HomeContainer>
      <HomeHeader />
      <HomeListContainer>
        {/* //{_post.map((item, index) => { */}
        {postList?.map((item, index) => {
          if (postList.length > 0) {
            return <HomeList key={`${item.id}_${item.userName}`} post={item} />;
          } else {
            alert('입력!');
          }
        })}
      </HomeListContainer>
    </ HomeContainer>
  );
};

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${colorBlack};
  color: ${colorWhite};
`;
const HomeListContainer = styled.div`
  height: 80%;
  min-width: 600px;
  max-width: 800px;
  margin: 30px auto;
`;

export default Home;
