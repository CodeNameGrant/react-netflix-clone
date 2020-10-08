import React from 'react'
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact Us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
      <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Ways To Watch</Footer.Link>
          <Footer.Link href="#">Corperate Information</Footer.Link>
          <Footer.Link href="#">Nexflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contacts Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Buy</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>

      <Footer.Break />
      <Footer.Text>Netflix United Kingdom</Footer.Text>
    </Footer>
  );
}