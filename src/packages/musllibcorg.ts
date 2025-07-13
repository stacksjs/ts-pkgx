/**
 * **musl.libc.org** - Package from pantry: musl.libc.org
 *
 * @domain `musl.libc.org`
 *
 * @install `launchpad install musl.libc.org`
 * @dependencies `llvm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.musllibcorg
 * console.log(pkg.name)        // "musl.libc.org"
 * console.log(pkg.description) // "Package from pantry: musl.libc.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/musl-libc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const musllibcorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'musl.libc.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'musl.libc.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: musl.libc.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install musl.libc.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +musl.libc.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install musl.libc.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'llvm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/musl.libc.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MusllibcorgPackage = typeof musllibcorgPackage
