import React, {useState, useEffect} from 'react';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
  return(
    <GithubContext.Provider value={'hello context'}>{children}</GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext}