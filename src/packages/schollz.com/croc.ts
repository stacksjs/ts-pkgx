/**
 * **croc** - Package from pantry: schollz.com/croc
 *
 * @domain `schollz.com/croc`
 *
 * @install `launchpad install schollz.com/croc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.schollzcomcroc
 * console.log(pkg.name)        // "croc"
 * console.log(pkg.description) // "Package from pantry: schollz.com/croc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/schollz-com/croc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const schollzcomcrocPackage = {
  /**
   * The display name of this package.
   */
  name: 'croc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'schollz.com/croc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: schollz.com/croc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install schollz.com/croc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +schollz.com/croc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install schollz.com/croc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/schollz.com/croc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SchollzcomcrocPackage = typeof schollzcomcrocPackage
