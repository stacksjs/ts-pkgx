/**
 * **opa** - Open Policy Agent (OPA) is an open source, general-purpose policy engine.
 *
 * @domain `openpolicyagent.org`
 * @programs `opa`
 * @version `1.5.1` (26 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install opa`
 * @aliases `opa`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.opa
 * // Or access via domain
 * const samePkg = pantry.openpolicyagentorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openpolicyagent.org"
 * console.log(pkg.description) // "Open Policy Agent (OPA) is an open source, gene..."
 * console.log(pkg.programs)    // ["opa"]
 * console.log(pkg.versions[0]) // "1.5.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openpolicyagent-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opaPackage = {
  /**
   * The display name of this package.
   */
  name: 'openpolicyagent.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openpolicyagent.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Open Policy Agent (OPA) is an open source, general-purpose policy engine.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openpolicyagent.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install opa' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'opa',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.1',
    '1.5.0',
    '1.4.2',
    '1.4.1',
    '1.4.0',
    '1.3.0',
    '1.2.0',
    '1.1.0',
    '1.0.1',
    '1.0.0',
    '0.70.0',
    '0.69.0',
    '0.68.0',
    '0.67.1',
    '0.67.0',
    '0.66.0',
    '0.65.0',
    '0.64.1',
    '0.64.0',
    '0.63.0',
    '0.62.1',
    '0.62.0',
    '0.61.0',
    '0.60.0',
    '0.59.0',
    '0.58.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'opa',
  ] as const,
}

export type OpaPackage = typeof opaPackage
