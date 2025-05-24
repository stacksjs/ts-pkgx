export const jbig2deccomPackage = {
  name: 'jbig2dec' as const,
  domain: 'jbig2dec.com' as const,
  description: 'This is a mirror: the canonical repo is: git.ghostscript.com/jbig2dec.git. This repo does not host releases, they are here: https://github.com/ArtifexSoftware/jbig2dec/tags' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jbig2dec.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) jbig2dec' as const,
  programs: [
    'jbig2dec',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.19.0',
  ] as const,
  fullPath: 'jbig2dec.com' as const,
  aliases: [] as const,
}

export type Jbig2deccomPackage = typeof jbig2deccomPackage
