import React from 'react'
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqContainer } from '../containers/faq';
import { FooterContainer } from '../containers/footer';
import { Feature, OptForm } from '../components';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited fimls, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder='Email Address' />
            <OptForm.Button>Get Started!</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready To Watch? Enter Your Email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  )
}
