/**
 * **ifacemaker** - Generate interfaces from structure methods.
 *
 * @domain `github.com/vburenin/ifacemaker`
 * @programs `ifacemaker`
 * @version `1.3.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ifacemaker`
 * @name `ifacemaker`
 * @companions `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ifacemaker
 * // Or access via domain
 * const samePkg = pantry.githubcomvbureninifacemaker
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ifacemaker"
 * console.log(pkg.description) // "Generate interfaces from structure methods."
 * console.log(pkg.programs)    // ["ifacemaker"]
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/vburenin/ifacemaker.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ifacemakerPackage = {
  /**
   * The display name of this package.
   */
  name: 'ifacemaker' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/vburenin/ifacemaker' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generate interfaces from structure methods.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/vburenin/ifacemaker/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ifacemaker' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ifacemaker',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'go.dev',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
    '1.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ifacemaker -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ifacemaker' as const,
}

export type IfacemakerPackage = typeof ifacemakerPackage
