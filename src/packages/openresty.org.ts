export const openrestyorgPackage = {
  name: 'openresty.org' as const,
  domain: 'openresty.org' as const,
  description: 'High Performance Web Platform Based on Nginx and LuaJIT' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openresty.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +openresty.org -- $SHELL -i' as const,
  programs: [
    'nginx-xml2pod',
    'opm',
    'resty',
    'restydoc',
    'restydoc-index',
  ] as const,
  companions: [] as const,
  dependencies: [
    'pcre.org@8',
    'openssl.org^1.1',
    'zlib.net^1.2',
    'perl.org',
  ] as const,
  versions: [
    '1.25.3.2',
  ] as const,
  fullPath: 'openresty.org' as const,
}

export type OpenrestyorgPackage = typeof openrestyorgPackage
