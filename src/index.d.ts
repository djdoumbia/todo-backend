export interface HandlerService<Return, Parameters> {
  handle: (...params: Parameters) => Return;
}

export type UseCase<Return, Parameters> = HandlerService<
  Return,
  [...Parameters]
>;
