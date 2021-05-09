import React, { useState, useEffect } from "react"
import mockUser from "./mockData.js/mockUser"
import mockRepos from "./mockData.js/mockRepos"
import mockFollowers from "./mockData.js/mockFollowers"
import axios from "axios"

const rootUrl = "http://api.github.com"

const GithubContext = React.createContext()

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  const [requests, setRequests] = useState(0)
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState({ show: false, msg: "" })

  const searchGithubUser = async (user) => {
    toggleError()
    // console.log(user)
    setLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`)
    .catch((err) =>
      console.log(err)
    )
    console.log(response)

    if (response) {
      setGithubUser(response.data);
      const{login, followers_url} = response.data;
      // more logic here
      // repos
      // https://api.github.com/users/john-smilga/repos?per_page=100
      axios(`${rootUrl}/users/${login}/repos?per_page=100`).then(response => setRepos(response.data)
      )
      // follow
      // https://api.github.com/users/john-smilga/followers
        axios(`${followers_url}/?per_page=100`).then(response => setFollowers(response.data))
    } else {
      toggleError(true, "there is no user whit that username")
    }
    checkRequest();
    setLoading(false);
  }

  const checkRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data
        // remaining = 0
        // console.log(data)
        setRequests(remaining)
        if (remaining === 0) {
          toggleError(true, "sorry, you have exeeded your hourly rate limit")
        }
      })
      .catch((err) => console.log(err))
  }

  function toggleError(show = false, msg = "") {
    setError({ show, msg })
  }

  useEffect(() => {
    checkRequest()
    console.log("is loaded")
  }, [])

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        loading
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext }
