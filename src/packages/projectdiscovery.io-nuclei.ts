/**
 * **projectdiscovery.io-nuclei** - Go home.
 *
 * @domain `projectdiscovery.io-nuclei`
 *
 * @install `pkgx projectdiscovery.io-nuclei`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.projectdiscoveryionuclei
 * console.log(pkg.name)        // "projectdiscovery.io-nuclei"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/projectdiscovery-io-nuclei.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projectdiscoveryionucleiPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/projectdiscovery.io-nuclei/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'projectdiscovery.io-nuclei' as const,
  fullPath: 'projectdiscovery.io-nuclei' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx projectdiscovery.io-nuclei' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ProjectdiscoveryionucleiPackage = typeof projectdiscoveryionucleiPackage
