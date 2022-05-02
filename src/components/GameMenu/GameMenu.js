import { Link } from "react-router-dom";

const game_menu = [
    { name: 'PLAY', link: '/play' },
    { name: 'LEADERBOARD', link: '/leaderboard' },
    { name: 'HOW TO PLAY', link: '/guide' },
];

export const GameMenu = () => {
    const renderGameMenu = () => {
        return game_menu.map((mb, index) => {

            const { name, link } = mb;

            return  (
                <Link to={link} key={index} className="menu-item">
                    <span className="item-text">{name}</span>
                </Link>
            );
        });

    };

    return <div className="game-menu">
        {renderGameMenu()}
    </div>
};