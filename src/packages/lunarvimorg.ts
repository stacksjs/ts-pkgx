/**
 * **lunarvim.org** - Package from pantry: lunarvim.org
 *
 * @domain `lunarvim.org`
 *
 * @install `launchpad install lunarvim.org`
 * @dependencies `gnu.org/bash`, `crates.io/fd-find`, `pip.pypa.io`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lunarvimorg
 * console.log(pkg.name)        // "lunarvim.org"
 * console.log(pkg.description) // "Package from pantry: lunarvim.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lunarvim-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lunarvimorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'lunarvim.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lunarvim.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: lunarvim.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lunarvim.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lunarvim.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lunarvim.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/bash',
    'crates.io/fd-find',
    'pip.pypa.io',
    'python.org^3',
    'nodejs.org',
    'rust-lang.org/cargo',
    'neovim.io',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lunarvim.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LunarvimorgPackage = typeof lunarvimorgPackage
