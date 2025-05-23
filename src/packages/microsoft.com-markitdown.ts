export const microsoftcommarkitdownPackage = {
  name: 'markitdown' as const,
  domain: 'microsoft.com' as const,
  description: 'Package information for microsoft.com/markitdown' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'sh <(curl https://pkgx.sh) microsoft.com/markitdown' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'microsoft.com/markitdown' as const,
  aliases: [
    'markitdown',
  ] as const,
}

export type MicrosoftcommarkitdownPackage = typeof microsoftcommarkitdownPackage
