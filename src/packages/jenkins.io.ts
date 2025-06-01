/**
 * **jenkins-lts** - Crafters of fine Open Source products
 *
 * @domain `jenkins.io`
 *
 * @install `pkgx jenkins.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jenkinsio
 * console.log(pkg.name)        // "jenkins-lts"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jenkins-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jenkinsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'jenkins-lts' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/jenkins.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jenkins.io' as const,
  fullPath: 'jenkins.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jenkins.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JenkinsioPackage = typeof jenkinsioPackage
