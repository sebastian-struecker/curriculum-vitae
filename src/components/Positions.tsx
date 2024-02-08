import React from 'react';
import styles from './Positions.module.scss';
import {Position} from "../models/position";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Markdown from "react-markdown";

export type Props = {
    positions: Position[];
}

function Positions({positions}: Props) {
    return (<div className={styles.positions}>
        {positions.map(position => {
            return (<div key={position.company.name} className={styles.positions__position}>
                <div className={styles.positions__position__header}>
                    <div className={styles.positions__position__header__company}><a
                        className={styles.positions__position__header__company__link}
                        href={position.company.url}
                        target="_blank"
                        rel="noreferrer">{position.company.name}</a></div>
                    <div className={styles.positions__position__header__time}>
                        {position.time}
                    </div>
                </div>
                <div className={styles.positions__position__title}>
                    {position.title}
                </div>
                {position.description &&
                    <Markdown className={styles.positions__position__description} remarkPlugins={[remarkGfm]}
                              rehypePlugins={[rehypeRaw]}>{position.description}</Markdown>}
            </div>)

        })}
    </div>);
}

export default Positions;
