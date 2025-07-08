/**
 * **jansson** - Package from pantry: digip.org/jansson
 *
 * @domain `digip.org/jansson`
 *
 * @install `launchpad install digip.org/jansson`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.digiporgjansson
 * console.log(pkg.name)        // "jansson"
 * console.log(pkg.description) // "Package from pantry: digip.org/jansson"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/digip-org/jansson.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const digiporgjanssonPackage = {
  /**
   * The display name of this package.
   */
  name: 'jansson' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'digip.org/jansson' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: digip.org/jansson' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install digip.org/jansson' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +digip.org/jansson -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install digip.org/jansson' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/digip.org/jansson/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DigiporgjanssonPackage = typeof digiporgjanssonPackage
