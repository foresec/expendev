import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

import { Menu } from "@headlessui/react";

const ReviewListItem = ({
  onDelete,
  onEdit,
  reviewLike,

  userInfo,
 

  id,
  user,
  content,
  created_at,
  user_profile_image,
  like_users,
}) => {
  // 수정 관련
  const [isEdit, setIsEdit] = useState(false);


  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const [localContent, setLocalContent] = useState(content);

  const afterQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id, localContent);
    toggleIsEdit();
  };

  

  // Reivew에서 가져와서 likedUser을 초기값으로 설정
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(like_users.length);

  // 좋아요 관련
  // const toggleIsLiked = () => {
  //   setIsLiked(() => !isLiked);
  // };

  const handleLike = () => {
    reviewLike(id);
    // toggleIsLiked();
  };

  useEffect(() => {
    // 맵핑된 아이템마다 같은 likedUser(boolean) 값을 내려주기 때문에
    // 하트의 형태변화는 isLiked로 따로 관리
    if (like_users.includes(userInfo.id)) {
      setIsLiked(true);
      setLikeCount(()=> likeCount);
      // console.log(isLiked, "isLiked in useEffect")
    }
  }, [like_users])

  console.log(like_users, "in item")

  return (
    <div>
      <div className="rounded mb-3 p-3 ">
        <div className="grid grid-cols-5 ">
          <div className="col-span-1 flex align-middle">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOXESdHIQO3wJZ2Ct7hu56W7k2s_Li3SYXyqYvNJ0SOSxRAL7xKVswcUCAOJXTJWsMTI&usqp=CAU"
              alt="img"
              className="w-16 h-16 rounded-full mt-2 mx-2 border-2 border-double border-green-500"
            />
          </div>

          <div className="col-span-4 border border-[rgb(71,79,88)] rounded-lg ">
            <div className="p-2 flex justify-between rounded-t-lg  bg-[rgb(45,51,59)] text-[rgb(161,173,185)]">
              <div className="flex">
                <div className="text-xs ">{user}</div>
              </div>
              <div className="relative">
                <Menu>
                  <Menu.Button>
                    <BsThreeDotsVertical className="" />
                  </Menu.Button>
                  <Menu.Items className="absolute w-14 rounded-md mt-2 flex flex-col focus:outline-none py-1 border z-50 border-[rgb(71,79,88)] bg-[rgb(48,54,61)] ">
                    <Menu.Item className="grid justify-center items-center h-full border m-1 rounded-md border-[rgb(71,79,88)] hover:bg-[rgb(60,60,60)] cursor-pointer">
                      <span className="text-xs " onClick={toggleIsEdit}>
                        수정
                      </span>
                    </Menu.Item>
                    <Menu.Item className="grid justify-center items-center h-full border m-1 rounded-md border-[rgb(71,79,88)] hover:bg-[rgb(60,60,60)] cursor-pointer">
                      <span className="text-xs" onClick={handleDelete}>
                        삭제
                      </span>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
            <div className="flex justify-between bg-[rgb(45,51,59)]">
              <div className="text-xs px-2 pb-2   text-[rgb(161,173,185)]">
                작성일자 {new Date(created_at).toLocaleString()}
              </div>
              <div>
                <div className="text-xs mr-3 flex">
                  <FaHeart
                    className={
                      isLiked
                        ? "text-red-600 mt-0.5 cursor-pointer hover:text-white "
                        : "text-white mt-0.5 cursor-pointer hover:text-red-600"
                    }
                    onClick={handleLike}
                  />
                  <div className="ml-1">{likeCount}</div>
                </div>
              </div>
            </div>

            {isEdit ? (
              <>
                <textarea
                  className="w-full border-md text-sm  p-2  bg-[rgb(32,37,42)] text-[rgb(161,173,185)]"
                  value={localContent}
                  onChange={(e) => setLocalContent(e.target.value)}
                ></textarea>
              </>
            ) : (
              <div className="text-sm p-2 py-3 rounded-b-lg bg-[rgb(32,37,42)] text-white">
                {content}
              </div>
            )}

            {isEdit ? (
              <div className="flex justify-end ">
                <span
                  onClick={afterQuitEdit}
                  className="mx-2 px-3 py-1 my-2 rounded-md bg-[rgb(42,42,50)] hover:bg-[rgb(50,50,50)] cursor-pointer text-white text-xs drop-shadow-md"
                >
                  취소
                </span>
                <span
                  onClick={handleEdit}
                  className="px-3 py-1 mr-2 my-2 rounded-md bg-[rgb(42,42,50)] hover:bg-[rgb(50,50,50)] cursor-pointer text-white text-xs drop-shadow-md"
                >
                  완료
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewListItem;
