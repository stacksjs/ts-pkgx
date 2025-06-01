/**
 * **glm.g-truc.net** - OpenGL Mathematics (GLM)
 *
 * @domain `glm.g-truc.net`
 * @version `1.0.1` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/glm-g-truc-net.md
 *
 * @install `sh <(curl https://pkgx.sh) +glm.g-truc.net -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.glmgtrucnet
 * console.log(pkg.name)        // "glm.g-truc.net"
 * console.log(pkg.description) // "OpenGL Mathematics (GLM)"
 * console.log(pkg.versions[0]) // "1.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/glm-g-truc-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glmgtrucnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'glm.g-truc.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'glm.g-truc.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'OpenGL Mathematics (GLM)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/glm.g-truc.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +glm.g-truc.net -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.1',
    '1.0.0',
    '0.9.9.8',
  ] as const,
  fullPath: 'glm.g-truc.net' as const,
  aliases: [] as const,
}

export type GlmgtrucnetPackage = typeof glmgtrucnetPackage
