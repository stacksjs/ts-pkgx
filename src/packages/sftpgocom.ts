/**
 * **sftpgo.com** - Package from pantry: sftpgo.com
 *
 * @domain `sftpgo.com`
 *
 * @install `launchpad install sftpgo.com`
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sftpgo.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sftpgo.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sftpgo.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sftpgo.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SftpgocomPackage = typeof sftpgocomPackage
