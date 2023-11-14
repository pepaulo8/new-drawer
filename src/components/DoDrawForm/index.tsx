'use client';
import { Center, styled } from '@/styled-system/jsx';
import { DrawItem } from '@/types';
import Image from 'next/image';
import React from 'react';

type Props = {
  onDraw: (result: DrawItem[]) => void;
};

const textToItems = (text: string) => {
  return text.split('\n').filter((item) => item);
};

const draw = (items: string[], participants: string[]) => {
  let participantsList = [...participants];
  const itemsLength = items.length;
  const result: DrawItem[] = [];

  for (let i = 0; i < itemsLength; i++) {
    const participantsLength = participantsList.length;
    const item = items[i];
    const participantIndex = Math.floor(Math.random() * participantsLength);
    const winner = participantsList[participantIndex];

    participantsList = participantsList.filter(
      (_, index) => index !== participantIndex
    );

    result.push({ item, winner });
  }

  return result;
};

const DoDrawForm: React.FC<Props> = ({ onDraw }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const items = textToItems(formData.get('items') as string);
    const participants = textToItems(formData.get('participants') as string);

    const result = draw(items, participants);

    onDraw(result);
  };

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#0E1F4A' }}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknYhUVZbMBQV0v6zaJCyg5eKUI3tU6oO6RhtoV5kb&s" alt="Logo da empresa Witto" style={{ marginTop: 15 }} />

    </div>

    <Center bg="primary" p="4" minH='100vh'>
      <styled.form
        onSubmit={handleSubmit}
        maxW="800px"
        w="100%"
        h="10%"
        mx="auto"
        border="1px solid white"
        p="4"
        marginTop="-20"
        borderRadius="10px"
        bg="#f1f1f1"
        display="block"
      >
        <styled.label>Itens para sortear:</styled.label>
        <styled.textarea
          name="items"
          mt="2"
          p="2"
          w="100%"
          borderRadius="10px"
          rows={10}
        />

        <styled.label>Lista de participantes</styled.label>
        <styled.textarea
          name="participants"
          mt="2"
          p="2"
          w="100%"
          borderRadius="10px"
          rows={10}
        />

        <styled.button
          type="submit"
          mt="4"
          p="2"
          w="100%"
          borderRadius="10px"
          bg="primary"
          color="white"
          fontWeight="bold"
          cursor="pointer"
          _hover={{ bg: 'primary.900' }}
        >
          Sortear
        </styled.button>
      </styled.form>
    </Center>
    </>
  );
};

export default DoDrawForm;
