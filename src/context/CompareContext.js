import { createContext, useContext, useReducer } from 'react';

const CompareContext = createContext();

const compareReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_COMPARE':
      if (state.items.length >= 4) {
        return {
          ...state,
          error: 'You can compare up to 4 products at a time'
        };
      }
      if (state.items.find(item => item._id === action.payload._id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload],
        error: null
      };

    case 'REMOVE_FROM_COMPARE':
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload),
        error: null
      };

    case 'CLEAR_COMPARE':
      return {
        ...state,
        items: [],
        error: null
      };

    default:
      return state;
  }
};

export const CompareProvider = ({ children }) => {
  const [state, dispatch] = useReducer(compareReducer, {
    items: [],
    error: null
  });

  const addToCompare = (product) => {
    dispatch({ type: 'ADD_TO_COMPARE', payload: product });
  };

  const removeFromCompare = (productId) => {
    dispatch({ type: 'REMOVE_FROM_COMPARE', payload: productId });
  };

  const clearCompare = () => {
    dispatch({ type: 'CLEAR_COMPARE' });
  };

  return (
    <CompareContext.Provider
      value={{
        compareItems: state.items,
        compareError: state.error,
        addToCompare,
        removeFromCompare,
        clearCompare
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
