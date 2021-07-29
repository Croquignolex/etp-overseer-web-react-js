import React from 'react';

import '../assets/scss/error.scss';

// Component
function NotFoundPage() {
    // Render
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404"/>
                <h1>404</h1>
                <h2>Oops! Page introuvable</h2>
                <p>
                    Désolé mais la page que vous recherchez n'esiste pas,
                    a été rétirée, a changée de nom ou est
                    temporairement indisponible
                </p>
                <a href='/'>Retour</a>
            </div>
        </div>
    )
}

export default React.memo(NotFoundPage)