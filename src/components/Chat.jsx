import React, { useEffect, useState } from 'react';
import style from '../css/chat.module.css';
import { BsChatRight } from 'react-icons/bs';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useContext } from 'react';
import { AppContest } from '../contestApi/ContestProvider';

const Chat = () => {
  const { data, loading, error, getAllData } = useContext(AppContest); // getting data from contest api
  const [hide, setHide] = useState(false);

  useEffect(() => {
    getAllData();
  }, []);

  // -------- loading ---------
  if (loading) {
    return <h3 style={{ color: 'teal' }}>Loading....</h3>;
  }

  // --------- error ---------
  if (error) {
    return <h3 style={{ color: 'red' }}>server error....</h3>;
  }
  return (
    <div
      className={style.mainDiv}
      style={{ marginTop: hide ? '-270px' : '-12px' }}
    >
      <div onClick={() => setHide(!hide)} className={style.chat}>
        <div>
          <BsChatRight />
          <p>Chat</p>
        </div>
        {hide ? <FiChevronDown /> : <FiChevronUp />}
      </div>
      {hide ? (
        <div className={style.profiles}>
          {/* --------- Data maping ------ */}
          {data &&
            data.map((user) => (
              <div key={user.id}>
                <div className={style.users_div}>
                  <div className={style.maping_div}>
                    <img src={user.profilepicture} alt="profile" />
                    <p>{user.name}</p>
                  </div>
                  <span className={style.logged_in}>●</span>
                </div>
              </div>
            ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Chat;
