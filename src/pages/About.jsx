import React from 'react';

const About = () => {
    return (
        <div style={{color: '#fff'}}>
            <h1>Описание приложения</h1>
            <p>
                Это приложение написано на react. В приложении загружаются посты через API. Посты можно создавать,
                удалять, сортировать и пользоваться поиском. Реализована пагинация и роутинг.
            </p>
        </div>
    );
};

export default About;