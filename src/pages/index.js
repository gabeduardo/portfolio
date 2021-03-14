import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  SiReact,
  SiGatsby,
  SiPython,
  SiStyledComponents,
  SiJavascript,
  SiNodeDotJs,
} from "react-icons/si"
import { IconContext } from "react-icons/lib"
import {
  Banner,
  TextWrapper,
  MoreText,
  GenereicPara,
  GenericH2,
} from "../styles/IndexStyles"

const SectionTwo = styled.section`
  background-color: #21b2a6;
  text-align: center;
  padding: 10rem 0;

  div {
    width: 66%;
    margin: 0 auto;
  }
  h2 {
    font-size: 3rem;
    padding: 1.35em 0;
    color: #ffffff;
    border-bottom: 2px solid #1d9c91;
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    margin: 0;
  }
  p {
    text-transform: uppercase;
    color: #c8ece9;
    text-align: center;
    letter-spacing: 0.225em;
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.4rem;
    line-height: 2rem;

    color: #ffffff;
    border-bottom: 2px solid #1d9c91;
    font-weight: 800;
    letter-spacing: 0.225em;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    margin-bottom: 5rem;
  }
`
const SectionThree = styled.section`
  background-color: #505393;
  color: #ffffff;
  text-align: center;
  .header__section4 {
    width: 66%;
    margin: 0 auto;
  }
  .title__section4 {
    font-size: 3rem;
    padding: 1.35em 0;
    color: #ffffff;
    border-bottom: 2px solid #1d9c91;
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    margin: 0;
  }
  .grid__section4 {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
  .grid__section4 > * {
    padding: 3rem;
  }
`
const SectionFour = styled.section`
  background-color: #2b343d;
  color: #ffffff;
  margin-top: 0.5%;
`

const FlexBoxIndex = styled.div`
  display: flex;
  .image {
    width: ${props => (props.inverse ? "60%" : "40%")};
  }
  img {
    width: 100%;
  }
  .text__section3 {
    width: ${props => (props.inverse ? "40%" : "60%")};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export default () => (
  <>
    <section style={{ position: "relative" }}>
      <Banner />
      <TextWrapper>
        <div>
          <h2>Gabriel M C </h2>

          <Link to="/works">Contact</Link>
        </div>
      </TextWrapper>
      <MoreText>Learn More</MoreText>
    </section>
    <SectionTwo>
      <div>
        <h2>My Passion</h2>
        <p>
          I'm a Software Engineer, graduated from the U.C.A.B who loves to code
          speacilly using Python and Javascript, always open to learn new
          technologies and improve my skills in the existing ones, because of
          that, i'm always reading ebooks related to the technologies and
          languages that I master. Currently I'm focused on creating blazing
          fast websites with the JAMSTACK technology .
        </p>
      </div>
    </SectionTwo>

    <SectionThree>
      <div className="header__section4">
        <h2 className="title__section4"> Stack</h2>
        <GenereicPara lessSize grey>
          We use modern and latest technologies which helps our clients
          <br />
          as they are highly scalable and maintainable.
        </GenereicPara>
        <div className="grid__section4">
          <div className="item1" style={{ backgroundColor: "#4D508E" }}>
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <SiReact />
            </IconContext.Provider>
            <GenericH2 none>React</GenericH2>
          </div>
          <div className="item2" style={{ backgroundColor: "#4A4D89" }}>
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <SiGatsby />
            </IconContext.Provider>
            <GenericH2 none>Gatsby</GenericH2>
          </div>
          <div className="item3" style={{ backgroundColor: "#484A83" }}>
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <SiPython />
            </IconContext.Provider>
            <GenericH2 none>Python</GenericH2>
          </div>
          <div className="item4" style={{ backgroundColor: "#45477E" }}>
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <SiStyledComponents />
            </IconContext.Provider>
            <GenericH2 none> Css in Js</GenericH2>
          </div>
          <div className="item5" style={{ backgroundColor: "#424479" }}>
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <SiJavascript />
            </IconContext.Provider>
            <GenericH2 none>Javascript</GenericH2>
          </div>
          <div className="item6" style={{ backgroundColor: "#3F4174" }}>
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <SiNodeDotJs />
            </IconContext.Provider>
            <GenericH2 none>Nodejs</GenericH2>
          </div>
        </div>
      </div>
    </SectionThree>

    <SectionFour>
      <FlexBoxIndex>
        <div className="image">
          <img src="imgUno.jpg" alt="pic01" />
        </div>
        <div className="text__section3">
          <GenericH2>Website Development</GenericH2>
          <GenereicPara lessSize lessSpacing>
            We hand code beautiful websites using HTML5, CSS3, JS because they
            are fully customizable and efficient. No Worpress websites here.
          </GenereicPara>
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex inverse>
        <div className="text__section3">
          <GenericH2>Website Design</GenericH2>
          <GenereicPara lessSize lessSpacing>
            I love creating websites with an appropriate design and thinking
            about the comfort of the user, beyond this page that serves as a
            portfolio, in each of my projects I seek to make use of the
            techniques that covers elements of UX, UI to make a design that
            provides an adequate user interface and a quality experienc.
          </GenereicPara>
        </div>
        <div className="image">
          <img src="imgDos.jpg" alt="pic02" />
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex>
        <div className="image">
          <img src="imgUno.jpg" alt="pic03" />
        </div>
        <div className="text__section3">
          <GenericH2>Soft skills</GenericH2>
          <GenereicPara lessSize lessSpacing>
            We develop Mobile apps in Reactive Native, which can be used in both
            ios and Android.
          </GenereicPara>
        </div>
      </FlexBoxIndex>
    </SectionFour>
  </>
)
