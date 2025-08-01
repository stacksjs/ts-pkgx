/**
 * **cosign** - Code signing and transparency for containers and binaries
 *
 * @domain `sigstore.dev/cosign`
 * @programs `cosign`
 * @version `2.5.3` (16 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cosign`
 * @name `cosign`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cosign
 * // Or access via domain
 * const samePkg = pantry.sigstoredevcosign
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cosign"
 * console.log(pkg.description) // "Code signing and transparency for containers an..."
 * console.log(pkg.programs)    // ["cosign"]
 * console.log(pkg.versions[0]) // "2.5.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sigstore-dev/cosign.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cosignPackage = {
  /**
   * The display name of this package.
   */
  name: 'cosign' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sigstore.dev/cosign' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Code signing and transparency for containers and binaries' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sigstore.dev/cosign/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/sigstore/cosign' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cosign' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cosign',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.3',
    '2.5.2',
    '2.5.1',
    '2.5.0',
    '2.4.3',
    '2.4.2',
    '2.4.1',
    '2.4.0',
    '2.3.0',
    '2.2.4',
    '2.2.3',
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '1.13.6',
    '1.13.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cosign -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cosign' as const,
}

export type CosignPackage = typeof cosignPackage
