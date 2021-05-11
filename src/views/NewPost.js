import React, { useEffect } from "react";
// core components
import classNames from "classnames";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { useHistory, useParams } from "react-router-dom";
import { useMutation, useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "apollo";
import CREATE_POST_MUTATION from "components/mutations/CreatePostMutation";
import { useForm } from "react-hook-form";

const dashboardRoutes = [];

const Container = styled.div`
  padding: 30px 10px;
`;

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
const FileInputBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const useStyles = makeStyles(styles);

const NewPost = (props) => {
  const { ...rest } = props;
  const classes = useStyles();
  const history = useHistory();
  const login = useReactiveVar(isLoggedInVar);
  const { type } = useParams();
  const onCompleted = (result) => {
    history.goBack();
  };
  const [createPost, { loading: loadingMutation }] = useMutation(
    CREATE_POST_MUTATION,
    {
      onCompleted,
    }
  );
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
  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  });
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#2c2c2c" }}>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="사단법인 국민독서문화진흥회"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Container className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
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
                <FileInput {...register("ContentImage")} type="file" />
              </Label>
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
                <FileInput {...register("ContentFile")} type="file" />
              </Label>
            </FileInputBox>
            <ButtonBox>
              <SubmitBtn type="submit" value="제출하기" />
            </ButtonBox>
          </PostContainer>
        </div>
      </Container>
    </div>
  );
};

export default NewPost;
