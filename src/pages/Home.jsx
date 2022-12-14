import { useDispatch, useSelector } from 'react-redux';
import HomeList from '../components/home/HomeList';
import axios from 'axios';
import { colorBlack, colorWhite } from '../components/color/ColorPalette';
import styled from 'styled-components';
import { setComment, asyncGetAllPost } from '../redux/reducer/postSlice';
import { useEffect, useState } from 'react';
import Header from '../components/total/Header';

const Home = () => {
  const url = process.env.REACT_APP_URL;

  const postList = useSelector((state) => state.comment.commentList);
  const dispatch = useDispatch();
  const [_post, _setPost] = useState([]);

  const fetchPost = async () => {
    const { data } = await axios.get(url + '/postList');
    _setPost(data);
  };
  // const fetchPost = () => {
  //   axios.get(url + '/postList')
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
      .get(url + '/postList')
      .then((response) => {
        // 성공 핸들링
        dispatch(setComment(response.data));
      })
      .catch((error) => {
        // 에러 핸들링
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(url + `/replyList?postId={postId}`)
      .then((res) => {})
      .catch((err) => console.log(err));
    dispatch(asyncGetAllPost());
    return () => {};
  }, [JSON.stringify(postList)]);

  return (
    <HomeContainer>
      {/* <HomeHeader /> */}
      <Header id="Home" />
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
    </HomeContainer>
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
