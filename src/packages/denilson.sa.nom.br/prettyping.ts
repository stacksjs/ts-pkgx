/**
 * **prettyping** - Package from pantry: denilson.sa.nom.br/prettyping
 *
 * @domain `denilson.sa.nom.br/prettyping`
 *
 * @install `launchpad install denilson.sa.nom.br/prettyping`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.denilsonsanombrprettyping
 * console.log(pkg.name)        // "prettyping"
 * console.log(pkg.description) // "Package from pantry: denilson.sa.nom.br/prettyping"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/denilson-sa-nom-br/prettyping.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const denilsonsanombrprettypingPackage = {
  /**
   * The display name of this package.
   */
  name: 'prettyping' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'denilson.sa.nom.br/prettyping' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: denilson.sa.nom.br/prettyping' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install denilson.sa.nom.br/prettyping' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +denilson.sa.nom.br/prettyping -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install denilson.sa.nom.br/prettyping' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/denilson.sa.nom.br/prettyping/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DenilsonsanombrprettypingPackage = typeof denilsonsanombrprettypingPackage
