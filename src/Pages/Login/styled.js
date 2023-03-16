import styled from "styled-components";
export const LoginStyled = styled.div `
    text-align:center;
    width:510px;
    padding:40px 80px;
    margin:80px auto;
    border-radius: 16px;
    border:2px solid ${(props)=>props.theme.palette.ColorApp.border};
.logoBox{
    position:fixed;
    z-index: 5;
    background-color:${({theme})=>theme.palette.main};
    top:0;
    left:0;
    right:0;
    height:55px;
    .logo,svg{
        position: absolute;
        left:24px;
        top:21px;
        width:90px;
    }
}
    h2{
        margin:0 0 32px;
    }

`
