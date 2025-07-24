/**
 * **bytebase.com** - Package from pantry: bytebase.com
 *
 * @domain `bytebase.com`
 *
 * @install `launchpad install bytebase.com`
 * @dependencies `nodejs.org~24.1 # 24.4 has oom errors`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bytebasecom
 * console.log(pkg.name)        // "bytebase.com"
 * console.log(pkg.description) // "Package from pantry: bytebase.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bytebase-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bytebasecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'bytebase.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bytebase.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: bytebase.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bytebase.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +bytebase.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bytebase.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org~24.1 # 24.4 has oom errors',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bytebase.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BytebasecomPackage = typeof bytebasecomPackage
