import React from 'react';
import { Link } from 'react-router-dom';
import './Post-module.css';
import formatEllipsis from "../../helpers/formatEllipsis";
import formatNumbers from "../../helpers/formatNumbers";

function Post({ url, title, subredditName, subredditNamePrefixed, comments, ups }) {
    return (
        <article className="subreddit-article">

            {/*We gebruiken hier een <a> ipv <Link> omdat we naar een webpagina buiten onze applicatie linken */}
            <a href={url} className="subreddit-article-title-link">
                <h3>{formatEllipsis(title)}</h3>
            </a>

            <span>
        <p><Link to={`/subreddit/${subredditName}`}>{subredditNamePrefixed}</Link></p>
        <p>Comments {formatEllipsis(comments)} — Ups {formatNumbers(ups)}</p>
      </span>
        </article>
    );
}

export default Post;


