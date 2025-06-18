/**
 * **oras** - OCI registry client - managing content like artifacts, images, packages
 *
 * @domain `oras.land`
 * @programs `oras`
 * @version `1.2.3` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install oras`
 * @aliases `oras`
 * @dependencies `go.dev^1.19`, `goreleaser.com`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.oras
 * // Or access via domain
 * const samePkg = pantry.orasland
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oras.land"
 * console.log(pkg.description) // "OCI registry client - managing content like art..."
 * console.log(pkg.programs)    // ["oras"]
 * console.log(pkg.versions[0]) // "1.2.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oras-land.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const orasPackage = {
  /**
   * The display name of this package.
   */
  name: 'oras.land' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oras.land' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'OCI registry client - managing content like artifacts, images, packages' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oras.land/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/oras-project/oras' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install oras' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'oras',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
    'goreleaser.com',
    'git-scm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.3',
    '1.2.2',
    '1.2.1',
    '1.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'oras',
  ] as const,
}

export type OrasPackage = typeof orasPackage
