/**
 * **strace.io** - Package from pantry: strace.io
 *
 * @domain `strace.io`
 *
 * @install `launchpad install strace.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.straceio
 * console.log(pkg.name)        // "strace.io"
 * console.log(pkg.description) // "Package from pantry: strace.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/strace-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const straceioPackage = {
  /**
   * The display name of this package.
   */
  name: 'strace.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'strace.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: strace.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install strace.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +strace.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install strace.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/strace.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type StraceioPackage = typeof straceioPackage
