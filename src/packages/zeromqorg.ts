/**
 * **zeromq.org** - Package from pantry: zeromq.org
 *
 * @domain `zeromq.org`
 *
 * @install `launchpad install zeromq.org`
 * @dependencies `freedesktop.org/pkg-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zeromqorg
 * console.log(pkg.name)        // "zeromq.org"
 * console.log(pkg.description) // "Package from pantry: zeromq.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zeromq-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zeromqorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'zeromq.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zeromq.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: zeromq.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install zeromq.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zeromq.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ZeromqorgPackage = typeof zeromqorgPackage
