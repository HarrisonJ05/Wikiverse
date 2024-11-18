import React, { useEffect, useState } from 'react'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

import Home from './Home.js'
import Page from './Page.js'

export const App = () => {
  const [pages, setPages] = useState([])
  const [currentPage, setCurrentPage] = useState(null);

  async function fetchPages () {
    try {
      const response = await fetch(`${apiURL}/wiki`)
      const pagesData = await response.json()
      setPages(pagesData)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  async function fetchArticle(slug) {
    const response = await fetch(`${apiURL}/wiki/${slug}`)
    const articleData = await response.json()
    setCurrentPage(articleData)
  }

  async function backClick() {
    await fetchPages()
    setCurrentPage(null)
  }

  useEffect(() => {

    fetchPages()
  }, [])

  if (!currentPage) {
    return <Home pages={pages} fetchArticle={fetchArticle} />
  }

  return <Page currentPage={currentPage} backClick={backClick} />
}
