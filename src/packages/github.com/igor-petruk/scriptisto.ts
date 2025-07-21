/**
 * **scriptisto** - Package from pantry: github.com/igor-petruk/scriptisto
 *
 * @domain `github.com/igor-petruk/scriptisto`
 *
 * @install `launchpad install github.com/igor-petruk/scriptisto`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomigorpetrukscriptisto
 * console.log(pkg.name)        // "scriptisto"
 * console.log(pkg.description) // "Package from pantry: github.com/igor-petruk/scr..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/igor-petruk/scriptisto.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomigorpetrukscriptistoPackage = {
  /**
   * The display name of this package.
   */
  name: 'scriptisto' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/igor-petruk/scriptisto' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/igor-petruk/scriptisto' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/igor-petruk/scriptisto' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/igor-petruk/scriptisto -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/igor-petruk/scriptisto' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/igor-petruk/scriptisto/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomigorpetrukscriptistoPackage = typeof githubcomigorpetrukscriptistoPackage
