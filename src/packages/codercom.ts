/**
 * **coder** - Tool for provisioning self-hosted development environments with Terraform
 *
 * @domain `coder.com`
 * @programs `coder`
 * @version `2.24.2` (74 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install coder`
 * @name `coder`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.coder
 * // Or access via domain
 * const samePkg = pantry.codercom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "coder"
 * console.log(pkg.description) // "Tool for provisioning self-hosted development e..."
 * console.log(pkg.programs)    // ["coder"]
 * console.log(pkg.versions[0]) // "2.24.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/coder-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const coderPackage = {
  /**
   * The display name of this package.
   */
  name: 'coder' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'coder.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool for provisioning self-hosted development environments with Terraform' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/coder.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/coder/coder' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install coder' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'coder',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.24.2',
    '2.24.1',
    '2.24.0',
    '2.23.4',
    '2.23.3',
    '2.23.1',
    '2.23.0',
    '2.22.1',
    '2.22.0',
    '2.21.3',
    '2.21.0',
    '2.20.3',
    '2.20.2',
    '2.20.1',
    '2.20.0',
    '2.19.1',
    '2.19.0',
    '2.18.5',
    '2.18.4',
    '2.18.3',
    '2.18.2',
    '2.18.1',
    '2.18.0',
    '2.17.3',
    '2.17.2',
    '2.17.0',
    '2.16.1',
    '2.16.0',
    '2.15.4',
    '2.15.3',
    '2.15.2',
    '2.15.1',
    '2.15.0',
    '2.14.4',
    '2.14.3',
    '2.14.2',
    '2.14.1',
    '2.14.0',
    '2.13.5',
    '2.13.4',
    '2.13.3',
    '2.13.2',
    '2.13.1',
    '2.13.0',
    '2.12.6',
    '2.12.5',
    '2.12.4',
    '2.12.3',
    '2.12.2',
    '2.12.1',
    '2.12.0',
    '2.11.4',
    '2.11.3',
    '2.11.2',
    '2.11.1',
    '2.11.0',
    '2.10.3',
    '2.10.2',
    '2.10.1',
    '2.10.0',
    '2.9.4',
    '2.9.3',
    '2.9.2',
    '2.9.1',
    '2.9.0',
    '2.8.5',
    '2.8.4',
    '2.8.3',
    '2.8.2',
    '2.8.1',
    '2.8.0',
    '2.7.3',
    '2.7.2',
    '2.6.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) coder -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install coder' as const,
}

export type CoderPackage = typeof coderPackage
