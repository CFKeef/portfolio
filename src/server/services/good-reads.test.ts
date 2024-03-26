import { describe, expect, it, test } from 'vitest'
import * as Effect from 'effect/Effect'
import { Layer } from 'effect'
import * as ReadingActivity from './reading'

export const testLayer = <E>(layer: Layer.Layer<ReadingActivity.ReadingActivity, E>) => {
  const run = <E, A>(effect: Effect.Effect<A, E, ReadingActivity.ReadingActivity>) =>
    Effect.runPromise(Effect.provide(effect, layer))

    it("scrapes", () => run(Effect.gen(function* (_) {
      const svc = yield* _(ReadingActivity.ReadingActivity);

      const result = yield* _(svc.scrape())
      console.log(result);
      expect(result)
    })))
}

describe("test layer", () => testLayer(ReadingActivity.layerReadingActivity))
