/**
 * **md5sha1sum** - Package from pantry: microbrew.org/md5sha1sum
 *
 * @domain `microbrew.org/md5sha1sum`
 *
 * @install `launchpad install microbrew.org/md5sha1sum`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microbreworgmd5sha1sum
 * console.log(pkg.name)        // "md5sha1sum"
 * console.log(pkg.description) // "Package from pantry: microbrew.org/md5sha1sum"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microbrew-org/md5sha1sum.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microbreworgmd5sha1sumPackage = {
  /**
   * The display name of this package.
   */
  name: 'md5sha1sum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microbrew.org/md5sha1sum' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: microbrew.org/md5sha1sum' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install microbrew.org/md5sha1sum' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +microbrew.org/md5sha1sum -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install microbrew.org/md5sha1sum' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microbrew.org/md5sha1sum/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Microbreworgmd5sha1sumPackage = typeof microbreworgmd5sha1sumPackage
