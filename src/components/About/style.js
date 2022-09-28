import styled from "styled-components";
import bg from "../../assets/img/background.png";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${bg});
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px 130px;
  @media (max-width: 1450px) {
    padding: 25px 50px;
  }
`;

Container.Img = styled.img``;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-top: 24px;
  @media (max-width: 350px) {
    font-size: 20px;
  }
`;

Container.Desc = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  @media (max-width: 350px) {
    font-size: 12px;
  }
`;

export const CounterWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15%;
`;

export const EachWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

CounterWrap.Number = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border-bottom: 10px solid #079f16;
  @media (max-width: 1115px) {
    font-size: 70px;
  }
`;

CounterWrap.Name = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-top: -90px;
  @media (max-width: 1115px) {
    font-size: 30px;
    margin-top: -60px;
  }
`;
