function Page(props) {
    return (
        <>
          <h1>{props.currentPage.title}</h1>
          <p><b>Author:</b> {props.currentPage.author.name}</p>
          <p><b>Published:</b> {new Date(props.currentPage.createdAt).toLocaleDateString()}</p>
          <p>{props.currentPage.content}</p>
          <p><b>Tags:</b></p>
          <ul>{props.currentPage.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}</ul>
          <button onClick={props.backClick}>Back to Wiki List</button>
        </>
      )
}

export default Page