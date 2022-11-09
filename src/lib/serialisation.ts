export const serialise = (obj) => btoa(JSON.stringify(obj))
export const deserialise = <T = any>(str) => <T>JSON.parse(atob(str))