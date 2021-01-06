import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`

const Hero = () => {
  return (
    <StyledSection id="hero">
      <h1 className="title">
        Hello <span role="img" aria-label="emoji">👋</span><br />
        I'm Eli.
      </h1>
      <h2 className="subtitle">
        I work with open source
        <span className="highlighted"> telecommunication projects</span>,
        <span className="highlighted"> self-driving cars</span>, and
        <span className="highlighted"> research</span>.
      </h2>
      <div className="description">
        Software Engineer and 2020 Robotics graduate.
      </div>
    </StyledSection>
  )
}

export default Hero
