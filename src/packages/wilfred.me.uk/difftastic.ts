/**
 * **difftastic** - Package from pantry: wilfred.me.uk/difftastic
 *
 * @domain `wilfred.me.uk/difftastic`
 *
 * @install `launchpad install wilfred.me.uk/difftastic`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wilfredmeukdifftastic
 * console.log(pkg.name)        // "difftastic"
 * console.log(pkg.description) // "Package from pantry: wilfred.me.uk/difftastic"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wilfred-me-uk/difftastic.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wilfredmeukdifftasticPackage = {
  /**
   * The display name of this package.
   */
  name: 'difftastic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wilfred.me.uk/difftastic' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wilfred.me.uk/difftastic' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wilfred.me.uk/difftastic' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wilfred.me.uk/difftastic/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WilfredmeukdifftasticPackage = typeof wilfredmeukdifftasticPackage
