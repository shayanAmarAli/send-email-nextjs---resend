'use client'
import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

function Email(props: any) {
  const { url } = props;

  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
}

export default Email;
