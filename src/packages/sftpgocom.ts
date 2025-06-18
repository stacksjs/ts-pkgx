/**
 * **sftpgo.com** - Package from pantry: sftpgo.com
 *
 * @domain `sftpgo.com`
 *
 * @install `launchpad install sftpgo.com`
 * @dependencies `go.dev=1.22.2`, `gnu.org/coreutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sftpgocom
 * console.log(pkg.name)        // "sftpgo.com"
 * console.log(pkg.description) // "Package from pantry: sftpgo.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sftpgo-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sftpgocomPackage = {
  /**
   * The display name of this package.
   */
  name: 'sftpgo.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sftpgo.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sftpgo.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install sftpgo.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev=1.22.2',
    'gnu.org/coreutils',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sftpgo.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SftpgocomPackage = typeof sftpgocomPackage
