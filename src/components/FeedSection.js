import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Post from "components/Post";
import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import SEE_POST_QUERY from "components/queries/SeePostQuery";
import { isLoggedInVar } from "apollo";
import { useForm } from "react-hook-form";
import CREATE_POST_MUTATION from "components/mutations/CreatePostMutation";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  padding: 30px 10px;
`;

const CreateBtn = styled.input`
  background-color: #f7f7f7;
  padding: 5px 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
  color: black;
  cursor: pointer;
`;

const useStyles = makeStyles(styles);
const PostContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px 10px;
`;

const FileInput = styled.input`
  padding: 10px 0px;
  color: black;
  opacity: 0;
  display: none;
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
const ButtonBox = styled.div`
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
`;
const Label = styled.label`
  margin: 15px 0px;
  color: black;
  background-color: #e7e7e7;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  padding: 10px 5px;
  width: 100px;
  text-align: center;
`;
const FileName = styled.div`
  color: black;
  margin-left: 15px;
`;
const FileInputBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const FeedSection = (props) => {
  const [createMode, setCreateMode] = useState(false);
  const login = useReactiveVar(isLoggedInVar);
  const history = useHistory();
  const classes = useStyles();
  const [file, setFile] = useState("선택하지 않음");
  const [imageFile, setImageFile] = useState("선택하지 않음");
  const { type } = props;
  const onCompleted = (result) => {
    history.go(0);
  };
  const [createPost, { loading: loadingMutation }] = useMutation(
    CREATE_POST_MUTATION,
    {
      onCompleted,
    }
  );
  const { data, loading } = useQuery(SEE_POST_QUERY, {
    variables: {
      type,
    },
  });
  const { setValue, register, handleSubmit } = useForm();
  const onValid = (data) => {
    const { ContentTitle, ContentText, ContentImage, ContentFile } = data;
    if (!loadingMutation) {
      createPost({
        variables: {
          type,
          title: ContentTitle,
          payload: ContentText,
          file: ContentFile.length ? ContentFile[0] : null,
          image: ContentImage.length ? ContentImage[0] : null,
        },
      });
    }
  };
  if (!data || loading) {
    return null;
  }
  return (
    <Container className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        {data.seePosts.posts.map((item) => {
          return <Post data={item} key={item.id} />;
        })}
        {login ? (
          <ButtonBox>
            <CreateBtn
              type="button"
              value="내용 추가"
              onClick={() => setCreateMode(true)}
            />
          </ButtonBox>
        ) : null}
        {createMode ? (
          <PostContainer onSubmit={handleSubmit(onValid)}>
            <TitleInput
              type="text"
              {...register("ContentTitle")}
              onChange={({ target: { value } }) => {
                setValue("ContentTitle", value);
              }}
            />
            <FileInputBox>
              <Label>
                이미지 넣기
                <FileInput
                  {...register("ContentImage")}
                  type="file"
                  onChange={({ target: { value } }) => {
                    setImageFile(value.split("\\")[2]);
                  }}
                />
              </Label>
              <FileName>{imageFile}</FileName>
            </FileInputBox>
            <TextInput
              {...register("ContentText")}
              onChange={({ target: { value } }) => {
                setValue("ContentText", value);
              }}
              rows={40}
            />
            <FileInputBox>
              <Label>
                첨부파일 넣기
                <FileInput
                  {...register("ContentFile")}
                  type="file"
                  onChange={({ target: { value } }) => {
                    setFile(value.split("\\")[2]);
                  }}
                />
              </Label>
              <FileName>{file}</FileName>
            </FileInputBox>
            <ButtonBox>
              <SubmitBtn type="submit" value="제출하기" />
            </ButtonBox>
          </PostContainer>
        ) : null}
      </div>
    </Container>
  );
};

export default FeedSection;
