/**
 * **v2.5** - Package from pantry: gnupg.org/v2.5
 *
 * @domain `gnupg.org/v2.5`
 *
 * @install `launchpad install gnupg.org/v2.5`
 * @dependencies `zlib.net^1.1`, `sourceware.org/bzip2`, `gnupg.org/npth`, ... (+9 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnupgorgv25
 * console.log(pkg.name)        // "v2.5"
 * console.log(pkg.description) // "Package from pantry: gnupg.org/v2.5"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/v2-5.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnupgorgv25Package = {
  /**
   * The display name of this package.
   */
  name: 'v2.5' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/v2.5' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnupg.org/v2.5' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnupg.org/v2.5' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/v2.5 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnupg.org/v2.5' as const,
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
    'gnupg.org/libassuan@3',
    'gnupg.org/libgcrypt^1.11',
    'gnupg.org/pinentry',
    'gnutls.org^3',
    'openldap.org^2',
    'gnu.org/readline^8',
    'sqlite.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/v2.5/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Gnupgorgv25Package = typeof gnupgorgv25Package
