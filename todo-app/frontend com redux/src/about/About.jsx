import React from 'react'; 
import PageHeader from '../template/PageHeader';

class About extends React.Component {
    render() {
        return (
            <div>
                <PageHeader name="Sobre" small="Nós"></PageHeader>

                <h2>Nossa História</h2>
                <p>Lorem ipsum dolor sit amet...</p>
                <h2>Missão e Visão</h2>
                <p>Lorem ipsum dolor sit amet...</p>
                <h2>Imprensa</h2>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        );
    }
}
export default About;