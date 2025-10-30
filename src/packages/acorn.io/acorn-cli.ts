/**
 * **acorn-cli** - pkgx package
 *
 * @domain `acorn.io/acorn-cli`
 * @version `0.10.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install acorn.io/acorn-cli`
 * @buildDependencies `go.dev` - required only when building from source
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.acornioacorncli
 * console.log(pkg.name)        // "acorn-cli"
 * console.log(pkg.versions[0]) // "0.10.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/acorn-io/acorn-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const acornioacorncliPackage = {
  /**
   * The display name of this package.
   */
  name: 'acorn-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'acorn.io/acorn-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/acorn.io/acorn-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install acorn.io/acorn-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +acorn.io/acorn-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install acorn.io/acorn-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Build dependencies for this package.
   * These are only required when building the package from source.
   */
  buildDependencies: [
    'go.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.1',
    '0.10.0',
    '0.9.2',
  ] as const,
  aliases: [] as const,
}

export type AcornioacorncliPackage = typeof acornioacorncliPackage
