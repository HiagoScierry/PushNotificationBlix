import React from 'react';
import { Button, Container, Image, Text } from './styles';

import logoBlix from '../../assets/images/Logoborboleta.png'

const Home = () => {



    return (
        <Container >
            <Button onPress={() => alert('Teste UI')}>
                <Image source={logoBlix} />
            </Button>
            <Text>Clique e veja a magia acontecer !</Text>
        </Container>
    );
}

export default Home;