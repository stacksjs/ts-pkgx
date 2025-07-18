/**
 * **x.org/protocol** - pkgx package
 *
 * @domain `x.org/protocol`
 * @version `2024.1.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install x.org/protocol`
 * @dependencies `x.org/util-macros`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgprotocol
 * console.log(pkg.name)        // "x.org/protocol"
 * console.log(pkg.versions[0]) // "2024.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/protocol.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgprotocolPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/protocol' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/protocol' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/protocol/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/protocol' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/util-macros',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2024.1.0',
    '2023.2.0',
    '2023.1.0',
    '2022.2.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/protocol -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/protocol' as const,
}

export type XorgprotocolPackage = typeof xorgprotocolPackage
