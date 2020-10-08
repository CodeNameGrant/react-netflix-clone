import React from 'react'
import { Accordion, OptForm } from '../components';
import faqData from '../fixtures/faq.json';

export function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {
        faqData.map(item => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))
      }
      
      <OptForm>
        <OptForm.Break />
        <OptForm.Text>Ready To Watch? Enter Your Email to create or restart your membership.</OptForm.Text>
        <OptForm.Input placeholder='Email Address' />
        <OptForm.Button>Get Started!</OptForm.Button>
      </OptForm>
    </Accordion>
  )
}
