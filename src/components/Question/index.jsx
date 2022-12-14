import React from "react";
import {
  Container,
  Wrapper,
  CollapseStyle,
  Flexing,
  Div,
  BgImg,
} from "./style";
import question from "../../assets/img/question.png";
import { questionData } from "../../mock/question";
import bg from "../../assets/img/bg.png";

const { Panel } = CollapseStyle;

const Question = () => {
  return (
    <Wrapper>
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <Container.Img src={question} alt="question" />
          <div className="line"></div>
        </div>
        <p className="title">Ko’p beriladigan savollar</p>
        <CollapseStyle>
          {questionData.map((value) => {
            return (
              <Panel
                style={{ backgroundColor: "#242c41", marginBottom: "20px" }}
                header={
                  <Flexing>
                    <Div>
                      <Flexing.Circle>{value.id}</Flexing.Circle>
                      <Flexing.Title>{value.title}</Flexing.Title>
                    </Div>
                  </Flexing>
                }
                key={value.id}
              >
                <div>
                  <CollapseStyle.Text>{value.item}</CollapseStyle.Text>
                </div>
              </Panel>
            );
          })}
        </CollapseStyle>
        <BgImg src={bg} alt="" />
      </Container>
    </Wrapper>
  );
};

export default Question;
