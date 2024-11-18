function Home(props) {
    return (
        <main>
            <h1>WikiVerse</h1>
            <ul>{props.pages.map((page) => (
                <li key={page.id}>
                    <button onClick={() => props.fetchArticle(page.slug)}>
                        {page.title}
                    </button>
                </li>
        ))}</ul>
    </main>
    )
}

export default Home