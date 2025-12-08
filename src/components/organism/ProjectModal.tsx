import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import type { ProjectType } from '../../data/ProjectList';
import ModalContainer from '../atom/container/ModalContainer';

interface Props {
  data: ProjectType;
  onClose: () => void;
}

interface FullPageApi {
  setAllowScrolling: (active: boolean) => void;
  setKeyboardScrolling: (active: boolean) => void;
}

interface CustomWindow extends Window {
  fullpage_api?: FullPageApi;
}

const ProjectModal = ({ data, onClose }: Props) => {
    useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const customWindow = window as unknown as CustomWindow;

    if (customWindow.fullpage_api) {
      customWindow.fullpage_api.setAllowScrolling(false);
      customWindow.fullpage_api.setKeyboardScrolling(false);
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      
      if (customWindow.fullpage_api) {
        customWindow.fullpage_api.setAllowScrolling(true);
        customWindow.fullpage_api.setKeyboardScrolling(true);
      }
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <InnerContainer>
            <CloseBtn onClick={onClose}>X</CloseBtn>

            <Header>
                <Title>{data.title}</Title>
                <SubText>{data.subTitle}</SubText>
                <DateText>{data.date}</DateText>
            </Header>

            <Section>
                <SectionTitle>소개</SectionTitle>
                <ContentText>{data.intro}</ContentText>
            </Section>

            <Section>
                <SectionTitle>기술 스택</SectionTitle>
                <ContentText>{data.techStack.join(', ')}</ContentText>
            </Section>

            <Section>
                <SectionTitle>구현 부분</SectionTitle>
                <FeatureContainer>
                    {data.features.map((feature, idx) => (
                      <FeatureItem key={idx}>
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <FeatureDescList>
                          {feature.desc.map((d, i) => (
                            <li key={i}>- {d}</li>
                          ))}
                        </FeatureDescList>
                      </FeatureItem>
                    ))}
                </FeatureContainer>
            </Section>

            <ImageArea>
                {data.images.map((imgSrc, idx) => (
                    <img key={idx} src={imgSrc} alt="" />
                ))}
            </ImageArea>
        </InnerContainer>

      </ModalContainer>
    </Overlay>
  );
};

export default ProjectModal;

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 95%;
    max-height: 612px;
    height: 70%;
    padding: 40px;
    overflow-y: auto;
    background: var(--green-300);
    border-radius: 4px;
`

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ff5f5f;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 30px;
`

const Title = styled.div`
    color: #fff;
    font-size: 35px;
    font-weight: 700;
    line-height: 140%;
`

const SubText = styled.div`
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    line-height: 140%;
`

const DateText = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    line-height: 140%;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-bottom: 30px;
`

const SectionTitle = styled.div`
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    line-height: 140%;
`

const ContentText = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    line-height: 140%;
`

const FeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const FeatureItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const FeatureTitle = styled.div`
    color: #fff;
    font-size: 22px; 
    font-weight: 700;
    line-height: 140%;
`;

const FeatureDescList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-left: 20px;
    & > li {
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        line-height: 150%;
    }
`;

const ImageArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    width: 100%;
    gap: 10px;
    margin-top: 20px;
    & > img {
        width: 100%;
        height: 100%;
    }
`