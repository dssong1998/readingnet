import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useMutation, useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "apollo";
import { useForm } from "react-hook-form";
import UPDATE_POST_MUTATION from "./mutations/UpdatePostMutation";
import { useHistory } from "react-router-dom";
import DELETE_POST_MUTATION from "./mutations/DeletePostMutation";

const PostContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px 10px;
`;

const Image = styled.img`
  margin: 10px 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const FileInput = styled.input`
  padding: 10px 0px;
  color: black;
`;
const TitleInput = styled.input`
  width: 50%;
  padding: 20px 10px;
  color: black;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
const TextInput = styled.textarea`
  padding: 20px 10px;
  color: black;
  border: 1px solid lightgray;
  width: 100%;
  border-radius: 5px;
`;
const TextContent = styled.pre`
  margin-top: 30px;
  width: 100%;
  text-align: left;
  color: black;
  font-size: 14px;
`;
const Title = styled.h1`
  font-size: 28px;
  color: #2c2c2c;
`;
const SubmitBox = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;
const SubmitBtn = styled.input`
  padding: 8px 5px;
  color: black;
  cursor: pointer;
  width: 55px;
  align-self: right;
  opacity: 0.5;
`;

export default function Post({ data }) {
  const { register, handleSubmit, setValue } = useForm({ mode: "onChange" });
  const login = useReactiveVar(isLoggedInVar);
  const history = useHistory();
  const deleteComplete = (result) => {
    const {
      deletePost: { ok },
    } = result;
    if (!ok) {
      alert("삭제할 수 없습니다.");
      return;
    }
    alert("삭제완료.");
    history.go(0);
    history.goBack();
    return;
  };
  const onCompleted = (result) => {
    const {
      updatePost: { ok },
    } = result;
    if (!ok) {
      alert("수정할 수 없습니다.");
      return;
    }
    history.go(0);
    return;
  };
  const [deletPost, { loading: DeletePostLoading }] = useMutation(
    DELETE_POST_MUTATION,
    {
      variables: {
        id: data.id,
      },
      onCompleted: deleteComplete,
    }
  );
  const [editPost, { loading }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted,
  });
  useEffect(() => {
    setValue("ContentText", data.payload);
    setValue("ContentTitle", data.title);
  });
  const onValid = (form) => {
    const { ContentTitle, ContentText, ContentImage, ContentFile } = form;
    if (!loading) {
      editPost({
        variables: {
          id: data.id,
          title: ContentTitle,
          payload: ContentText,
          image: ContentImage.length ? ContentImage[0] : null,
          file: ContentFile.length ? ContentFile[0] : null,
        },
      });
    }
  };
  return (
    <PostContainer onSubmit={handleSubmit(onValid)}>
      {login ? (
        <TitleInput
          type="text"
          {...register("ContentTitle")}
          onChange={({ target: { value } }) => {
            setValue("ContentTitle", value);
          }}
        />
      ) : (
        <Title>{data.title}</Title>
      )}
      {data.image ? <Image src={data.image} alt="post" /> : null}
      {login ? <FileInput {...register("ContentImage")} type="file" /> : null}
      {login ? (
        <TextInput
          {...register("ContentText")}
          onChange={({ target: { value } }) => {
            setValue("ContentText", value);
          }}
          rows={40}
        />
      ) : (
        <TextContent>{data.payload}</TextContent>
      )}
      {data.file ? <a href={data.file}>첨부파일</a> : null}
      {login ? <FileInput {...register("ContentFile")} type="file" /> : null}
      {login ? (
        <SubmitBox>
          <SubmitBtn
            type="button"
            value="삭제하기"
            onClick={() => {
              if (!DeletePostLoading) {
                deletPost();
              }
            }}
          />
          <SubmitBtn type="submit" value="수정하기" />
        </SubmitBox>
      ) : null}
    </PostContainer>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    payload: PropTypes.string.isRequired,
    file: PropTypes.string,
    image: PropTypes.string,
  }),
};
