import { useContext } from 'react';
import { tagColorsContext } from './tagColorsContext'

export const useTagColors = () => useContext(tagColorsContext)
