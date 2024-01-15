import { atom } from 'jotai';
import ItemsManager from '../classes/ItemsManager';

export const ItemsManagerAtom = atom(new ItemsManager());