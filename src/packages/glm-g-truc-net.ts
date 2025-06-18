/**
 * **glm.g-truc.net** - pkgx package
 *
 * @domain `glm.g-truc.net`
 *
 * @install `pkgx glm.g-truc.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.glmgtrucnet
 * console.log(pkg.name)        // "glm.g-truc.net"
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
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx glm.g-truc.net' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'glm.g-truc.net' as const,
}

export type GlmgtrucnetPackage = typeof glmgtrucnetPackage
