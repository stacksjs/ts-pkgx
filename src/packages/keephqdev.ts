/**
 * **keephq** - pkgx package
 *
 * @domain `keephq.dev`
 * @version `0.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install keephq.dev`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.keephqdev
 * console.log(pkg.name)        // "keephq"
 * console.log(pkg.versions[0]) // "0.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/keephq-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const keephqdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'keephq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'keephq.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/keephq.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install keephq.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +keephq.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install keephq.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Runtime dependencies for this package.
   * These are required when running the package.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  buildDependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.0',
  ] as const,
  aliases: [] as const,
}

export type KeephqdevPackage = typeof keephqdevPackage
