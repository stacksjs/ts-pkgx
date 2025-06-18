/**
 * **werf.io** - Package from pantry: werf.io
 *
 * @domain `werf.io`
 *
 * @install `launchpad install werf.io`
 * @dependencies `github.com/kdave/btrfs-progs^6.7`, `sourceware.org/dm^2.3`, `go.dev^1.21`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.werfio
 * console.log(pkg.name)        // "werf.io"
 * console.log(pkg.description) // "Package from pantry: werf.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/werf-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const werfioPackage = {
  /**
   * The display name of this package.
   */
  name: 'werf.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'werf.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: werf.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install werf.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/kdave/btrfs-progs^6.7',
    'sourceware.org/dm^2.3',
    'go.dev^1.21',
    'gnu.org/gcc',
    'gnu.org/binutils',
    'git-scm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/werf.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WerfioPackage = typeof werfioPackage
