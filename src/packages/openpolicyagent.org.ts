export const openpolicyagentorgPackage = {
  name: 'opa' as const,
  domain: 'openpolicyagent.org' as const,
  description: 'Open Policy Agent (OPA) is an open source, general-purpose policy engine.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openpolicyagent.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) opa' as const,
  programs: [
    'opa',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.4.2',
    '1.4.1',
    '1.4.0',
    '1.3.0',
    '1.2.0',
    '1.1.0',
    '1.0.1',
    '1.0.0',
    '0.70.0',
    '0.69.0',
    '0.68.0',
    '0.67.1',
    '0.67.0',
    '0.66.0',
    '0.65.0',
    '0.64.1',
    '0.64.0',
    '0.63.0',
    '0.62.1',
    '0.62.0',
    '0.61.0',
    '0.60.0',
    '0.59.0',
    '0.58.0',
  ] as const,
  fullPath: 'openpolicyagent.org' as const,
  aliases: [
    'opa',
  ] as const,
}

export type OpenpolicyagentorgPackage = typeof openpolicyagentorgPackage
