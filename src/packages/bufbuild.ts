/**
 * **buf.build** - Package from pantry: buf.build
 *
 * @domain `buf.build`
 *
 * @install `launchpad install buf.build`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bufbuild
 * console.log(pkg.name)        // "buf.build"
 * console.log(pkg.description) // "Package from pantry: buf.build"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/buf-build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bufbuildPackage = {
  /**
   * The display name of this package.
   */
  name: 'buf.build' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'buf.build' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: buf.build' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install buf.build' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +buf.build -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install buf.build' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/buf.build/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BufbuildPackage = typeof bufbuildPackage
