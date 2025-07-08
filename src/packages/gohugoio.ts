/**
 * **gohugo.io** - Package from pantry: gohugo.io
 *
 * @domain `gohugo.io`
 *
 * @install `launchpad install gohugo.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gohugoio
 * console.log(pkg.name)        // "gohugo.io"
 * console.log(pkg.description) // "Package from pantry: gohugo.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gohugo-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gohugoioPackage = {
  /**
   * The display name of this package.
   */
  name: 'gohugo.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gohugo.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gohugo.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gohugo.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gohugo.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gohugo.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gohugo.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GohugoioPackage = typeof gohugoioPackage
