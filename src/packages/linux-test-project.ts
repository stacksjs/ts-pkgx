/**
 * **linux-test-project** - pkgx package
 *
 * @domain `github.com/linux-test-project`
 *
 * @install `pkgx github.com/linux-test-project`
 * @name `linux-test-project`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.linuxtestproject
 * // Or access via domain
 * const samePkg = pantry.githubcomlinuxtestproject
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "linux-test-project"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/linux-test-project.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const linuxtestprojectPackage = {
  /**
   * The display name of this package.
   */
  name: 'linux-test-project' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/linux-test-project' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/linux-test-project' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/linux-test-project' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/linux-test-project' as const,
}

export type LinuxtestprojectPackage = typeof linuxtestprojectPackage
