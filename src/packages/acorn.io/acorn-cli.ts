/**
 * **acorn-cli** - pkgx package
 *
 * @domain `acorn.io/acorn-cli`
 *
 * @install `launchpad install acorn.io/acorn-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.acornioacorncli
 * console.log(pkg.name)        // "acorn-cli"
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
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install acorn.io/acorn-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +acorn.io/acorn-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install acorn.io/acorn-cli' as const,
}

export type AcornioacorncliPackage = typeof acornioacorncliPackage
