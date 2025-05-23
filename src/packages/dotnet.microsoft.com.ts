export const dotnetmicrosoftcomPackage = {
  name: 'dotnet' as const,
  domain: 'dotnet.microsoft.com' as const,
  description: 'Home of .NET\'s Virtual Monolithic Repository which includes all the code needed to build the .NET SDK from source' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dotnet.microsoft.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) dotnet' as const,
  programs: [
    'dotnet',
  ] as const,
  companions: [] as const,
  dependencies: [
    'linuxunicode.org^71openssl.org',
    'unicode.org^71',
    'openssl.org',
  ] as const,
  versions: [
    '9.0.202',
    '9.0.102',
    '9.0.100',
    '8.0.410',
    '8.0.405',
    '8.0.403',
    '8.0.402',
    '8.0.401',
    '8.0.313',
    '8.0.308',
    '8.0.303',
    '8.0.302',
    '8.0.301',
    '8.0.206',
    '8.0.204',
    '8.0.203',
    '8.0.112',
    '8.0.107',
    '8.0.106',
    '8.0.104',
    '8.0.101',
    '8.0.100',
    '7.0.404',
    '7.0.306',
    '7.0.120',
    '6.0.424',
    '6.0.423',
    '6.0.422',
    '6.0.417',
    '6.0.132',
    '6.0.131',
    '6.0.130',
  ] as const,
  fullPath: 'dotnet.microsoft.com' as const,
  aliases: [] as const,
}

export type DotnetmicrosoftcomPackage = typeof dotnetmicrosoftcomPackage
