export const plantumlcomPackage = {
  name: 'plantuml' as const,
  domain: 'plantuml.com' as const,
  description: 'Generate diagrams from textual description' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/plantuml.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) plantuml' as const,
  programs: [
    'plantuml',
  ] as const,
  companions: [] as const,
  dependencies: [
    'graphviz.org',
    'openjdk.org',
  ] as const,
  versions: [
    '1.2025.2',
    '1.2025.1',
    '1.2025.0',
    '1.2024.8',
    '1.2024.7',
    '1.2024.6',
    '1.2024.5',
    '1.2024.4',
    '1.2024.3',
    '1.2024.2',
    '1.2024.1',
    '1.2024.0',
    '1.2023.13',
    '1.2023.12',
    '1.2023.11',
    '1.2023.10',
  ] as const,
  fullPath: 'plantuml.com' as const,
}

export type PlantumlcomPackage = typeof plantumlcomPackage
