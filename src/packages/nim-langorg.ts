/**
 * **nim-lang.org** - Package from pantry: nim-lang.org
 *
 * @domain `nim-lang.org`
 *
 * @install `launchpad install nim-lang.org`
 * @dependencies `gnu.org/gcc`, `pcre.org`, `openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nimlangorg
 * console.log(pkg.name)        // "nim-lang.org"
 * console.log(pkg.description) // "Package from pantry: nim-lang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nim-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nimlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nim-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nim-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nim-lang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nim-lang.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nim-lang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nim-lang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gcc',
    'pcre.org',
    'openssl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nim-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NimlangorgPackage = typeof nimlangorgPackage
