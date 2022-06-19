import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../componenten/header/Header';
import logo from '../../assets/logo.png';
import Post from "../../componenten/post/Post";
import './Home-module.css';
import Loader from '../../componenten/inlog/Loader';
import ErrorMessage from '../../componenten/error/ErrorMessage';

function Home() {
    const [reddits, setReddits] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);

            try {
                const response = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(response);
                setReddits(response.data.data.children);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }

            toggleLoading(false);
        }

        fetchData();
    }, [])
    return (
        <>
            <Header>
                <img src={logo} alt="Reddit header logo"/>
                <h1>Reddit</h1>
            </Header>
            <main>
                <section className="outer-content-container hottest-posts">
                    <div className="inner-content-container">
                        <h2>Hottest posts</h2>
                        <h4>on Reddit right now</h4>
                        <div className="subreddit-article-container">
                            {reddits.map((reddit) => {
                                return (
                                    <Post
                                        key={reddit.data.id}
                                        url={reddit.data.url}
                                        title={reddit.data.title}
                                        subredditName={reddit.data.subreddit}
                                        subredditNamePrefixed={reddit.data.subreddit_name_prefixed}
                                        comments={reddit.data.num_comments}
                                        ups={reddit.data.ups}
                                    />
                                )
                            })}
                            {loading && <Loader/>}
                            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
export default Home