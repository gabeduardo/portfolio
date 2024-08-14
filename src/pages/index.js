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
  SiGmail,
  SiAdobeacrobatreader,
} from "react-icons/si"
import { IconContext } from "react-icons/lib"
import { StaticImage } from "gatsby-plugin-image"
import {
  TextWrapper,
  MoreText,
  GenereicPara,
  GenericH2,
} from "../styles/IndexStyles"
import Estedad from "../../static/Estedad[wght,kshd].ttf"
import cv from "../../static/cv.pdf"

const SectionTwo = styled.section`
  background-color: #21b2a6;
  text-align: center;
  padding: 10rem 0;
  @font-face {
    font-family: "source-serif-var";
    src: url(${Estedad}) format("truetype");
    font-weight: 100 800;
    font-display: swap;
  }

  div {
    width: 66%;
    margin: 0 auto;
  }
  h2 {
    padding: 1.35em 0;
    color: #ffffff;
    border-bottom: 2px solid #1d9c91;
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    margin: 0;
    font-family: "source-serif-var";
    font-size: 45px;
  }
  p {
    text-transform: uppercase;
    color: #c8ece9;
    text-align: center;
    letter-spacing: 0.225em;
    font-family: "source-serif-var";

    font-weight: 900;
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
  @font-face {
    font-family: "source-serif-var";
    src: url(${Estedad}) format("truetype");
    font-weight: 100 800;
    font-display: swap;
  }
  .header__section4 {
    width: 66%;
    margin: 0 auto;
  }
  .title__section4 {
    font-family: "source-serif-var";

    font-size: 40px;

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

    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
  .grid__section4 > * {
    padding: 3rem;
  }

  .grid__section6 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 3%;
    .item2,
    .item1 {
      padding: 3rem;
    }
  }

  .contactIcon {
    font-size: 50px;
    color: white;
  }
  @media only screen and (max-width: 400px) {
    .grid__section6 {
      grid-template-columns: 1fr;
      h2 {
        margin-left: 0;
      }
    }
    .contactIcon {
      font-size: 20px;
    }
  }
`
const SectionFour = styled.section`
  background-color: #2b343d;
  color: #ffffff;
  margin-top: 0.5%;
`

const SectionFive = styled.section`
  background-color: #e7e7e7;
  text-align: center;
  @font-face {
    font-family: "source-serif-var";
    src: url(${Estedad}) format("truetype");
    font-weight: 100 800;
    font-display: swap;
    font-size: 1rem;
  }

  .title__section5 {
    font-family: "source-serif-var";

    font-size: 45px;

    padding: 1.35em 0;
    color: black;
    border-bottom: 2px solid #1d9c91;
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    margin: 0;
  }
  .grid__section5 {
    overflow: hidden;
    display: grid;
    grid-gap: 2vw;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 3%;
  }

  @media all and (max-width: 760px) {
    .grid__section5 {
      overflow: hidden;
      display: grid;

      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media all and (max-width: 680px) {
    .grid__section5 {
      overflow: hidden;
      display: grid;

      grid-template-columns: 1fr;
    }
  }
  p {
    font-family: "source-serif-var";
    font-size: 1rem;
    font-style: italic;
    letter-spacing: 0.134em;

    font-size: 1.1rem;
    font-variation-settings: "kshd" 200;
    margin-bottom: 0;
    padding-bottom: 3%;
  }
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

const Banner = styled.div`
  content: "";
  display: grid;
  height: 100vh;
  width: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(30%);
`
const index = () => (
  <>
    <section style={{ position: "relative" }}>
      <Banner>
        <StaticImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          placeholder="blurred"
          // This is a presentational image, so the alt should be an empty string
          alt=""
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src="../../static/portada.jpg"
          formats={["webp", "avif"]}
        />
      </Banner>
      <TextWrapper>
        <div>
          <h2>Gabriel M C </h2>

          <a href="#contacto">Contact</a>
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
          CURRENTLY I'M FOCUSING IN MODERN TECHNOLOGIES LIKE PYTHON & DAJNGO & THE IMPLEMENTATION OF
          THE JAMSTACK
          <br />
          FOR THE FRONT I LIKE TO USE ES6 ALONG REAT AND FOR THE BACK PRIMARILY
          NODE.JS AND PYTHON.
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
          <StaticImage
            src="../../static/imgUno.jpg"
            alt="pic01"
            placeholder="blurred"
            width={960}
            height={960}
            formats={["webp", "avif"]}
          />
        </div>
        <div className="text__section3">
          <GenericH2>Website Development</GenericH2>
          <GenereicPara lessSize lessSpacing>
            MY MAIN FOCUS RELIES ON THE WEBSITE DEVELOPMENT WITH MODERN
            TECHNOLOGIES LIKE THE STACK DESCRIBED ABOVE, BECAUSE THEY ARE FULLY
            CUSTOMIZABLE AND VERY EFFICIENT.
          </GenereicPara>
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex inverse>
        <div className="text__section3">
          <GenericH2>Website Design</GenericH2>
          <GenereicPara lessSize lessSpacing>
            I LOVE CREATING WEBSITES WITH AN APPROPRIATE DESIGN AND THINKING
            ABOUT THE COMFORT OF THE USER, IN EACH OF MY PROJECTS I SEEK TO MAKE
            USE OF THE TECHNIQUES THAT COVERS ELEMENTS OF UX & UI TO MAKE A
            DESIGN THAT PROVIDES AN ADEQUATE USER INTERFACE AND A NICE
            EXPERIENCE TO THE USER
          </GenereicPara>
        </div>
        <div className="image">
          <StaticImage
            src="../../static/3588964.jpg"
            alt="pic02"
            placeholder="blurred"
            width={960}
            height={960}
            formats={["webp", "avif"]}
          />
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex>
        <div className="image">
          <StaticImage
            src="../../static/imgTres.jpg"
            alt="pic03"
            placeholder="blurred"
            width={960}
            height={960}
            formats={["webp", "avif"]}
          />
        </div>
        <div className="text__section3">
          <GenericH2>Other skills</GenericH2>
          <GenereicPara lessSize lessSpacing>
            I LIKE TO READ EBOOKS SO IT HELPS ME OUT TO STAY UPDATED, CLEAR ALL
            MY DOUBTS AND ALSO GROW UP MY KNOWLEDGE,I AM ALWAYS WILLING TO LEARN
            NEW SKILLS, NEW TECHNOLOGIES, LANGUAGES AND IMPROVE MY EXISTING
            ONES, I FIRMLY BELIEVE THAT COMMUNICATION IS A KEY POINT NOT ONLY
            BETWEEN THE MEMBERS OF THE DEVELOPMENT TEAM BUT ALSO WITH THE
            CLIENTS
          </GenereicPara>
        </div>
      </FlexBoxIndex>
    </SectionFour>

    <SectionFive>
      <h2 className="title__section5"> Some of my works</h2>
      <div className="grid__section5">
        <div className="item1" style={{ backgroundColor: "#2b343d" }}>
          <a href="https://cheesecakedeli.netlify.app/">
            <StaticImage
              src="../images/deli.png"
              alt="cheesecake ecommerce"
              width={296}
              height={160}
              placeholder="blurred"
            />
          <GenericH2 none>Cheesecakedeli.com</GenericH2>
          </a>
        </div>
        <div className="item1" style={{ backgroundColor: "#2b343d" }}>
          <StaticImage
            src="../images/twitter.png"
            alt="twitter project"
            width={296}
            height={160}
            placeholder="blurred"
          />
          <GenericH2 none>Web Bienes Raíces</GenericH2>
        </div>
          <div className="item1" style={{ backgroundColor: "#2b343d" }}>
           <a href="https://capable-sopapillas-9457cb.netlify.app/">
              <StaticImage
                src="../images/bienesRaices.png"
                alt="A realstate platform"
                width={296}
                height={160}
                placeholder="blurred"
              />
            </a>
        </div>



        <div className="item1" style={{ backgroundColor: "#2b343d" }}>
          <StaticImage
            src="../images/portada.png"
            alt="A elearning platform"
            width={296}
            height={160}
            placeholder="blurred"
          />
          <GenericH2 none>Educab</GenericH2>
        </div>
        <div className="item1" style={{ backgroundColor: "#2b343d" }}>
          <StaticImage
            src="../images/historia.png"
            alt="An ecommerce"
            width={296}
            height={160}
            placeholder="blurred"
          />
          <GenericH2 none>Ecommerce</GenericH2>
        </div>


        <div className="item1" style={{ backgroundColor: "#2b343d" }}>
          <StaticImage
            src="../images/schunk.png"
            alt="schunk ecommerce"
            width={296}
            height={160}
            placeholder="blurred"
          />
          <GenericH2 none>Schunk Ecommerce</GenericH2>
        </div>

      </div>
      <p>And many many more, let's talk </p>
    </SectionFive>

    <SectionThree id="contacto">
      <div className="header__section4">
        <h2 className="title__section4"> Contact</h2>
        <GenereicPara lessSize grey>
          IF YOU ARE INTERESTED IN WORK WITH ME
          <br />
          YOU CAN REACH ME UP THROUGH MY EMAIL.
        </GenereicPara>
        <div className="grid__section6">
          <div className="item1" style={{ backgroundColor: "#4D508E" }}>
            <SiGmail className="contactIcon" />

            <GenericH2 none>gemcirelli@gmail.com</GenericH2>
          </div>
          <div className="item2" style={{ backgroundColor: "#4A4D89" }}>
            <a href={cv} download>
              <SiAdobeacrobatreader className="contactIcon" />
              <GenericH2 none>CV </GenericH2>
            </a>
          </div>
        </div>
      </div>
    </SectionThree>
  </>
)

export default index
