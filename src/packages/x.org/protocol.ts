/**
 * **protocol** - pkgx package
 *
 * @domain `x.org/protocol`
 * @version `2024.1.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/protocol -- $SHELL -i`
 * @aliases `protocol`
 * @dependencies `x.org/util-macros`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.protocol
 * // Or access via domain
 * const samePkg = pantry.xorgprotocol
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/protocol"
 * console.log(pkg.versions[0]) // "2024.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/protocol.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const protocolPackage = {
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/protocol -- $SHELL -i' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'protocol',
  ] as const,
  fullPath: 'x.org/protocol' as const,
}

export type ProtocolPackage = typeof protocolPackage
