import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";


const Footer = () => {
    return (
      <Box>
        <h1 style={{ color: "black", 
                     textAlign: "center", 
                     marginTop: "-50px" }}>
          The other links
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>About Me</Heading>
              <FooterLink href="https://cdn.sivanaspirit.com/wp-content/uploads/2019/01/28151016/un198-896x580.jpg">Calm</FooterLink>
              <FooterLink href="https://cdn.gamer-network.net/2018/usgamer/pokemon-trading-cards_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/pokemon-trading-card-game-art-identity-feature.jpg">Collected</FooterLink>
              <FooterLink href="https://images.unsplash.com/photo-1576834967753-ad2cf1cc8d19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1996&q=80">Calculated</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="https://www.veggrowguide.com/Blog.html">Writing</FooterLink>
              <FooterLink href="view-source:https://www.veggrowguide.com/index.html">Coding</FooterLink>
              <FooterLink href="https://joedrozd.xyz/">Wordpress</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="https://www.facebook.com/joedrozd24/">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://www.instagram.com/joe_046mh/?hl=en">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://www.linkedin.com/in/joseph-drozd-a17664151/">
                <i className="fab fa-linkedin">
                  <span style={{ marginLeft: "10px" }}>
                    LinkedIn
                  </span>
                </i>
              </FooterLink>
            </Column>
          
            <Column>
            <div><p>Thanks for reading! <br></br>      - Joe</p></div>
            </Column>
          </Row>
        </Container>
      </Box>
    );
  };
  export default Footer;