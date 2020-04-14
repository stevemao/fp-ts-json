import {stringify, parse} from './'
import * as E from 'fp-ts/lib/Either'
import * as assert from 'assert'

assert.deepStrictEqual(stringify({
    foo: "bar"
}), E.either.of(JSON.stringify({
    foo: "bar"
})))

const circularReference: any = {};
circularReference.myself = circularReference;

assert(E.isLeft(stringify(circularReference)))

assert.deepStrictEqual(parse(
    JSON.stringify({
        foo: "bar"
    })
), E.either.of({
    foo: "bar"
}))

assert(E.isLeft(parse("abc")))
