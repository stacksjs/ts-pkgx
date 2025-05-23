export const projectdiscoveryionucleiPackage = {
  name: 'nuclei' as const,
  domain: 'projectdiscovery.io/nuclei' as const,
  description: 'Nuclei is a fast, customizable vulnerability scanner powered by the global security community and built on a simple YAML-based DSL, enabling collaboration to tackle trending vulnerabilities on the internet. It helps you find vulnerabilities in your applications, APIs, networks, DNS, and cloud configurations.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/projectdiscovery.io/nuclei/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) nuclei' as const,
  programs: [
    'nuclei',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '3.4.4',
    '3.4.3',
    '3.4.2',
  ] as const,
  fullPath: 'projectdiscovery.io/nuclei' as const,
  aliases: [
    'nuclei',
  ] as const,
}

export type ProjectdiscoveryionucleiPackage = typeof projectdiscoveryionucleiPackage
