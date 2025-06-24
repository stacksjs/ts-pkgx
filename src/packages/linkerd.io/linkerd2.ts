/**
 * **linkerd2** - Package from pantry: linkerd.io/linkerd2
 *
 * @domain `linkerd.io/linkerd2`
 *
 * @install `launchpad install linkerd.io/linkerd2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.linkerdiolinkerd2
 * console.log(pkg.name)        // "linkerd2"
 * console.log(pkg.description) // "Package from pantry: linkerd.io/linkerd2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/linkerd-io/linkerd2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const linkerdiolinkerd2Package = {
  /**
   * The display name of this package.
   */
  name: 'linkerd2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'linkerd.io/linkerd2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: linkerd.io/linkerd2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install linkerd.io/linkerd2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +linkerd.io/linkerd2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install linkerd.io/linkerd2' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/linkerd.io/linkerd2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Linkerdiolinkerd2Package = typeof linkerdiolinkerd2Package
