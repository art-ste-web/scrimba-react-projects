import './TravelBlog.css';
import Header from './components/Header';
import Post from './components/Post';
import postData from './postData';

function TravelBlog() {
    const postList = postData.map(post=>{
        return(
            <Post
                key={post.id}
                {...post}
            />

        )
    })
    return(
        <main className="blog-container">
            <Header />
            <section className="posts-list">
                {postList}
            </section>
        </main>
    )
}

export default TravelBlog;