import React from 'react';
import { Link } from 'react-router-dom';
import './Post-module.css';
import FormatNumbers from "../../helpers/FormatNumbers";
import TitleLength from "../../helpers/TitleLength";

function Post({ url, title, subredditName, subredditNamePrefixed, comments, ups }) {
    return (
        <article className="subreddit-article">

            {/*We gebruiken hier een <a> ipv <Link> omdat we naar een webpagina buiten onze applicatie linken */}
            <a href={url} className="subreddit-article-title-link">
                <h3>{TitleLength(title)}</h3>
            </a>

            <span>
        <p><Link to={`/subreddit/${subredditName}`}>{subredditNamePrefixed}</Link></p>
        <p>Comments {TitleLength(comments)} — Ups {FormatNumbers(ups)}</p>
      </span>
        </article>
    );
}

export default Post;


