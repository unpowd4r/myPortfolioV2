import React from 'react';
import styled from 'styled-components';
import playIcon from '../../../components/icons/services-icons/video-play.svg'
import editIcon from '../../../components/icons/services-icons/edit.svg'
import notebookIcon from '../../../components/icons/services-icons/notebook-2.svg'

const servicesInfo = [
    {id: 1, image: playIcon, title: 'Video Edit <br/> Service', link: 'View More'},
    {id: 2, image: editIcon, title: 'Ui/Ux <br/> Designer', link: 'View More'},
    {id: 3, image: notebookIcon, title: 'Website <br/> Developer', link: 'View More'},
]

export const Services = () => {
    return (
        <div>
            <Title>Services</Title>
            <ServiceCards>
                <ServiceCard>
                    {servicesInfo.map(item => (
                        <Block key={item.id}>
                            <img src={item.image} alt="icon" />
                            <h2>{item.title}</h2>
                            <p>{item.link}</p>
                        </Block>
                    ))}
                </ServiceCard>
            </ServiceCards>
        </div>
    );
};

const ServiceCards = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #57adf8;
    height: 100vh;

`
const ServiceCard = styled.div `
    display: flex;
    gap: 100px;
    
`

const Title = styled.h2 `
    text-align: center;
`
const Block = styled.div `
    text-align: center;

    width: 334px;
    height: 402px;

    background-color: #5c37ff;
`