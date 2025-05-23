export const re2corgPackage = {
  name: 're2c' as const,
  domain: 're2c.org' as const,
  description: 'Lexer generator for C, C++, D, Go, Haskell, Java, JS, OCaml, Python, Rust, V and Zig.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/re2c.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) re2c' as const,
  programs: [
    're2c',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '4.2.0',
    '4.1.0',
    '4.0.2',
    '4.0.1',
    '4.0.0',
    '3.1.0',
    '3.0.0',
  ] as const,
  fullPath: 're2c.org' as const,
}

export type Re2corgPackage = typeof re2corgPackage
