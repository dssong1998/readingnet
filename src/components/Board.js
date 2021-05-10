import { useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "apollo";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import SEE_POST_QUERY from "./queries/SeePostQuery";
import Pagination from "@material-ui/lab/Pagination";
import { useState } from "react";
import { useEffect } from "react";

import { makeStyles } from "@material-ui/core";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px 0px 5px;
`;

const Table = styled.table`
  width: 100%;
  max-width: 1400px;
  color: black;
`;
const Head = styled.thead`
  width: 100%;
`;
const Row = styled.tr`
  width: 100%;
`;
const TitleHeader = styled.td`
  padding: 10px 20px;
  width: 65%;
  border-bottom: 2px solid black;
  font-size: 16px;
  font-weight: 700;
`;
const DateHeader = styled.td`
  text-align: right;
  padding: 10px 20px;
  width: 35%;
  border-bottom: 2px solid black;
  font-size: 16px;
  font-weight: 700;
`;
const TitleArea = styled.td`
  padding: 20px 10px;
  width: 65%;
  border-bottom: 1px solid lightgray;
  font-size: 12px;
`;
const DateArea = styled.td`
  text-align: right;
  padding: 20px 20px;
  width: 35%;
  border-bottom: 1px solid lightgray;
  font-size: 12px;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 15px;
`;

const Btn = styled.input`
  color: black;
  padding: 5px 8px;
  border-radius: 5px;
  background-color: #e7e7e7;
  border-color: lightgray;
`;
const Link = styled.input`
  cursor: pointer;
`;

const Board = ({ type }) => {
  const classes = useStyles();
  const login = useReactiveVar(isLoggedInVar);
  const [page, setPage] = useState(1);
  const history = useHistory();
  const { data, loading, fetchMore } = useQuery(SEE_POST_QUERY, {
    variables: {
      type,
      page,
    },
  });
  useEffect(() => {
    fetchMore({
      variables: {
        type,
        page,
      },
    });
  }, [type, page, fetchMore]);
  const handlePage = ({ target }) => {
    const { innerText } = target;
    setPage(parseInt(innerText));
  };
  if (loading || !data) {
    return null;
  }
  return (
    <Container className={classes.container}>
      <Table cellSpacing="0">
        <Head>
          <Row>
            <TitleHeader colSpan="6">제목</TitleHeader>
            <DateHeader>작성일</DateHeader>
          </Row>
        </Head>
        <tbody>
          {data.seePosts.posts.map((item) => {
            const date = new Date(parseInt(item.createdAt));
            const yy = date.getFullYear();
            const mm = date.getMonth() + 1;
            const dd = date.getDate();
            return (
              <Row key={item.id}>
                <TitleArea colSpan="6">
                  <Link
                    type="button"
                    value={item.title}
                    onClick={() => history.push(`/contest/${item.id}`)}
                  />
                </TitleArea>
                <DateArea>{`${yy}-${mm < 10 ? `0${mm}` : mm}-${
                  dd < 10 ? `0${dd}` : dd
                }`}</DateArea>
              </Row>
            );
          })}
        </tbody>
      </Table>
      <Pagination
        count={Math.floor((data.seePosts.totalCnt - 1) / 10) + 1}
        page={page}
        onChange={handlePage}
        hidePrevButton
        hideNextButton
        style={{ marginTop: "10px" }}
      />
      {login ? (
        <BtnBox>
          <Btn
            type="button"
            value="글 추가"
            onClick={() => history.push(`/newpost/${type}`)}
          />
        </BtnBox>
      ) : null}
    </Container>
  );
};
export default Board;
