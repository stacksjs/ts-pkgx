/**
 * **bpb** - Package from pantry: crates.io/bpb
 *
 * @domain `crates.io/bpb`
 *
 * @install `launchpad install crates.io/bpb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiobpb
 * console.log(pkg.name)        // "bpb"
 * console.log(pkg.description) // "Package from pantry: crates.io/bpb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/bpb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiobpbPackage = {
  /**
   * The display name of this package.
   */
  name: 'bpb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/bpb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/bpb' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/bpb' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/bpb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/bpb' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/bpb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiobpbPackage = typeof cratesiobpbPackage
