import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';

interface AnimatedTextProps {
  text: string;
}

function AnimatedText({ text }: AnimatedTextProps) {
  const [prevText, setPrevText] = useState('');
  const [prevAnimation, setPrevAnimation] = useState('animate__animated animate__fadeOut');
  const [currAnimation, setCurrAnimation] = useState('animate__animated animate__fadeIn');

  useEffect(() => {
    setPrevAnimation('animate__animated animate__fadeOut');
    setCurrAnimation('animate__animated animate__fadeIn');

    const timeout = setTimeout(() => {
      setPrevAnimation("animate__animated animate__fadeIn");
      setCurrAnimation("animate__animated animate__fadeOut");
      setPrevText(text);
    }, 500);

    return () => clearTimeout(timeout);
  }, [text])

  return (
    <Container>
      <Text className={prevAnimation}>{prevText}</Text>
      <Text className={currAnimation}>{text}</Text>
    </Container >
  )
}

const Container = styled.div`
  position: relative;
`

const Text = styled.p`
  position: absolute;
  margin: 0;
`

export default AnimatedText