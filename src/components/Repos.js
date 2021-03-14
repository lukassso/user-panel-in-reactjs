import React from "react"
import { GithubContext } from "../context/context"
import styled from "styled-components"
import Pie from "./Charts/Pie"
import Doughnut from "./Charts/Doughnut"
import Column from './Charts/Column'
import Bar from './Charts/Bar'

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

const Repos = () => {
  const { repos } = React.useContext(GithubContext)
  // console.log(repos)

  const chartData = [
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

  let languages = repos.reduce((total, item) => {
    // console.log(item);
    const { language, stargazers_count } = item
    // console.log(language)
    if (!language) return total
    if (!total[language]) {
      total[language] = { 
        label: language, 
        value: 1, 
        stars: stargazers_count 
        };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    }
    return total
  }, {})
  console.log(languages)
  
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 4)
  console.log(languages)

const mostPopular = Object.values(languages)
.sort((a, b) => {
  return b.stars - a.stars
})
.map(item => {
  return({...item, value:item.stars})
});
console.log(mostPopular)

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie data={mostUsed} />
        <Column data={chartData} />
        <Doughnut data={mostPopular}/>
        <Bar data={chartData} />
      </Wrapper>
    </section>
  )
}

export default Repos
