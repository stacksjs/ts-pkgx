export const glmgtrucnetPackage = {
  name: 'glm.g-truc.net' as const,
  domain: 'glm.g-truc.net' as const,
  description: 'OpenGL Mathematics (GLM)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/glm.g-truc.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +glm.g-truc.net -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.0.1',
    '1.0.0',
    '0.9.9.8',
  ] as const,
  fullPath: 'glm.g-truc.net' as const,
}

export type GlmgtrucnetPackage = typeof glmgtrucnetPackage
