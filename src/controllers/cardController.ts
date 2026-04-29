import isValidCardNumber from '../services/cardValidator';
import AppError from '../utils/appError';
import { Request, Response, NextFunction } from 'express';

export const validateCard = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { cardNumber } = req.body;
  const valid = isValidCardNumber(cardNumber);

  if (!cardNumber)
    return next(new AppError('Card number can not be empty', 400));
  if (!valid) return next(new AppError('Invalid card number', 400));

  res.status(200).json({
    status: 'success',
    valid,
  });
};
