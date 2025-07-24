/**
 * **ty** - Package from pantry: astral.sh/ty
 *
 * @domain `astral.sh/ty`
 *
 * @install `launchpad install astral.sh/ty`
 * @dependencies `pkgx.sh@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.astralshty
 * console.log(pkg.name)        // "ty"
 * console.log(pkg.description) // "Package from pantry: astral.sh/ty"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/astral-sh/ty.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const astralshtyPackage = {
  /**
   * The display name of this package.
   */
  name: 'ty' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'astral.sh/ty' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: astral.sh/ty' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install astral.sh/ty' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +astral.sh/ty -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install astral.sh/ty' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/astral.sh/ty/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AstralshtyPackage = typeof astralshtyPackage
