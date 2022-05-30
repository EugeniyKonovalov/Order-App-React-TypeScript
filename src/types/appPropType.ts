import { ReactNode } from 'react';
import userTypes from './userTypes';

type ChildrenPropTypes = {
  children?: ReactNode;
};

export default ChildrenPropTypes;


export type onShowCartType = {
  onShowCart: () => void;
};

export type onHideCartType = {
  onClose: () => void;
}

export type addToCartType = {
  onAddToCart: (value: number) => void
}

export type removeCartType = {
  onRemove?: () => void
}
export type addCartType = {
  onAdd?: () => void
}

export type onConfirmType = {
  onConfirm: (userData: userTypes) => void
}







