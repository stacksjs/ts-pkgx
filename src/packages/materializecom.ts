/**
 * **materialize.com** - Package from pantry: materialize.com
 *
 * @domain `materialize.com`
 *
 * @install `launchpad install materialize.com`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.materializecom
 * console.log(pkg.name)        // "materialize.com"
 * console.log(pkg.description) // "Package from pantry: materialize.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/materialize-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const materializecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'materialize.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'materialize.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: materialize.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install materialize.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +materialize.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install materialize.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/materialize.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MaterializecomPackage = typeof materializecomPackage
