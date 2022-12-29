import React,{useState,Component} from 'react'
import styled from 'styled-components';
import { ReactComponent as Right } from "../img/rightarrow.svg";
import { ReactComponent as Left } from "../img/leftarrow.svg";
import BoxModel from './BoxModel';
import Example from './WebtoonModel';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
align-items: center;

`;
const Exam = styled.div`
display : flex;
gap : 30px;
flex-wrap: wrap;
align-items: center;

`;
const Frame2 = styled.div`
display : flex;
gap : 30px;
flex-wrap: wrap;
margin-bottom : 73px;
`;
export default function Portfolioshop() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: (<div><Right/></div>),
    prevArrow: (<div><Left /></div>)
  };
  return (
    <>
    <MainLayout>
    <Title><TextC><span>내가 자주보는 </span>웹툰</TextC><Text1>내가 좋아할것 같은 웹툰</Text1></Title>
      {/* <Left/> */}
    <Slider {...settings}>
    <Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/>
    {/* <Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/> */}
    </Slider>
    {/* <Right/> */}
    <Title><TextC><span>이달의 </span>신작</TextC><Text1>각 플랫폼의 이번달 신작</Text1></Title>
    <Slider {...settings}>
    <Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/>
    {/* <Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/> */}
    </Slider>
    <Title><TextC><span>내가 보는것과 유사한 </span>웹툰</TextC><Text1>비슷한 장르입니다</Text1></Title>
    <Slider {...settings}>
    <Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/>
    {/* <Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/><Example flatform="네이버" name="화산귀환" genre="무협 / 액션" like="123"/> */}
    </Slider>
    <Frame2/>
    </MainLayout>
    </>
  )
}
