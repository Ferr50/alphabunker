import { createContext } from 'react';
import {ContextTransactionType} from '../modals';

export const TransactionContext = createContext<ContextTransactionType|null>(null);