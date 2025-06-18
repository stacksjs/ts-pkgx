/**
 * **glm.g-truc.net** - Package from pantry: glm.g-truc.net
 *
 * @domain `glm.g-truc.net`
 *
 * @install `launchpad install glm.g-truc.net`
 * @dependencies `cmake.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.glmgtrucnet
 * console.log(pkg.name)        // "glm.g-truc.net"
 * console.log(pkg.description) // "Package from pantry: glm.g-truc.net"
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
  description: 'Package from pantry: glm.g-truc.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install glm.g-truc.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/glm.g-truc.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GlmgtrucnetPackage = typeof glmgtrucnetPackage
