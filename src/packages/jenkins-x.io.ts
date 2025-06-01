/**
 * **Jenkins** - Crafters of fine Open Source products
 *
 * @domain `jenkins-x.io`
 *
 * @install `pkgx jenkins-x.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jenkinsxio
 * console.log(pkg.name)        // "Jenkins"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jenkins-x-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jenkinsxioPackage = {
  /**
   * The display name of this package.
   */
  name: 'Jenkins' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/jenkins-x.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jenkins-x.io' as const,
  fullPath: 'jenkins-x.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jenkins-x.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JenkinsxioPackage = typeof jenkinsxioPackage
