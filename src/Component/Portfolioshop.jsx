import React,{useState} from 'react'
import styled from 'styled-components';
import { ReactComponent as Ten } from "../img/ten.svg";
import { ReactComponent as Search } from "../img/Search.svg"
import BoxModel from './BoxModel';
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
></svg>

const HeaderLayout = styled.div`
 max-width : 1440px;
 margin : 0 auto;
 display : flex;
 height: 348px;
 flex-direction: column;
 background: #F5F5F5;
`;
const SubHeaderLayout = styled.div`
 max-width : 1200px;
 width : 1200px;
 margin : 0 auto;
 display : flex;
 flex-direction: column;
 gap : 15px;
`;
const HeaderInput = styled.div`
  height: 166px;
  padding 57px 249px 57px 190px;
`;
const Text = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 33px;
letter-spacing: -1px;
color: #000000;
span{
  font-weight: 600;
}
`;

const TextC = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 33px;
letter-spacing: -1px;
color: #000000;
span{
  font-weight: 600;
  color: #FF7759;
}
`;

const Title = styled.div`
  display : flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top:73px;
  margin-bottom : 37px;
  gap : 10px;
`;
const Text1 = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 19px;
letter-spacing: -1px;
color: #7C7C7C;
`;
const Frame = styled.form`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 22px;
letter-spacing: -1px;
color: #000000;
display : flex;
height: 52px;
flex-direction : row;
align-items : center;
gap : 10px;
`;
const Input = styled.input`
width: 98px;
height: 32px;
background: #F9F9FD;
border: 0.5px solid #C9C6E1;
border-radius: 5px;
padding : 10px;
box-sizing: border-box;
text-align : right;
`;
const Button = styled.button`
display : flex;
gap : 23px;
align-items : center;
justify-content : center;
width: 181px;
height: 52px;
background: #FF7759;
border-radius: 7px;
border : none;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
letter-spacing: -1px;
color: #FFFFFF;
margin-left : auto;
`;
const MainLayout = styled.div`
 max-width : 1200px;
 margin : 0 auto;
 display : flex;
 flex-direction: column;
`;
const Frame1 = styled.div`
display : flex;
gap : 30px;
flex-wrap: wrap;
`;
const Frame2 = styled.div`
display : flex;
gap : 30px;
flex-wrap: wrap;
margin-bottom : 73px;
`;
export default function Portfolioshop() {

  return (
    <>
    <MainLayout>
    <Title><TextC><span>내가 자주보는 </span>웹툰</TextC><Text1>내가 좋아할것 같은 웹툰</Text1></Title>
    <Frame1>
    <BoxModel flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><BoxModel flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><BoxModel flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/>
    </Frame1>
    <Title><TextC><span>이달의 </span>신작</TextC><Text1>각 플랫폼의 이번달 신작</Text1></Title>
    <Frame1>
    <BoxModel flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><BoxModel flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><BoxModel flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/>
    </Frame1>
    <Title><TextC><span>내가 보는것과 유사한 </span>웹툰</TextC><Text1>비슷한 장르입니다</Text1></Title>
    <Frame2>
    <BoxModel flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><BoxModel flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><BoxModel flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/>
    </Frame2>
    </MainLayout>
    </>
  )
}
