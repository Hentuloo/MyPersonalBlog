import React from 'react';
import { storiesOf } from '@storybook/react';
import LevelsElement from './LevelsElement';

const data = {
  title: 'Chentek w bieganiu',
  inspiration:
    'Inspiracja:Bieganie sam sobie.A dystans maratonu to chyba K.Gonciarz [sdfsdf dsf dsa ](http://chentekwdzialaniu.pl/pol-maraton-plock)',
  levelTitle: [
    'Poziom1: Przebiegłem 5km',
    'Poziom2: Przebiegłem 1/2 maratonu [MAMY TO](http://chentekwdzialaniu.pl/pol-maraton-plock)',
    'Poziom3: Przebiegłem maraton NY',
  ],
  done: [true, true],
  data: ['2019-05-15T00:00:00.000Z', '2019-05-07T00:00:00.000Z', '2019-05-31T00:00:00.000Z'],
};

storiesOf('molecules', module).add('Levels', () => <LevelsElement data={data} />);
