/**
 * **gitsign** - Keyless Git signing using Sigstore
 *
 * @domain `sigstore.dev/gitsign`
 * @programs `gitsign`, `gitsign-credential-cache`
 * @version `0.13.0` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +sigstore.dev/gitsign -- $SHELL -i`
 * @name `gitsign`
 * @dependencies `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitsign
 * // Or access via domain
 * const samePkg = pantry.sigstoredevgitsign
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gitsign"
 * console.log(pkg.description) // "Keyless Git signing using Sigstore"
 * console.log(pkg.programs)    // ["gitsign", "gitsign-credential-cache"]
 * console.log(pkg.versions[0]) // "0.13.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sigstore-dev/gitsign.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitsignPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitsign' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sigstore.dev/gitsign' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Keyless Git signing using Sigstore' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sigstore.dev/gitsign/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +sigstore.dev/gitsign -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gitsign',
    'gitsign-credential-cache',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.0',
    '0.12.0',
    '0.11.0',
    '0.10.2',
    '0.10.1',
    '0.10.0',
    '0.9.0',
    '0.8.1',
    '0.8.0',
    '0.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GitsignPackage = typeof gitsignPackage
