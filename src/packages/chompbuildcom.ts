/**
 * **chompbuild.com** - Package from pantry: chompbuild.com
 *
 * @domain `chompbuild.com`
 *
 * @install `launchpad install chompbuild.com`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.chompbuildcom
 * console.log(pkg.name)        // "chompbuild.com"
 * console.log(pkg.description) // "Package from pantry: chompbuild.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chompbuild-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chompbuildcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'chompbuild.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chompbuild.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: chompbuild.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install chompbuild.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +chompbuild.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install chompbuild.com' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/chompbuild.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ChompbuildcomPackage = typeof chompbuildcomPackage
