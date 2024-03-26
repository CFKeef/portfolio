import { HttpClientError } from '@effect/platform/Http/ClientError'
import * as internal from './internal/error'

export const ServiceErrorTypeId: unique symbol = internal.ServiceErrorTypeId

export type ServiceErrorTypeId = typeof ServiceErrorTypeId

export type ServiceError = ServerError

export declare namespace ServiceError {
  export interface Base {
    readonly [ServiceErrorTypeId]: typeof ServiceErrorTypeId
    readonly _tag: string
    readonly module: 'ReadingActivity' | 'ListeningActivity'
    readonly method: string
    readonly message: string
  }

  export type ProvidedFields = ServiceErrorTypeId | '_tag'
}

export type ServerErrorReason =  | 'TimedOut' | "InvalidXML" | HttpClientError['reason']

export interface ServerError extends ServiceError.Base {
  readonly _tag: 'ServerError'
  readonly reason: ServerErrorReason
}

export const ServerError: (props: Omit<ServerError, ServiceError.ProvidedFields>) => ServerError =
  internal.serverError
