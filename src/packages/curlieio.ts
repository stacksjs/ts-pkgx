/**
 * **curlie** - The power of curl, the ease of use of httpie.
 *
 * @domain `curlie.io`
 * @programs `curlie`
 * @version `1.8.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install curlie`
 * @aliases `curlie`
 * @dependencies `go.dev~1.24`, `goreleaser.com`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.curlie
 * // Or access via domain
 * const samePkg = pantry.curlieio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "curlie.io"
 * console.log(pkg.description) // "The power of curl, the ease of use of httpie."
 * console.log(pkg.programs)    // ["curlie"]
 * console.log(pkg.versions[0]) // "1.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/curlie-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const curliePackage = {
  /**
   * The display name of this package.
   */
  name: 'curlie.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'curlie.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The power of curl, the ease of use of httpie.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/curlie.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/rs/curlie' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install curlie' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'curlie',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.24',
    'goreleaser.com',
    'git-scm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.2',
    '1.7.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'curlie',
  ] as const,
}

export type CurliePackage = typeof curliePackage
