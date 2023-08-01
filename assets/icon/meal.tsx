import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MealIcon({size}: {size: number}) {
  return <MaterialCommunityIcons name="silverware-fork-knife" size={size} color="black" />
}