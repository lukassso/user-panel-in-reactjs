import React from "react"
import { GithubContext } from "../context/context"
import styled from "styled-components"
import Pie from "./Charts/Pie"

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

const mostUsed = [
  {
    label: "Javascript",
    value: "134",
  },
  {
    label: "CSS",
    value: "122",
  },
  {
    label: "Java",
    value: "233",
  },
]

const Repos = () => {
  const { repos } = React.useContext(GithubContext)
  // console.log(repos)

  let languages = repos.reduce((total, item) => {
    // console.log(item);
    const { language } = item
    // console.log(language)
    if (!language) return total
    if (!total[language]) {
      total[language] = { label: language, value: 1 }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      }
    }
    return total
  }, {})
  // console.log(languages)
  
  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 4)
  console.log(languages)

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie data={languages} />
      </Wrapper>
    </section>
  )
}

export default Repos
