/**
 * **radicle.org** - Radicle CLI
 *
 * @domain `radicle.org`
 * @programs `rad`, `git-remote-rad`, `rad-account`, `rad-auth`, `rad-checkout`, ... (+21 more)
 * @version `0.6.1` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/radicle-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +radicle.org -- $SHELL -i`
 * @dependencies `openssl.org^1.1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.radicleorg
 * console.log(pkg.name)        // "radicle.org"
 * console.log(pkg.description) // "Radicle CLI"
 * console.log(pkg.programs)    // ["rad", "git-remote-rad", ...]
 * console.log(pkg.versions[0]) // "0.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/radicle-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const radicleorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'radicle.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'radicle.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Radicle CLI' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/radicle.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +radicle.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rad',
    'git-remote-rad',
    'rad-account',
    'rad-auth',
    'rad-checkout',
    'rad-clone',
    'rad-edit',
    'rad-ens',
    'rad-gov',
    'rad-help',
    'rad-init',
    'rad-inspect',
    'rad-issue',
    'rad-ls',
    'rad-merge',
    'rad-patch',
    'rad-path',
    'rad-pull',
    'rad-push',
    'rad-remote',
    'rad-reward',
    'rad-rm',
    'rad-self',
    'rad-sync',
    'rad-track',
    'rad-untrack',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'radicle.org' as const,
}

export type RadicleorgPackage = typeof radicleorgPackage
