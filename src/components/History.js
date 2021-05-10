import { useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GridItem from "./Grid/GridItem";
import CREATE_HISTORY_MUTATION from "./mutations/CreateHistoryMutation";
import HISTORY_PAYLOAD_MUTATION from "./mutations/CreateHistoryPayload";
import DELETE_HISTORY_MUTATION from "./mutations/DeleteHistoryMutation";
const Subtitle = styled.h3`
  font-size: 20px;
  color: #6d6d6d;
`;
const Content = styled.div`
  margin: 10px 0px;
  font-size: 16px;
  color: black;
`;
const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;
const YearInput = styled.input`
  color: black;
  padding: 5px 8px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
const ContentInput = styled.input`
  width: 100%;
  color: black;
  padding: 5px 8px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
const CreateBtn = styled.input`
  color: black;
  padding: 5px 8px;
  border-radius: 5px;
  background-color: #e7e7e7;
  border: 1px solid lightgray;
  cursor: pointer;
`;
const ActionBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
const SubmitBtn = styled.input`
  opacity: 0.5;
  padding: 8px 5px;
  color: black;
  cursor: pointer;
  width: 70px;
`;

const History = ({ data }) => {
  const { register: yearRegister, handleSubmit: yearHandle } = useForm();
  const history = useHistory();
  const {
    register: contentRegister,
    handleSubmit: contentHandle,
    setValue: setContentValue,
  } = useForm();
  const payloadComp = (result) => {
    history.go(0);
  };
  const yearComp = (result) => {
    history.go(0);
  };
  const deleteComp = (result) => {
    history.go(0);
  };
  const [createHistory, { loading: createHistoryLoading }] = useMutation(
    CREATE_HISTORY_MUTATION,
    {
      onCompleted: yearComp,
    }
  );
  const [createPayload, { loading: payloadLoading }] = useMutation(
    HISTORY_PAYLOAD_MUTATION,
    {
      onCompleted: payloadComp,
    }
  );
  const [deleteHistory, { loading: deleteLoading }] = useMutation(
    DELETE_HISTORY_MUTATION,
    {
      onCompleted: deleteComp,
    }
  );
  const YearValid = (data) => {
    const { year } = data;

    if (!createHistoryLoading) {
      createHistory({
        variables: {
          year: parseInt(year),
        },
      });
    }
  };
  const ContentValid = (data) => {
    const { content } = data;
    const PandY = content.split("/+/");
    console.log(PandY);
    if (!payloadLoading) {
      createPayload({
        variables: {
          year: parseInt(PandY[1]),
          payload: PandY[0],
        },
      });
    }
  };
  return (
    <GridItem xs={12} sm={12} md={6}>
      <Subtitle>연도 별 활동내역</Subtitle>
      <form onSubmit={yearHandle(YearValid)}>
        <BtnBox>
          <YearInput
            type="text"
            placeholder="연도"
            {...yearRegister("year", { required: "연도를 입력해야합니다." })}
          />
          <CreateBtn type="submit" value="연도 추가" />
        </BtnBox>
      </form>
      {data.map((item) => {
        return (
          <Content key={item.id}>
            {item.year}년
            <br />
            {item.payload.map((content) => (
              <p key={content}>{content}</p>
            ))}
            <br />
            <form onSubmit={contentHandle(ContentValid)}>
              <BtnBox>
                <ContentInput
                  type="text"
                  placeholder="내용"
                  {...contentRegister("content")}
                  onChange={({ target: { value } }) => {
                    setContentValue("content", `${value}/+/${item.year}`);
                  }}
                />
                <ActionBox>
                  <SubmitBtn
                    type="button"
                    value="삭제하기"
                    onClick={() => {
                      if (!deleteLoading) {
                        deleteHistory({
                          variables: {
                            id: parseInt(item.id),
                          },
                        });
                      }
                    }}
                  />
                  <CreateBtn type="submit" value="내용 추가" />
                </ActionBox>
              </BtnBox>
            </form>
          </Content>
        );
      })}
    </GridItem>
  );
};
export default History;
