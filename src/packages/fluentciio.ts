/**
 * **fluentci.io** - Package from pantry: fluentci.io
 *
 * @domain `fluentci.io`
 *
 * @install `launchpad install fluentci.io`
 * @dependencies `dagger.io^0.10`, `deno.land^1.42`, `charm.sh/glow^1.5.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fluentciio
 * console.log(pkg.name)        // "fluentci.io"
 * console.log(pkg.description) // "Package from pantry: fluentci.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fluentci-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fluentciioPackage = {
  /**
   * The display name of this package.
   */
  name: 'fluentci.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fluentci.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fluentci.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fluentci.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fluentci.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fluentci.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'dagger.io^0.10',
    'deno.land^1.42',
    'charm.sh/glow^1.5.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fluentci.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FluentciioPackage = typeof fluentciioPackage
