/**
 * **p11-kit** - Package from pantry: freedesktop.org/p11-kit
 *
 * @domain `freedesktop.org/p11-kit`
 *
 * @install `launchpad install freedesktop.org/p11-kit`
 * @dependencies `sourceware.org/libffi^3`, `curl.se/ca-certs`, `gnu.org/libtasn1^4`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgp11kit
 * console.log(pkg.name)        // "p11-kit"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/p11-kit"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/p11-kit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgp11kitPackage = {
  /**
   * The display name of this package.
   */
  name: 'p11-kit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/p11-kit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/p11-kit' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/p11-kit' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/p11-kit -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/p11-kit' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/libffi^3',
    'curl.se/ca-certs',
    'gnu.org/libtasn1^4',
    'gnu.org/gettext',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/p11-kit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Freedesktoporgp11kitPackage = typeof freedesktoporgp11kitPackage
