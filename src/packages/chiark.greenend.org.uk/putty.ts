/**
 * **putty** - Implementation of Telnet and SSH
 *
 * @domain `chiark.greenend.org.uk/putty`
 * @programs `pageant`, `plink`, `pscp`, `psftp`, `psusan`, ... (+1 more)
 * @version `0.83.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +chiark.greenend.org.uk/putty -- $SHELL -i`
 * @aliases `putty`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.putty
 * // Or access via domain
 * const samePkg = pantry.chiarkgreenendorgukputty
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "chiark.greenend.org.uk/putty"
 * console.log(pkg.description) // "Implementation of Telnet and SSH"
 * console.log(pkg.programs)    // ["pageant", "plink", ...]
 * console.log(pkg.versions[0]) // "0.83.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chiark-greenend-org-uk/putty.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const puttyPackage = {
  /**
   * The display name of this package.
   */
  name: 'chiark.greenend.org.uk/putty' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chiark.greenend.org.uk/putty' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Implementation of Telnet and SSH' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/chiark.greenend.org.uk/putty/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +chiark.greenend.org.uk/putty -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pageant',
    'plink',
    'pscp',
    'psftp',
    'psusan',
    'puttygen',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.83.0',
    '0.82.0',
    '0.81.0',
    '0.80.0',
    '0.79.0',
    '0.78.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'putty',
  ] as const,
  fullPath: 'chiark.greenend.org.uk/putty' as const,
}

export type PuttyPackage = typeof puttyPackage
