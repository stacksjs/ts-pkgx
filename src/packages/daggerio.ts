/**
 * **dagger.io** - Package from pantry: dagger.io
 *
 * @domain `dagger.io`
 *
 * @install `launchpad install dagger.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.daggerio
 * console.log(pkg.name)        // "dagger.io"
 * console.log(pkg.description) // "Package from pantry: dagger.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dagger-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const daggerioPackage = {
  /**
   * The display name of this package.
   */
  name: 'dagger.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dagger.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dagger.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dagger.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dagger.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dagger.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dagger.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DaggerioPackage = typeof daggerioPackage
