export const vannaaiPackage = {
  name: 'Vanna' as const,
  domain: 'vanna.ai' as const,
  description: '🤖 Chat with your SQL database 📊. Accurate Text-to-SQL Generation via LLMs using RAG 🔄.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vanna.ai/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +vanna.ai -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'python.org~3.12',
    'linuxopenmp.llvm.org@17',
    'openmp.llvm.org@17',
  ] as const,
  versions: [
    '0.7.9',
    '0.7.8',
    '0.7.7',
    '0.7.6',
    '0.7.5',
    '0.7.4',
    '0.7.3',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.6',
    '0.6.5',
    '0.6.4',
    '0.6.3',
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.5',
    '0.5.4',
    '0.5.3',
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.3',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.4',
    '0.3.3',
    '0.3.2',
    '0.3.1',
    '0.3.0',
    '0.2.1',
    '0.2.0',
    '0.1.1',
    '0.0.38',
    '0.0.37',
    '0.0.36',
    '0.0.35',
    '0.0.34',
    '0.0.33',
    '0.0.32',
  ] as const,
  fullPath: 'vanna.ai' as const,
}

export type VannaaiPackage = typeof vannaaiPackage
