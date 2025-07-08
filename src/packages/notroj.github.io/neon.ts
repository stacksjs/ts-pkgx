/**
 * **neon** - Package from pantry: notroj.github.io/neon
 *
 * @domain `notroj.github.io/neon`
 *
 * @install `launchpad install notroj.github.io/neon`
 * @dependencies `openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.notrojgithubioneon
 * console.log(pkg.name)        // "neon"
 * console.log(pkg.description) // "Package from pantry: notroj.github.io/neon"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/notroj-github-io/neon.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const notrojgithubioneonPackage = {
  /**
   * The display name of this package.
   */
  name: 'neon' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'notroj.github.io/neon' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: notroj.github.io/neon' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install notroj.github.io/neon' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +notroj.github.io/neon -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install notroj.github.io/neon' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/notroj.github.io/neon/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NotrojgithubioneonPackage = typeof notrojgithubioneonPackage
