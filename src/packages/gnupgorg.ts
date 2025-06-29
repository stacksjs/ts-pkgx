/**
 * **gnupg.org** - Package from pantry: gnupg.org
 *
 * @domain `gnupg.org`
 *
 * @install `launchpad install gnupg.org`
 * @dependencies `zlib.net^1.1`, `sourceware.org/bzip2`, `gnupg.org/npth`, ... (+9 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnupgorg
 * console.log(pkg.name)        // "gnupg.org"
 * console.log(pkg.description) // "Package from pantry: gnupg.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnupgorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnupg.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnupg.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnupg.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnupg.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnupg.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1.1',
    'sourceware.org/bzip2',
    'gnupg.org/npth',
    'gnupg.org/libgpg-error',
    'gnupg.org/libksba',
    'gnupg.org/libassuan@2',
    'gnupg.org/libgcrypt',
    'gnupg.org/pinentry',
    'gnutls.org^3',
    'openldap.org^2',
    'gnu.org/readline^8',
    'sqlite.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnupgorgPackage = typeof gnupgorgPackage
