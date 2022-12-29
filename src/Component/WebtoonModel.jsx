import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { ReactComponent as Green } from "../img/green.svg"
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
>
  <path fill="current" fill-rule="evenodd" d="...." />
</svg>


const BoxModeL = styled.div`
display : flex;
flex-direction: column;
width : 100%;
height: 273px;
background: #FFFFFF;
border: 1px solid #CECECE;
border-radius: 7px;
box-sizing : border-box;
padding : 35px 24px 35px 24px;
gap : 8px;
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
const TextP = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 33px;
letter-spacing: -1px;
margin-bottom : 37px;
color: #000000;
span{
  font-weight: 600;
}
`;
const Frame2 = styled.div`
display : flex;
flex-direction: row;
justify-content : space-between;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 19px;
letter-spacing: -1px;
color: #7C7C7C;
`;
const Round = styled.div`
display : flex;
flex-direction : row;
gap : 4px;
`;
const Text2 = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 25px;
letter-spacing: -1px;
color: #282828;
`;
export default function BoxModel(props) {
    const [period,setPeriod]=useState(props.period);
    const [money,setMoney]=useState(props.money);
    const [isOpen,setIsOpen]=useState(false);
    const [tabledata,setTabledata]=useState("");
    useEffect(() => {
  
    }, [])
  return (
    <>
    <BoxModeL>
            <Text1>플랫폼 : {props.flatform}</Text1>
            <TextP>{props.name}</TextP>
            <Frame2>평점 <Round><Green/><Green/><Green/><Green/><Green/></Round></Frame2>
            <Frame2>장르 <Text2>{props.genre}</Text2></Frame2>
            <Frame2>좋아요 <Text2>{props.like} 개</Text2></Frame2>
    </BoxModeL>
  </>
  )


  
}