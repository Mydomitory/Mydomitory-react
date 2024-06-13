import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import backBtn from '../../assets/backBtn.svg';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from '../../css/board/boardDetail.module.css';

export default function BoardDetail() {
  const [post, setPost] = useState(null);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPost();
  }, [id]); 

  const getPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/board/${id}`);
      setPost(response.data);
      fetchPreviousPost();
      fetchNextPost();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchPreviousPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/board/${id}/previous`);
      setPrevPost(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchNextPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/board/${id}/next`);
      setNextPost(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handlePrevBtn = () => {
    if (prevPost) {
      navigate(`/board/${prevPost.id}`);
    }
  };

  const handleNextBtn = () => {
    if (nextPost) {
      navigate(`/board/${nextPost.id}`);
    }
  };

  const handleBackBtn = () => {
    navigate('/board');
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapBtn}>
        <img src={backBtn} className={styles.backBtn} onClick={handleBackBtn} alt="Back Button" />
      </div>
      <div className={styles.wrapContent}>
        <p className={`${styles.Post} ${post.type === '공지' ? styles.notice : styles.normal}`}>{post.type}</p>
        <p className={styles.title}>{post.title}</p>
        <div className={styles.contentContainer}>
          <p className={styles.content}>{post.content}</p>
        </div>
      </div>
      <div className={styles.navBtn}>
        {prevPost && (
          <div className={styles.wrapPrevBtn}>
            <IoIosArrowBack className={styles.prev} onClick={handlePrevBtn} />
            <button className={styles.prevBtn} onClick={handlePrevBtn}>이전</button>
          </div>
        )}
        {nextPost && (
          <div className={styles.wrapNextBnt}>
            <button className={styles.nextBtn} onClick={handleNextBtn}>다음</button>
            <IoIosArrowForward className={styles.next} onClick={handleNextBtn} />
          </div>
        )}
      </div>
    </div>
  );
}
