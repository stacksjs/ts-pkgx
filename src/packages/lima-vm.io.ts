/**
 * **lima-vm.io** - Linux virtual machines, with a focus on running containers
 *
 * @domain `lima-vm.io`
 * @programs `apptainer.lima`, `docker.lima`, `kubectl.lima`, `lima`, `limactl`, ... (+2 more)
 * @version `1.1.1` (25 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/lima-vm-io.md
 *
 * @install `sh <(curl https://pkgx.sh) +lima-vm.io -- $SHELL -i`
 * @dependencies `qemu.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.limavmio
 * console.log(pkg.name)        // "lima-vm.io"
 * console.log(pkg.description) // "Linux virtual machines, with a focus on running..."
 * console.log(pkg.programs)    // ["apptainer.lima", "docker.lima", ...]
 * console.log(pkg.versions[0]) // "1.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lima-vm-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const limavmioPackage = {
  /**
   * The display name of this package.
   */
  name: 'lima-vm.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lima-vm.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Linux virtual machines, with a focus on running containers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lima-vm.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +lima-vm.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'apptainer.lima',
    'docker.lima',
    'kubectl.lima',
    'lima',
    'limactl',
    'nerdctl.lima',
    'podman.lima',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'qemu.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.1',
    '1.1.0',
    '1.0.7',
    '1.0.6',
    '1.0.5',
    '1.0.4',
    '1.0.3',
    '1.0.2',
    '1.0.1',
    '1.0.0',
    '0.23.2',
    '0.23.1',
    '0.23.0',
    '0.22.0',
    '0.21.0',
    '0.20.2',
    '0.20.1',
    '0.20.0',
    '0.19.1',
    '0.19.0',
    '0.18.0',
    '0.17.2',
    '0.17.1',
    '0.17.0',
    '0.16.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'lima-vm.io' as const,
}

export type LimavmioPackage = typeof limavmioPackage
