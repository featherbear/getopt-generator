export const serialise = (obj) => JSON.stringify(obj)
export const deserialise = <T = any>(str) => <T>JSON.parse(str)