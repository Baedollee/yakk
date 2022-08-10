import { useDispatch, useSelector } from 'react-redux';
import HomeHeader from '../components/home/HomeHeader';
import HomeList from '../components/home/HomeList';
import { useEffect } from 'react';
import { asyncGetAllPost } from '../redux/reducer/baeReducer';

const Home = () => {
  const postList = useSelector((state) => state.comment.commentList);
	const dispatch = useDispatch();
	
  useEffect(() => {
		dispatch(asyncGetAllPost());
    return () => {};
  }, [JSON.stringify(postList)]);

  return (
    <div>
      <HomeHeader />
      <div>
        {postList?.map((item, index) => {
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
