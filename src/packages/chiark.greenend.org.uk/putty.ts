/**
 * **chiark.greenend.org.uk/putty** - Implementation of Telnet and SSH
 *
 * @domain `chiark.greenend.org.uk/putty`
 * @programs `pageant`, `plink`, `pscp`, `psftp`, `psusan`, ... (+1 more)
 * @version `0.83.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install chiark.greenend.org.uk/putty`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.chiarkgreenendorgukputty
 * console.log(pkg.name)        // "chiark.greenend.org.uk/putty"
 * console.log(pkg.description) // "Implementation of Telnet and SSH"
 * console.log(pkg.programs)    // ["pageant", "plink", ...]
 * console.log(pkg.versions[0]) // "0.83.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chiark-greenend-org-uk/putty.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chiarkgreenendorgukputtyPackage = {
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install chiark.greenend.org.uk/putty' as const,
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +chiark.greenend.org.uk/putty -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install chiark.greenend.org.uk/putty' as const,
}

export type ChiarkgreenendorgukputtyPackage = typeof chiarkgreenendorgukputtyPackage
