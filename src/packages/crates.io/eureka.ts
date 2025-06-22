/**
 * **eureka** - Package from pantry: crates.io/eureka
 *
 * @domain `crates.io/eureka`
 *
 * @install `launchpad install crates.io/eureka`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioeureka
 * console.log(pkg.name)        // "eureka"
 * console.log(pkg.description) // "Package from pantry: crates.io/eureka"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/eureka.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioeurekaPackage = {
  /**
   * The display name of this package.
   */
  name: 'eureka' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/eureka' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/eureka' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/eureka' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/eureka -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/eureka' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/eureka/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioeurekaPackage = typeof cratesioeurekaPackage
