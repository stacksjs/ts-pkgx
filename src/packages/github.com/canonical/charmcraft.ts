/**
 * **charmcraft** - Collaborate, build and publish charmed operators for Kubernetes, Linux and Windows.
 *
 * @domain `github.com/canonical/charmcraft`
 * @programs `charmcraft`
 * @version `3.5.1` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) charmcraft`
 * @name `charmcraft`
 * @aliases `canonical/charmcraft`
 * @dependencies `pkgx.sh^1`, `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.charmcraft
 * // Or access via domain
 * const samePkg = pantry.githubcomcanonicalcharmcraft
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "charmcraft"
 * console.log(pkg.description) // "Collaborate, build and publish charmed operator..."
 * console.log(pkg.programs)    // ["charmcraft"]
 * console.log(pkg.versions[0]) // "3.5.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/canonical/charmcraft.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charmcraftPackage = {
  /**
   * The display name of this package.
   */
  name: 'charmcraft' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/canonical/charmcraft' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Collaborate, build and publish charmed operators for Kubernetes, Linux and Windows.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/canonical/charmcraft/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) charmcraft' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'charmcraft',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'libgit2.org~1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.1',
    '3.5.0',
    '3.4.3',
    '3.3.3',
    '3.3.2',
    '3.3.0',
    '3.2.2',
    '3.2.1',
    '2.7.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'canonical/charmcraft',
  ] as const,
  fullPath: 'github.com/canonical/charmcraft' as const,
}

export type CharmcraftPackage = typeof charmcraftPackage
