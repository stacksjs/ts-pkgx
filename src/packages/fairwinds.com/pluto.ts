/**
 * **pluto** - A cli tool to help discover deprecated apiVersions in Kubernetes
 *
 * @domain `fairwinds.com/pluto`
 * @programs `pluto`
 * @version `5.21.8` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pluto`
 * @name `pluto`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pluto
 * // Or access via domain
 * const samePkg = pantry.fairwindscompluto
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pluto"
 * console.log(pkg.description) // "A cli tool to help discover deprecated apiVersi..."
 * console.log(pkg.programs)    // ["pluto"]
 * console.log(pkg.versions[0]) // "5.21.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fairwinds-com/pluto.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plutoPackage = {
  /**
   * The display name of this package.
   */
  name: 'pluto' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fairwinds.com/pluto' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A cli tool to help discover deprecated apiVersions in Kubernetes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fairwinds.com/pluto/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/FairwindsOps/pluto' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pluto' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pluto',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.21.8',
    '5.21.7',
    '5.21.6',
    '5.21.4',
    '5.21.3',
    '5.21.2',
    '5.21.1',
    '5.21.0',
    '5.20.3',
    '5.20.2',
    '5.20.1',
    '5.20.0',
    '5.19.4',
    '5.19.3',
    '5.19.2',
    '5.19.1',
    '5.19.0',
    '5.18.6',
    '5.18.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pluto -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pluto' as const,
}

export type PlutoPackage = typeof plutoPackage
