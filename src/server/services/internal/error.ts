import type * as Error from '../error'
import * as Data from 'effect/Data'

export const ServiceErrorTypeId: Error.ServiceErrorTypeId = Symbol.for(
  '@services/Error/ServiceErrorTypeId',
) as Error.ServiceErrorTypeId

const make =
  <A extends Error.ServiceError>(tag: A['_tag']) =>
  (props: Omit<A, Error.ServiceError.ProvidedFields>): A =>
    Data.struct({
      [ServiceErrorTypeId]: ServiceErrorTypeId,
      _tag: tag,
      ...props,
    } as A)

export const serverError = make<Error.ServerError>('ServerError')
