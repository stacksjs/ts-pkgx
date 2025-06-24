/**
 * **nuclei** - Nuclei is a fast, customizable vulnerability scanner powered by the global security community and built on a simple YAML-based DSL, enabling collaboration to tackle trending vulnerabilities on the internet. It helps you find vulnerabilities in your applications, APIs, networks, DNS, and cloud configurations.
 *
 * @domain `projectdiscovery.io/nuclei`
 * @programs `nuclei`
 * @version `3.4.5` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nuclei`
 * @name `nuclei`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nuclei
 * // Or access via domain
 * const samePkg = pantry.projectdiscoveryionuclei
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nuclei"
 * console.log(pkg.description) // "Nuclei is a fast, customizable vulnerability sc..."
 * console.log(pkg.programs)    // ["nuclei"]
 * console.log(pkg.versions[0]) // "3.4.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/projectdiscovery-io/nuclei.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nucleiPackage = {
  /**
   * The display name of this package.
   */
  name: 'nuclei' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'projectdiscovery.io/nuclei' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Nuclei is a fast, customizable vulnerability scanner powered by the global security community and built on a simple YAML-based DSL, enabling collaboration to tackle trending vulnerabilities on the internet. It helps you find vulnerabilities in your applications, APIs, networks, DNS, and cloud configurations.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/projectdiscovery.io/nuclei/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nuclei' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nuclei',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.5',
    '3.4.4',
    '3.4.3',
    '3.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) nuclei -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nuclei' as const,
}

export type NucleiPackage = typeof nucleiPackage
