import React from 'react';

const Rodape = props => {
    return (
       <footer className='container-fluid text-center'>
            <a href='#myPage' title='To Top'>
                <span className='glyphicon glyphicon-chevron-up'></span>
            </a>
            <p>Site criado no curso de React.JS<a href='#' title='Visite o meu Portfólio'></a></p>
        </footer> 
    )
}

export default Rodape