import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Modal } from "@material-ui/core";
import styled from "styled-components";
import { useMutation, useReactiveVar } from "@apollo/client";
import LOGIN_MUTATION from "./mutations/LoginMutation";
import { useForm } from "react-hook-form";
import CHANGE_PASSWORD_MUTATION from "./mutations/ChangePasswordMutation";
import { logUserIn } from "apollo";
import { isLoggedInVar } from "apollo";
import { logUserOut } from "apollo";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "white",
    padding: theme.spacing(6, 0),
    position: "relative",
    display: "block",
  },
  paper: {
    backgroundColor: "white",
    position: "absolute",
    width: 400,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalBox = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
`;

const LoginHide = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const PwdInput = styled.input`
  padding: 5px 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 5px 0px;
`;
const ButtonBox = styled.div`
  padding: 15px 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
const Button = styled.input`
  padding: 5px 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 30%;
  text-align: center;
  background-color: #f7f7f7;
`;

export default function Footer(props) {
  const loggedIn = useReactiveVar(isLoggedInVar);
  const classes = useStyles();
  const { description, title } = props;
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const onCompletedP = (result) => {
    const {
      changePassword: { ok },
    } = result;
    if (!ok) {
      alert("비밀번호가 틀립니다.");
      return;
    }
    logUserOut();
    setOpen2(false);
    setOpen(false);
    alert("바뀐 비밀번호로 다시 로그인 해주세요.");
    return;
  };
  const onCompletedL = (result) => {
    const {
      login: { ok, token },
    } = result;
    if (!ok) {
      alert("비밀번호가 틀립니다.");
      return;
    }
    logUserIn(token);
    window.location.reload();
    setOpen(false);
    setOpen2(false);
    return;
  };
  const [changePwd, { loading: changePwdLoading }] = useMutation(
    CHANGE_PASSWORD_MUTATION,
    {
      onCompleted: onCompletedP,
    }
  );
  const [goLogin, { loading: loginLoading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: onCompletedL,
  });
  const { register: registerL, handleSubmit: handleSubmitL } = useForm();
  const { register: registerP, handleSubmit: handleSubmitP } = useForm();

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cpValid = (data) => {
    const { curPwd, newPwd, newPwd2 } = data;
    if (!changePwdLoading) {
      if (newPwd === newPwd2) {
        changePwd({
          variables: {
            curPassword: curPwd,
            newPassword: newPwd,
          },
        });
        return;
      }
      alert("비밀번호 확인이 일치하지 않습니다.");
    }
  };
  const loginValid = (data) => {
    const { pwd } = data;
    if (!loginLoading) {
      goLogin({
        variables: {
          password: pwd,
        },
      });
    }
  };

  const onInvalid = () => {
    alert("필요한 내용이 입력되지 않았습니다.");
  };

  const ChangePwd = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">비밀번호 변경</h2>
      <p id="simple-modal-description">
        현재 비밀번호와 새로운 비밀번호를 입력합니다. 비밀번호를 찾을 수 없으니
        입력 후 잘 기억해주세요.
      </p>
      <ModalBox onSubmit={handleSubmitP(cpValid, onInvalid)}>
        <PwdInput
          type="password"
          placeholder="현재 비밀번호"
          {...registerP("curPwd", { required: "비밀번호를 입력해주세요." })}
        />
        <PwdInput
          type="password"
          placeholder="새로운 비밀번호"
          {...registerP("newPwd", { required: "새 비밀번호를 입력해주세요." })}
        />
        <PwdInput
          type="password"
          placeholder="비밀번호 확인"
          {...registerP("newPwd2", {
            required: "비밀번호 확인을 입력해주세요.",
          })}
        />
        <ButtonBox>
          <Button type="submit" value="비밀번호 변경" />
        </ButtonBox>
      </ModalBox>
    </div>
  );

  const login = (
    <div style={modalStyle} className={classes.paper}>
      {loggedIn ? (
        <>
          <h2 id="simple-modal-title">관리자 콘솔</h2>
          <p id="simple-modal-description">
            로그아웃 또는 비밀번호 변경을 이용할 수 있습니다.
          </p>
        </>
      ) : (
        <>
          <h2 id="simple-modal-title">관리자 로그인</h2>
          <p id="simple-modal-description">
            비밀번호를 입력하고 로그인해주세요. 관리자가 아닌 경우 접근하지
            마세요.
          </p>
        </>
      )}
      <ModalBox onSubmit={handleSubmitL(loginValid, onInvalid)}>
        {loggedIn ? null : (
          <PwdInput
            type="password"
            placeholder="비밀번호"
            {...registerL("pwd", { required: "비밀번호를 입력해주세요." })}
          />
        )}
        {loggedIn ? (
          <ButtonBox>
            <Button type="button" value="비밀번호 변경" onClick={handleOpen2} />
            <Button
              type="button"
              value="로그아웃"
              onClick={() => {
                logUserOut();
                setOpen(false);
              }}
            />
          </ButtonBox>
        ) : (
          <ButtonBox>
            <Button type="submit" value="로그인" />
          </ButtonBox>
        )}
      </ModalBox>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {ChangePwd}
      </Modal>
    </div>
  );

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {loggedIn ? "관리자 모드" : title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright"}
          <LoginHide color="inherit" onClick={handleOpen}>
            {" © "}
          </LoginHide>
          (사단법인) 국민독서문화진흥회 {new Date().getFullYear()}
          {"."}
          {"모든 권리를 보유하고 있습니다."}
        </Typography>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {login}
      </Modal>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
