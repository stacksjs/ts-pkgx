/**
 * **synth** - The Declarative Data Generator
 *
 * @domain `getsynth.com`
 * @programs `synth`
 * @version `0.6.9` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install synth`
 * @name `synth`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.synth
 * // Or access via domain
 * const samePkg = pantry.getsynthcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "synth"
 * console.log(pkg.description) // "The Declarative Data Generator"
 * console.log(pkg.programs)    // ["synth"]
 * console.log(pkg.versions[0]) // "0.6.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getsynth-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const synthPackage = {
  /**
   * The display name of this package.
   */
  name: 'synth' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getsynth.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Declarative Data Generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getsynth.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install synth' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'synth',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) synth -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install synth' as const,
}

export type SynthPackage = typeof synthPackage
