// Add custom variables here:
const variables = {
  currentVersion: '1.1.12.9',
  unboundVersion: '5.0',
  dnssbPublicKeyFingerprint: 'BDCB 0C6D CA3D 6EE2 A16D  26CF 030C 5C53 5E55 A725'
}

module.exports = source =>
  Object.keys(variables).reduce((result, variable) =>
    result.replace(RegExp('\\${'+ variable +'}', 'g'), variables[variable])
  , source)
